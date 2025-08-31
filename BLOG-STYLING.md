# Blog Markdown Styling System

The site now has targeted markdown styles that only apply to blog posts, ensuring clean typography and visual hierarchy.

## How It Works

### Automatic Detection
The layout template automatically detects blog posts by checking for the `headline` frontmatter field:

```njk
<div class="{% if headline %}prose prose-blog{% else %}prose{% endif %}">
  {{ content | safe }}
</div>
```

- **Blog posts**: Get the `prose prose-blog` classes for rich markdown styling
- **Other pages**: Get only the basic `prose` class

### Blog-Specific Styles

#### Headings
- **H1**: Large gradient text (indigo to purple), 800 weight
- **H2**: Underlined section headers with spacing
- **H3/H4**: Hierarchical sizing and colors
- **Proper spacing**: Consistent margins for reading flow

#### Typography
- **Paragraphs**: Optimal line-height (1.75) for readability
- **Links**: Indigo color with hover effects and subtle underlines
- **Emphasis**: Bold and italic text with appropriate contrast
- **Color hierarchy**: Different shades for visual importance

#### Code Styling
- **Inline code**: Light background with red text and borders
- **Code blocks**: Dark theme with proper syntax highlighting support
- **Consistent spacing**: Proper margins around code elements

#### Images
- **Auto-centering**: Images automatically centered
- **Rounded corners**: 0.75rem border radius
- **Drop shadows**: Subtle shadows for depth
- **Responsive**: Max-width 100% for mobile compatibility

#### Lists
- **Styled markers**: Indigo colored bullets/numbers
- **Proper spacing**: Comfortable line-height and margins
- **Indentation**: Clear visual hierarchy

#### Tables
- **Modern design**: White background with subtle shadows
- **Header styling**: Light background for distinction
- **Borders**: Clean lines with rounded corners
- **Responsive**: Proper spacing and padding

#### Blockquotes
- **Left border**: Indigo accent border
- **Background**: Light gray background
- **Italic text**: Stylized with proper contrast
- **Rounded corners**: Consistent with site design

#### Horizontal Rules
- **Gradient lines**: Subtle gradient dividers
- **Proper spacing**: 3rem margins for section breaks

## Benefits

1. **Targeted Styling**: Only blog posts get the rich markdown styles
2. **Clean Typography**: Professional reading experience
3. **Visual Hierarchy**: Clear distinction between heading levels
4. **Brand Consistency**: Matches the site's indigo/purple theme
5. **Mobile Optimized**: Responsive design that works on all devices
6. **Performance**: Efficient CSS that only applies where needed

## File Structure

```
src/
├── styles.css                    # Contains .prose-blog styles
└── _includes/
    └── layout.njk                # Template with conditional classes
```

## Customization

To modify blog styles, edit the `.prose-blog` styles in `src/styles.css`. The styles are:
- Scoped to only affect blog posts
- Organized by element type for easy maintenance
- Use CSS custom properties for consistent theming

## Example Usage

Any markdown file with a `headline` frontmatter field will automatically get the enhanced styling:

```yaml
---
title: My Blog Post
headline: This triggers blog styling
layout: layout.njk
---

# This will be styled as a gradient heading
## This gets an underline
### Smaller heading with proper hierarchy
```
