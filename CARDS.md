# Available Cards

Use these card names in your markdown frontmatter. **Eleventy will fail to build if you use a card name that doesn't exist** - this gives you immediate feedback on typos!

## Available Cards
- **`'get-in-touch'`** - Contact call-to-action card
- **`'latest-article'`** - Shows recent blog post  
- **`'quick-stats'`** - Displays statistics/metrics
- **`'skills'`** - Shows skills/expertise

## Usage in Markdown Frontmatter
```yaml
---
title: About
layout: layout.njk
sidebar:
  leftCards: ['latest-article']
  rightCards: ['quick-stats', 'skills', 'get-in-touch']
---
```

## Quick Reference
Copy these exact strings (including quotes):
```
'get-in-touch'
'latest-article'
'quick-stats'
'skills'
```

The card names correspond to the `.njk` files in `src/_includes/cards/`.
