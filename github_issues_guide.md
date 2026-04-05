# GitHub Issues Guide — Velour Med Spa

## Purpose

Use GitHub Issues to track bugs, tasks, and improvements for this project. Each issue should be actionable and scoped to a single concern.

## Issue Types

### Bug
Something is broken or not working as described in the build brief.
- **Title format:** `[Bug] Short description`
- **Body:** Steps to reproduce, expected behavior, actual behavior, screenshots if applicable.

### Task
A discrete piece of work from the implementation plan.
- **Title format:** `[Task] Short description`
- **Body:** What needs to be done, acceptance criteria, relevant section of build brief.

### Enhancement
An improvement beyond the original brief (requires approval).
- **Title format:** `[Enhancement] Short description`
- **Body:** What you want to change and why.

## Labels

| Label | Use |
|-------|-----|
| `bug` | Something is broken |
| `task` | Implementation work |
| `enhancement` | Improvement beyond brief |
| `phase-0` through `phase-9` | Which phase the issue belongs to |
| `blocked` | Cannot proceed until something else is resolved |
| `high-priority` | Needs attention before other work |

## Branch Naming

- Feature branches: `feature/short-description`
- Bug fixes: `fix/short-description`
- All branches are created from `dev` and merged back into `dev`
- `main` is only updated via PR from `dev`

## Commit Messages

Write clear, concise commit messages. Lead with what was done, not why.

Examples:
- `Add sticky navbar with scroll transition`
- `Fix mobile hamburger menu z-index`
- `Configure Tailwind custom color palette`
