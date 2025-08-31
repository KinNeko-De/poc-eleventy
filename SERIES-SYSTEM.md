# Blog Series System

The topic pages have been converted to Nunjucks templates that allow you to define which blog posts belong to each series.

## How It Works

Each topic series is now a `.njk` file in `src/topics/` that defines:
1. **Series information** (title, description, sidebar cards)
2. **Post list** - array of blog post slugs that belong to the series
3. **Display template** - renders posts in the same format as the main blog listing

## Series Configuration

### Frontmatter Structure
```yaml
---
title: Series Name
layout: layout.njk
sidebar:
  leftCards: ['cards/all-articles', 'cards/topics/other-topic']
  rightCards: ['cards/support', 'cards/get-in-touch']
seriesPosts:
  - blog-post-slug-1
  - blog-post-slug-2
---
```

### Current Series

#### **Web Development Series**
- **File**: `src/topics/web-development.njk`
- **Posts**: `getting-started-modern-web-dev`
- **Focus**: Modern web development practices and frameworks

#### **Design Systems Series**
- **File**: `src/topics/design-systems.njk`
- **Posts**: `css-grid-layouts`
- **Focus**: UI/UX design patterns and layout systems

#### **Performance Tips Series**
- **File**: `src/topics/performance.njk`
- **Posts**: `web-performance-optimization`
- **Focus**: Web performance optimization techniques

## Adding Posts to Series

### Option 1: Add to Existing Series
Update the `seriesPosts` array in the relevant topic file:

```yaml
seriesPosts:
  - existing-post-1
  - existing-post-2
  - new-post-slug    # Add your new post here
```

### Option 2: Create New Series
1. Create a new `.njk` file in `src/topics/`
2. Follow the template structure above
3. Define your series posts in the `seriesPosts` array

## Post Slug Reference

The slug is the folder name of your blog post:
- `src/blog/getting-started-modern-web-dev/` → slug: `getting-started-modern-web-dev`
- `src/blog/css-grid-layouts/` → slug: `css-grid-layouts`
- `src/blog/web-performance-optimization/` → slug: `web-performance-optimization`

## Display Features

- **Same format as blog listing**: Cards with feature images, headlines, and sublines
- **Responsive design**: Horizontal layout on desktop, stacked on mobile
- **Dynamic content**: Automatically pulls post data from the blog collection
- **Series context**: Each series page explains the topic and learning goals

## Benefits

- **Flexible organization**: Easily reorganize posts between series
- **Multiple series**: A post can belong to multiple series if needed
- **Consistent display**: Same visual format across blog listing and series pages
- **Easy maintenance**: Just update the `seriesPosts` array to modify series content
