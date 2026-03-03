---
name: github-auto-publish
description: Publish or sync a local project to GitHub with minimal back-and-forth. Use this skill whenever the user asks to upload, push, sync, backup, or auto-publish a project/repo to GitHub, including first-time setup (init, first commit, create remote) and repeat updates.
compatibility:
  tools: Bash
---

# GitHub Auto Publish Skill

Use this skill to safely automate pushing the current project to GitHub.

## Goals

- Reduce manual git/gh steps for first publish and later syncs.
- Keep user intent clear (repo name, visibility, branch) while minimizing questions.
- Avoid risky behavior (force push, leaking secrets, destructive git commands).

## Trigger Guidance

Use this skill when the user asks things like:

- "幫我把這個專案傳到 GitHub"
- "push this repo"
- "sync my project to GitHub"
- "create GitHub repo and upload"

Also use it when the user only implies the same goal ("backup this code online", "幫我自動上傳程式碼").

## Inputs To Confirm (Only if truly missing)

Default aggressively, ask only when a missing value materially changes outcome:

1. Repo name (default: current folder name)
2. Visibility (default: private)
3. Branch (default: current branch)

If `origin` remote already exists, do not ask for repo name/visibility unless user explicitly wants to change remote.

## Safety Rules

- Never run destructive commands (`reset --hard`, force push) unless user explicitly asks.
- Never commit likely secret files (`.env`, `*.pem`, `id_rsa`, `credentials.json`) without explicit user confirmation.
- If authentication fails (`gh auth status`), stop and tell user exactly how to authenticate.

## Workflow

1. Check repo status and branch.
2. Detect whether `origin` exists.
3. Stage non-secret changes (`git add -A` with secret guard).
4. Commit if there are staged changes.
5. If no `origin`, create GitHub repo via `gh repo create`.
6. Push current branch and set upstream.
7. Return concise result summary and repo URL.

## Preferred Automation Script

When possible, run the bundled script:

```bash
python skills/github-auto-publish/scripts/publish_to_github.py --yes
```

Useful options:

```bash
python skills/github-auto-publish/scripts/publish_to_github.py --repo-name my-repo --visibility private --branch main --yes
```

## Output Format

Return results in this structure:

1. What was done (init/create remote/commit/push)
2. Repo URL and branch pushed
3. Files skipped for safety (if any)
4. Next command user may want (optional)

## Troubleshooting

- If `gh` missing: instruct install GitHub CLI and rerun.
- If auth missing: `gh auth login` then rerun.
- If protected branch rejected: push to feature branch and suggest creating PR.
