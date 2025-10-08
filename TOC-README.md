# Table of Contents (TOC) Feature

This document explains the build-time Table of Contents (TOC) feature implemented in the Bookworm Light Astro theme.

## Overview

The TOC feature automatically generates a hierarchical table of contents for blog posts based on their heading structure (h2-h6). It's built entirely at build-time using Astro's markdown heading extraction, requiring no client-side JavaScript for basic functionality.

## Features

- **Build-time generation**: No JavaScript required on the client
- **Automatic heading IDs**: Uses rehype-slug for consistent anchor links  
- **Clickable anchors**: rehype-autolink-headings adds anchor links to all headings
- **Nested hierarchy**: Properly displays heading relationships up to 4 levels deep
- **Responsive design**: Mobile-first approach with sticky sidebar on desktop
- **Theme integration**: Uses existing Bookworm theme colors and styling
- **Accessibility**: Proper ARIA labels, focus states, and semantic markup
- **Per-post customization**: Configure depth range via frontmatter
- **Smart rendering**: Only displays when qualifying headings exist

## Implementation Details

### 1. Rehype Plugins

The following plugins are automatically applied to all markdown content:

```javascript
rehypePlugins: [
  rehypeSlug,  // Adds id attributes to headings
  [
    rehypeAutolinkHeadings,  // Adds clickable anchor links
    {
      behavior: "wrap",
      properties: { className: ["anchor-link"] }
    }
  ]
]
```

### 2. Component Structure

- **Component**: `src/layouts/components/TableOfContents.astro`
- **Props**: 
  - `headings`: Array of heading objects from Astro's render()
  - `title`: TOC title (default: "Table of Contents")
  - `minDepth`: Minimum heading level (default: 2)
  - `maxDepth`: Maximum heading level (default: 4)

### 3. Layout Integration

The TOC is integrated into `PostSingle.astro` with a responsive grid:

- **Mobile**: TOC appears above the article content
- **Desktop**: TOC is a sticky sidebar on the right with left spacer for balance

## Usage

### Basic Usage

The TOC works automatically for all blog posts. No additional configuration required.

### Per-Post Customization

Add TOC configuration to your post's frontmatter:

```yaml
---
title: "Your Post Title"
# Other frontmatter...
tocMinDepth: 2    # Start TOC at h2 level
tocMaxDepth: 3    # End TOC at h3 level
---
```

### Content Structure for Best Results

Structure your content with proper heading hierarchy:

```markdown
# Post Title (h1 - excluded from TOC by default)

## Introduction (h2 - included)

### Getting Started (h3 - included)

#### Prerequisites (h4 - included)

##### Advanced Topics (h5 - excluded by default)
```

## Styling Options

### Default Styling

The component includes built-in CSS that:
- Uses theme color variables for consistency
- Provides hover and focus states
- Implements responsive behavior
- Includes smooth scrolling

### Enhanced Styling

For additional visual polish, import the optional CSS file:

```astro
---
// In PostSingle.astro or globally
import "@/styles/toc.css";
---
```

The enhanced CSS includes:
- Subtle animations and transitions
- Enhanced focus states for accessibility
- Dark mode support
- High contrast mode support
- Print-friendly styles
- Reduced motion preferences

## Configuration Options

### Frontmatter Options

```yaml
tocMinDepth: 2    # Minimum heading depth (1-6)
tocMaxDepth: 4    # Maximum heading depth (1-6)
```

### Component Props

```typescript
interface Props {
  headings: Array<{
    depth: number;
    slug: string;
    text: string;
  }>;
  title?: string;        // Default: "Table of Contents"
  minDepth?: number;     // Default: 2
  maxDepth?: number;     // Default: 4
}
```

## Accessibility Features

- **Semantic HTML**: Uses `<nav>` with proper `aria-label`
- **Keyboard navigation**: All links are keyboard accessible
- **Focus management**: Clear focus indicators
- **Screen reader friendly**: Proper heading hierarchy and labels
- **High contrast support**: Respects user contrast preferences
- **Reduced motion**: Honors prefers-reduced-motion settings

## Browser Support

- Modern browsers with CSS Grid support
- Graceful degradation for older browsers
- Works without JavaScript enabled

## Customization Examples

### Hide TOC for Specific Posts

```yaml
---
tocMinDepth: 7  # Higher than any heading level
tocMaxDepth: 6
---
```

### Show Only h2 Headings

```yaml
---
tocMinDepth: 2
tocMaxDepth: 2
---
```

### Include h1 in TOC

```yaml
---
tocMinDepth: 1
tocMaxDepth: 4
---
```

## Performance

- **Zero JavaScript**: No client-side performance impact
- **Build-time generation**: TOC is generated during build phase
- **Minimal CSS**: Lightweight styling with optional enhancements
- **Responsive images**: No additional image assets required

## Troubleshooting

### TOC Not Appearing

1. Check that your post has headings within the configured depth range
2. Verify heading structure is properly nested
3. Ensure headings have text content (not just markdown syntax)

### Links Not Working

1. Verify rehype plugins are properly configured
2. Check that heading IDs are being generated
3. Ensure no duplicate IDs exist on the page

### Styling Issues

1. Check CSS custom property values in theme configuration
2. Verify component is importing correct paths
3. Consider using enhanced CSS file for additional features

## Future Enhancements

Potential future additions (not included in base implementation):

- **Scrollspy**: Highlight current section during scroll
- **Collapse/expand**: Toggle TOC sections
- **Progress indicator**: Show reading progress
- **Smooth scrolling offsets**: Account for fixed headers

## Contributing

When modifying the TOC feature:

1. Maintain accessibility standards
2. Ensure responsive behavior works across devices
3. Test with various content structures
4. Update documentation for any new features
5. Follow existing code style and conventions

## Dependencies

- `rehype-slug`: Automatic heading ID generation
- `rehype-autolink-headings`: Clickable anchor links
- Astro's built-in `render()` function for heading extraction

## License

This TOC implementation is part of the Bookworm Light Astro theme and follows the same license terms.