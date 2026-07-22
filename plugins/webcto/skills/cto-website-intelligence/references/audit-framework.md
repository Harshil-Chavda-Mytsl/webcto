# AI CTO Website Intelligence Audit Framework

Use this framework to turn a broad platform prompt into an actionable product and engineering plan.

## Audit Categories

| Category | What to Check | Strong Evidence |
| --- | --- | --- |
| Business | ICP, use case, pricing, ROI, market pain | customer interviews, paid pilots, revenue, retention |
| Product | workflow clarity, user roles, activation, dashboard usefulness | user tests, funnel data, task completion |
| Crawler | robots handling, sitemaps, depth limits, retries, canonical URLs | crawl logs, reproducible crawl fixtures |
| SEO | metadata, indexability, structured data, internal links, content gaps | search console, crawl export, SERP checks |
| Performance | Core Web Vitals, bundle size, image optimization, caching | Lighthouse, RUM, trace data |
| Accessibility | semantic HTML, keyboard flow, contrast, forms, ARIA usage | automated checks plus manual keyboard pass |
| Security | auth, RBAC, rate limits, SSRF prevention, secret handling | threat model, tests, dependency scan |
| Architecture | boundaries, queue design, storage, scalability, failure recovery | diagrams, tests, load assumptions |
| Data | schema, retention, tenant isolation, audit trail, exports | migrations, sample data, privacy review |
| Observability | logs, traces, metrics, alerts, dashboards | alert rules, SLOs, incident examples |
| Reporting | PDF/export clarity, executive summary, evidence links | generated samples, visual QA |
| Deployment | CI/CD, rollback, env config, monitoring, backups | pipeline logs, runbooks |

## MVP Scope

Prefer this first version for a website intelligence platform:

1. Single-user auth or simple team auth.
2. Add a website URL and launch a bounded crawl.
3. Collect pages, status codes, titles, meta descriptions, headings, links, images, and basic performance signals.
4. Run SEO, accessibility, performance, security-header, and conversion heuristics.
5. Show a dashboard with score, issues, affected URLs, severity, and recommended fixes.
6. Export a concise PDF or Markdown report.
7. Include retry, error states, and transparent crawl limits.

Defer marketplace, multi-region Kubernetes, complex billing, multi-tenant enterprise RBAC, advanced AI agents, and automated remediation until after MVP validation.

## Scoring Rubric

Use 0-100 per category.

- 90-100: production strong, monitored, tested, and validated with real data.
- 75-89: usable, with minor gaps or limited validation.
- 60-74: workable prototype, but meaningful reliability or UX gaps remain.
- 40-59: risky; core flows may work but evidence is weak.
- 0-39: not ready; major missing capability or high operational risk.

Weights:

- SEO: 15
- Performance: 15
- Accessibility: 10
- Security: 15
- Conversion: 15
- Architecture: 15
- Observability: 10
- Business: 5

## Truth Checking

Classify each important statement:

- Fact: directly verified by supplied evidence or reliable source.
- Assumption: plausible but not proven.
- Prediction: future outcome or estimate.
- Opinion: preference or judgment.
- Unknown: cannot assess without more evidence.

For each weak claim, write the cheapest validation step: analytics check, customer interview, crawl sample, benchmark, prototype, security scan, or pricing test.

## Acceptance Criteria Template

For each feature, define:

- User outcome
- Input and output
- Edge cases
- Failure behavior
- Security/privacy requirement
- Test type
- Observable metric or log
- Definition of done

## Red Flags

- Giant repeated requirements with no user workflow.
- "Production grade" without budget, timelines, team capacity, or acceptance tests.
- AI decisions without evidence trail.
- Crawlers without rate limits, robots respect, SSRF protection, and tenant isolation.
- Dashboards that show scores without affected URLs and fix instructions.
- Reports that summarize without citations, screenshots, or raw evidence.
