# Blog Post Organization Structure

Each blog post now has its own dedicated folder that contains all related assets.

## Folder Structure

```
src/blog/
├── getting-started-modern-web-dev/
│   ├── index.md               # Main blog post content
│   ├── hero.jpg              # Feature image for blog listing
│   ├── workflow-diagram.png   # Images referenced in the post
│   └── images/               # Additional images subfolder
│       └── README.md
├── css-grid-layouts/
│   ├── index.md
│   ├── hero.jpg
│   ├── grid-example.png
│   └── images/
│       └── README.md
└── web-performance-optimization/
    ├── index.md
    ├── hero.jpg
    ├── performance-chart.png
    └── images/
        └── README.md
```

## How to Add Images

### Feature Images
Feature images are defined in the frontmatter and used in blog listings:

```yaml
---
title: My Blog Post
featureImage: /blog/my-post-folder/hero.jpg
---
```

### Images Within Posts
Reference images relative to the post folder:

```markdown
![Description](./image-name.png)
![Chart](./images/detailed-chart.png)
```

### Organization Tips

1. **Feature images**: Place directly in the post folder as `hero.jpg`
2. **Simple images**: Place directly in the post folder for easy reference
3. **Multiple images**: Use the `images/` subfolder for organization
4. **Naming**: Use descriptive names like `workflow-diagram.png` instead of generic names

## Benefits

- **Self-contained**: Each post and its assets are kept together
- **Easy management**: Moving or archiving a post means moving one folder
- **Clear URLs**: Post URLs remain clean (`/blog/post-name/`)
- **Asset organization**: Images and other files are logically grouped
- **Version control**: Better tracking of changes to specific posts and their assets
