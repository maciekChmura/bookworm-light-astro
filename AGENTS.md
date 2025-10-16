# Repository Guidelines

## Project Structure & Module Organization
Astro pages live in `src/pages`, grouped by route. Shared layouts and partials are under `src/layouts` and its `components` folder; reuse them instead of duplicating markup. Data-driven content (authors, posts, config) is stored in `src/content` and `src/config`, while `src/lib` holds utilities such as `contentParser` and date helpers. Static assets go in `public`; built output lands in `dist` after a production build.

## Build, Test, and Development Commands
Use `npm run dev` for a hot-reloading local server. `npm run build` produces a production bundle in `dist` and should succeed before any release. `npm run preview` serves the last build for QA. Format files with `npm run format`; the command applies Prettier with the Astro and Tailwind plugins. When adjusting TypeScript or content collections, sanity-check types with `npx astro check`.

## Coding Style & Naming Conventions
Adhere to Prettier defaults (two-space indentation, double quotes in JSON). Astro and React components stay in PascalCase (`Posts.astro`, `SearchBox.tsx`); utility modules use camelCase. Keep component props typed via TypeScript interfaces or the `Props` pattern. Tailwind CSS class strings should remain sorted by Prettier’s Tailwind plugin; avoid inline styles unless a utility class is unavailable.

## Testing Guidelines
This project currently relies on manual and type-level validation. Always run `npm run build` and open the preview to verify navigation, search, and responsive layouts. Run `npx astro check` after schema tweaks to catch invalid frontmatter. When adding new components, include sample Markdown or MDX entries in `src/content` to confirm rendering paths.

## Commit & Pull Request Guidelines
Follow the existing short, imperative commit style (e.g., `refactor: Convert TableOfContents component to use Tailwind CSS`). Each commit should capture one logical change and pass formatting. PRs must summarize the change, reference related issues, list build/test commands executed, and attach screenshots or URLs for visual updates. Keep branches rebased on `main` before requesting review.

## Content Management Tips
Authors, taxonomies, and settings live in JSON and Markdown under `src/content`; update slugs and frontmatter consistently. Use the `public/` directory for images referenced in Markdown, and prefer descriptive file names (`book-cover.webp`) for SEO-friendly paths.
