---
title: "Showcasing JSON-LD Enhancements"
meta_title: "SEO Structured Data Demo"
description: "Walkthrough of the new structured data helpers, including multi-author metadata and absolute media URLs."
date: 2025-02-14T09:00:00Z
lastmod: 2025-02-18T16:30:00Z
image: "https://cdn.example.com/images/astro-jsonld-demo.webp"
categories: ["development"]
authors: ["John Doe", "Mark Dinn"]
tags: ["seo", "structured data", "astro"]
draft: false
---

## Why this post exists

This sample article highlights the JSON-LD utilities that now power the `PostSingle` layout. It mixes a CDN-hosted hero image with multiple authors so you can confirm that absolute URLs and author lookups render as expected in the generated schema.

## Ready-to-copy frontmatter

```yaml
image: "https://cdn.example.com/images/astro-jsonld-demo.webp"
authors: ["John Doe", "Mark Dinn"]
tags: ["seo", "structured data", "astro"]
```

When you plug this into any new post, the build will resolve each person against `src/content/authors`, inject the proper `Article` author list, and leave the external image untouched.

## Testing checklist

- Run `npm run build` and inspect the emitted JSON-LD fragment in the page head.
- Hit Google’s Rich Results Test with the built page to verify the breadcrumb, article, and publisher entities.

## Closing thoughts

Feel free to adapt this file into your own tutorial post or keep it as a regression test whenever you tweak structured data logic.
