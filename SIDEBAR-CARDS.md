# Sidebar Card System

The layout now uses a modular card system where you can specify which cards appear in each sidebar using arrays in your page frontmatter.

## Available Cards

- `quick-stats` - Shows project count and experience
- `latest-article` - Displays latest blog post info  
- `get-in-touch` - Contact call-to-action card
- `skills` - Technology skill tags

## Usage

### Default Layout (if no sidebar config specified)
- Left sidebar: `['quick-stats', 'latest-article']`
- Right sidebar: `['get-in-touch', 'skills']`

### Custom Configuration
Add to your page frontmatter:

```yaml
---
title: Your Page
layout: layout.njk
sidebar:
  leftCards: ['latest-article']
  rightCards: ['quick-stats', 'skills', 'get-in-touch']
---
```

### Hide All Cards on One Side
```yaml
sidebar:
  leftCards: []
  rightCards: ['skills']
```

### Use All Cards on One Side
```yaml
sidebar:
  leftCards: ['quick-stats', 'latest-article', 'get-in-touch', 'skills']
  rightCards: []
```

## Examples

### Contact Page (hides redundant "Get in Touch" card)
```yaml
sidebar:
  leftCards: ['quick-stats', 'latest-article']
  rightCards: ['skills']
```

### About Page (custom arrangement)
```yaml
sidebar:
  leftCards: ['latest-article']
  rightCards: ['quick-stats', 'skills', 'get-in-touch']
```

## Adding New Cards

1. Create a new `.njk` file in `src/_includes/cards/`
2. Use the same structure as existing cards (card-float, content-card classes)
3. Add the filename (without extension) to any page's sidebar arrays

## Card Templates Location
All card templates are stored in: `src/_includes/cards/`
