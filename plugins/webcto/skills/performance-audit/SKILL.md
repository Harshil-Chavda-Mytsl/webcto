---
name: performance-audit
description: Use when auditing website speed, Core Web Vitals, Lighthouse results, bundle size, caching, images, scripts, server latency, rendering delays, or performance engineering priorities.
---

# Performance Audit

Focus on user-visible speed and measurable bottlenecks.

## Check

- LCP, INP, CLS, TTFB, FCP, total blocking time
- render-blocking CSS/JS, hydration cost, unused code
- image sizing, formats, lazy loading, CDN/cache headers
- server response time, database latency, edge caching
- mobile constraints and slow-network behavior

## Output

Return:

- performance score
- bottleneck hypothesis
- evidence needed
- fixes ordered by likely impact
- before/after measurement plan

If no metrics are provided, label findings as inferred and request Lighthouse/RUM/build stats.
