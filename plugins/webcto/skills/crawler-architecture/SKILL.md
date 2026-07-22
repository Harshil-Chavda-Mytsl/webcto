---
name: crawler-architecture
description: Use when designing or reviewing a website crawler, URL discovery, sitemap ingestion, robots.txt handling, crawl queues, retries, rate limits, deduplication, canonicalization, page extraction, or crawl storage architecture.
---

# Crawler Architecture

Design crawlers that are bounded, respectful, observable, and secure.

## Check

- URL normalization, canonicalization, dedupe, depth limits
- robots.txt, sitemap parsing, crawl delay, domain allowlists
- queue design, retries, backoff, timeouts, concurrency
- HTML extraction, screenshots, JS rendering strategy
- SSRF prevention, private IP blocking, content-size limits
- crawl state, artifacts, errors, and replay fixtures

## Output

Return:

- proposed architecture
- data model
- failure modes
- safety controls
- test fixtures
- MVP vs later features

Do not build an unbounded crawler.
