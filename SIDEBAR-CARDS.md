# Sidebar Card System

The layout now uses a modular card system where you can specify which cards appear in each sidebar using arrays in your page frontmatter.

## Available Cards

### **Core Cards** (in `cards/` directory)
- `cards/quick-stats` - Shows project count and experience
- `cards/latest-article` - Displays latest blog post info  
- `cards/get-in-touch` - Contact call-to-action card
- `cards/skills` - Technology skill tags
- `cards/portfolio` - Link to portfolio/projects page
- `cards/support` - Funding/support call-to-action
- `cards/github` - GitHub profile promotion

### **Topic Series Cards** (in `cards/topics/` directory)
- `cards/topics/topic-web-dev` - Web Development article series (8 articles)
- `cards/topics/topic-design` - Design Systems article series (5 articles)
- `cards/topics/topic-performance` - Performance Tips article series (6 articles)

## Usage

### Default Layout (if no sidebar config specified)
- Left sidebar: `['cards/quick-stats', 'cards/latest-article']`
- Right sidebar: `['cards/get-in-touch', 'cards/skills']`

### Custom Configuration
Add to your page frontmatter using full paths:

```yaml
---
title: Your Page
layout: layout.njk
sidebar:
  leftCards: ['cards/latest-article']
  rightCards: ['cards/quick-stats', 'cards/skills', 'cards/get-in-touch']
---
```

### Using Topic Cards
```yaml
sidebar:
  leftCards: ['cards/latest-article', 'cards/topics/topic-web-dev', 'cards/topics/topic-design']
  rightCards: ['cards/support', 'cards/get-in-touch']
```

### Hide All Cards on One Side
```yaml
sidebar:
  leftCards: []
  rightCards: ['cards/skills']
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
