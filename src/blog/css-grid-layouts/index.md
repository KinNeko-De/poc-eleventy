---
title: Another Blog Post
date: 2025-08-10
layout: layout.njk
headline: Building Responsive Web Layouts with CSS Grid
subline: Master CSS Grid fundamentals, responsive patterns, and advanced techniques for creating modern web layouts
featureImage: /blog/css-grid-layouts/hero.jpg
---

# Building Responsive Web Layouts with CSS Grid

Here is the _second_ blog post focusing on modern CSS layout techniques. Also written in markdown.

## Understanding CSS Grid

CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional.

### Why Choose CSS Grid?

![CSS Grid Layout](./grid-example.png)

CSS Grid offers several advantages:

- **Two-dimensional control** - rows and columns
- **Responsive by default** - with `fr` units and `auto-fit`
- **Simplified markup** - less need for wrapper divs
- **Better semantic HTML** - content order independent of visual layout

## Basic Grid Concepts

### Grid Container and Items

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
```

### Grid Template Areas

One of the most powerful features is **grid template areas**:

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

## Responsive Design Patterns

### The Holy Grail Layout

The classic [Holy Grail layout](https://en.wikipedia.org/wiki/Holy_grail_(web_design)) becomes trivial with CSS Grid:

1. **Header** spans full width
2. **Main content** with flexible sidebars
3. **Footer** spans full width

### Card Layouts

Perfect for:
- Product galleries
- Blog post previews
- Image portfolios
- Dashboard widgets

## Browser Support and Fallbacks

CSS Grid has excellent browser support:

| Browser | Support |
|---------|---------|
| Chrome | ✅ 57+ |
| Firefox | ✅ 52+ |
| Safari | ✅ 10.1+ |
| Edge | ✅ 16+ |

For older browsers, use [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports):

```css
.fallback-layout {
  /* Flexbox fallback */
  display: flex;
  flex-wrap: wrap;
}

@supports (display: grid) {
  .fallback-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

## Advanced Techniques

### Subgrid (Coming Soon)

The [CSS Grid Level 2](https://www.w3.org/TR/css-grid-2/) specification introduces subgrid:

> Subgrid allows grid items to inherit the grid lines of their parent grid container.

### Grid Animation

CSS Grid properties can be animated:

```css
.animated-grid {
  transition: grid-template-columns 0.3s ease;
}

.animated-grid:hover {
  grid-template-columns: 1fr 2fr 1fr;
}
```

## Tools and Resources

**Learning Resources:**
- [CSS Grid Garden](https://cssgridgarden.com/) - Interactive learning game
- [Grid by Example](https://gridbyexample.com/) - Comprehensive examples by Rachel Andrew
- [CSS Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Complete reference

**Development Tools:**
- Firefox DevTools Grid Inspector
- Chrome DevTools Grid overlay
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/) - Visual grid builder

---

*Have you tried CSS Grid in your projects? What layout challenges have you solved with it?*
