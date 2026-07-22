# WebCTO

Claude custom plugin marketplace for WebCTO, a token-saving AI CTO workflow for website intelligence, business truth checking, SEO, performance, accessibility, security, conversion, crawler architecture, reports, and MVP planning.

## Install In Claude

Add this marketplace:

```text
/plugin marketplace add Harshil-Chavda-Mytsl/webcto
```

Install the plugin:

```text
/plugin install webcto@lee-custom-plugins
```

Reload plugins:

```text
/reload-plugins
```

Use it:

```text
/webcto:audit-website Audit my website platform plan
```

## Structure

```text
.claude-plugin/marketplace.json
plugins/webcto/.claude-plugin/plugin.json
plugins/webcto/skills/
plugins/webcto/commands/
plugins/webcto/agents/
plugins/webcto/scripts/
```
