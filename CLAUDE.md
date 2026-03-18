# Marigold Starter

A starter template for prototyping with the Marigold Design System.

## Tech Stack

- React 19, TypeScript 5.9, Vite 8, Tailwind CSS 4.2
- Marigold Components 17.x with RUI theme

## Code Style

- Single quotes, no arrow parens, trailing commas (`es5`), no tabs (see `.prettierrc`)

## Architecture

### Provider Pattern

The `MarigoldProvider` is set up in `src/index.tsx`. You don't need to touch it — just edit `src/App.tsx` to build your UI.

### Component Imports

Named imports from `@marigold/components`:

```tsx
import { Button, Dialog, Text } from '@marigold/components';
```

Compound components use dot notation:

```tsx
<Dialog.Trigger>
  <Button>Open</Button>
  <Dialog>...</Dialog>
</Dialog.Trigger>

<Accordion.Item title="...">...</Accordion.Item>
```

### Icons

```tsx
import { SomeIcon } from '@marigold/icons';
```

### CSS Setup

Tailwind CSS with Marigold theme styles. See `src/index.css`:

- `@import '@marigold/theme-rui/theme.css'` for theme styles
- `@source` directives point to Marigold packages for Tailwind class scanning

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm preview` — preview production build

## Marigold Documentation

Marigold provides AI-optimized markdown docs accessible directly via URL. When you need component APIs, props, usage examples, or patterns, fetch the markdown file:

**Base URL:** `https://www.marigold-ui.io/mcp/`

- **Components:** `https://www.marigold-ui.io/mcp/components/<category>/<name>.md`
  - Categories: application, layout, actions, form, collection, navigation, overlay, content
  - Example: `https://www.marigold-ui.io/mcp/components/application/provider.md`
  - Example: `https://www.marigold-ui.io/mcp/components/overlay/dialog.md`
- **Foundations:** `https://www.marigold-ui.io/mcp/foundations/<topic>.md`
  - Topics: accessibility, design-tokens, layouts, icons, form-fields, spacing, elevation
- **Patterns:** `https://www.marigold-ui.io/mcp/patterns/<pattern>.md`
  - Patterns: forms, form-implementation, filter, loading-states, feedback-messages, async-data-loading, multiple-selection
- **Getting started:** `https://www.marigold-ui.io/mcp/getting-started/installation.md`
