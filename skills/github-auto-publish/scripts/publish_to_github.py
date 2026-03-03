#!/usr/bin/env python3
import argparse
import json
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path


SECRET_PATTERNS = {
    ".env",
    "credentials.json",
    "id_rsa",
    "id_dsa",
    "id_ed25519",
}


def run(cmd, check=True, capture=True):
    result = subprocess.run(
        cmd,
        text=True,
        capture_output=capture,
        shell=False,
    )
    if check and result.returncode != 0:
        stderr = (result.stderr or "").strip()
        stdout = (result.stdout or "").strip()
        message = stderr or stdout or f"Command failed: {' '.join(cmd)}"
        raise RuntimeError(message)
    return result


def command_exists(name):
    try:
        run([name, "--version"], check=True)
        return True
    except Exception:
        return False


def in_git_repo():
    try:
        run(["git", "rev-parse", "--is-inside-work-tree"])
        return True
    except Exception:
        return False


def get_current_branch():
    result = run(["git", "branch", "--show-current"])
    return (result.stdout or "").strip() or "main"


def has_origin_remote():
    result = run(["git", "remote"], check=False)
    remotes = set((result.stdout or "").split())
    return "origin" in remotes


def get_repo_root():
    result = run(["git", "rev-parse", "--show-toplevel"])
    return Path((result.stdout or "").strip())


def list_untracked_and_changed_files():
    result = run(["git", "status", "--porcelain"])
    files = []
    for line in (result.stdout or "").splitlines():
        if not line:
            continue
        files.append(line[3:])
    return files


def is_likely_secret(path):
    name = Path(path).name
    lower = name.lower()
    if name in SECRET_PATTERNS:
        return True
    if lower.endswith(".pem") or lower.endswith(".key"):
        return True
    return False


def has_staged_changes():
    result = run(["git", "diff", "--cached", "--name-only"], check=False)
    return bool((result.stdout or "").strip())


def has_any_commit():
    result = run(["git", "rev-parse", "--verify", "HEAD"], check=False)
    return result.returncode == 0


def remote_url():
    result = run(["git", "remote", "get-url", "origin"], check=False)
    return (result.stdout or "").strip()


def ensure_git_repo():
    if in_git_repo():
        return False
    run(["git", "init"])
    return True


def ensure_gh_auth():
    result = run(["gh", "auth", "status"], check=False)
    return result.returncode == 0


def commit_changes(message):
    run(["git", "commit", "-m", message])


def create_repo_with_gh(name, visibility):
    vis_flag = "--private" if visibility == "private" else "--public"
    run(["gh", "repo", "create", name, vis_flag, "--source", ".", "--remote", "origin"])


def push_branch(branch):
    run(["git", "push", "-u", "origin", branch])


def parse_args():
    parser = argparse.ArgumentParser(description="Auto publish local project to GitHub")
    parser.add_argument("--repo-name", default=None, help="GitHub repository name")
    parser.add_argument("--visibility", choices=["private", "public"], default="private")
    parser.add_argument("--branch", default=None, help="Branch to push")
    parser.add_argument("--message", default=None, help="Commit message")
    parser.add_argument("--allow-secrets", action="store_true", help="Allow committing likely secret files")
    parser.add_argument("--yes", action="store_true", help="Non-interactive mode")
    return parser.parse_args()


def main():
    args = parse_args()

    if not command_exists("git"):
        print("Error: git is not installed or unavailable in PATH.", file=sys.stderr)
        return 1

    initialized = ensure_git_repo()
    if initialized:
        print("Initialized a new git repository.")

    root = get_repo_root()
    os.chdir(root)

    branch = args.branch or get_current_branch() or "main"
    repo_name = args.repo_name or root.name
    commit_message = args.message or f"chore: sync project updates ({datetime.now().strftime('%Y-%m-%d %H:%M')})"

    files = list_untracked_and_changed_files()
    secret_files = [f for f in files if is_likely_secret(f)]

    if secret_files and not args.allow_secrets:
        print("Stopped: potential secret files detected:")
        for f in secret_files:
            print(f" - {f}")
        print("Re-run with --allow-secrets only if you are sure these are safe.")
        return 2

    run(["git", "add", "-A"])

    committed = False
    if has_staged_changes() or not has_any_commit():
        commit_changes(commit_message)
        committed = True

    origin_exists = has_origin_remote()
    created_remote = False

    if not origin_exists:
        if not command_exists("gh"):
            print("Error: gh (GitHub CLI) is required for first-time repo creation.", file=sys.stderr)
            return 3
        if not ensure_gh_auth():
            print("Error: gh is not authenticated. Run 'gh auth login' and retry.", file=sys.stderr)
            return 4
        create_repo_with_gh(repo_name, args.visibility)
        created_remote = True

    push_branch(branch)

    result = {
        "initialized_repo": initialized,
        "created_commit": committed,
        "created_remote": created_remote,
        "branch": branch,
        "remote_url": remote_url(),
    }
    print(json.dumps(result, ensure_ascii=True, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
