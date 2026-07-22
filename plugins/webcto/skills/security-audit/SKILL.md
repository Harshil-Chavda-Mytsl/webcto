---
name: security-audit
description: Use when reviewing website or SaaS security, authentication, RBAC, multi-tenant isolation, crawler SSRF risk, rate limits, secret handling, dependency risk, headers, privacy, or production hardening.
---

# Security Audit

Think like a defensive CTO. Prioritize exploitability and blast radius.

## Check

- auth, session handling, password reset, MFA/SSO needs
- RBAC, tenant isolation, object-level authorization
- SSRF protections for crawlers and URL fetchers
- rate limits, abuse controls, file upload limits
- secrets, env vars, logging of sensitive data
- security headers, dependency risk, webhook verification

## Output

Return:

- severity-ranked findings
- attack path or failure mode
- affected component
- recommended mitigation
- test or verification step

Never recommend scanning arbitrary private/internal URLs without explicit authorization.
