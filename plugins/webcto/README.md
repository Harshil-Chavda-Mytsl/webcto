# WebCTO

Claude custom plugin for auditing, planning, and validating website intelligence platforms.

It includes:

- 12 focused skills for token-saving progressive disclosure
- `/webcto:audit-website` command
- `webcto:cto-auditor` agent
- deterministic website audit scoring script

## Skills

- `cto-website-intelligence`
- `business-truth-checker`
- `seo-audit`
- `performance-audit`
- `accessibility-audit`
- `security-audit`
- `conversion-audit`
- `crawler-architecture`
- `product-roadmap`
- `technical-acceptance-criteria`
- `report-generator`
- `mvp-scope-reducer`

## Local Test In Claude Code

From this repository root:

```bash
claude --plugin-dir ./plugins/webcto
```

Then run:

```text
/webcto:audit-website Audit this plan: build a website crawler that scores SEO, accessibility, performance, security, and conversion.
```

You can also ask Claude to use a specific skill, for example:

```text
Use the business-truth-checker skill to test this startup idea.
Use the mvp-scope-reducer skill to cut this platform plan down to v1.
Use the crawler-architecture skill to design the crawl engine.
```

Reload changes during development:

```text
/reload-plugins
```

## Install From This GitHub Repository

After pushing this repository to GitHub, users can add the marketplace:

```text
/plugin marketplace add Harshil-Chavda-Mytsl/webcto
```

Then install:

```text
/plugin install webcto@lee-custom-plugins
```

This works after the repository contains `.claude-plugin/marketplace.json` at the repo root.

## Direct Marketplace Structure

The marketplace file lives at:

```text
.claude-plugin/marketplace.json
```

The plugin source is:

```text
./plugins/webcto
```

## Score Script

Run from the plugin root:

```bash
node scripts/score_website_audit.mjs --seo 72 --performance 65 --accessibility 80 --security 70 --conversion 58 --architecture 74 --observability 50 --business 60
```
