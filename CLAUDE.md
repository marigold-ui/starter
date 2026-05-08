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

### Styling

Marigold components are styled through the theme — don't apply Tailwind utility classes directly to Marigold components. Use Tailwind only for custom layout wrappers or non-Marigold elements.

Tailwind CSS with Marigold theme styles. See `src/index.css`:

- `@import '@marigold/theme-rui/theme.css'` for theme styles
- `@source` directives point to Marigold packages for Tailwind class scanning

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm preview` — preview production build

## Prototyping Guidelines

- Keep everything in `src/App.tsx` unless the user asks to split into multiple files. For larger prototypes, create components under `src/`.
- **Always fetch the manifest, then the component doc** before using a component you're unsure about. Don't guess props or patterns — look them up.
- Prefer Marigold components over plain HTML elements (e.g. use `<Text>` not `<p>`, `<Headline>` not `<h1>`, `<Stack>` not `<div>`).
- Don't invent props that don't exist. If unsure, fetch the component's doc to verify.

### React Aria Foundation

Marigold is built on [React Aria](https://react-spectrum.adobe.com/react-aria/). This means:

- Use `onPress` instead of `onClick` for buttons and pressable elements
- Selection uses `onSelectionChange`, not `onChange`
- Form fields use `onChange` with the value directly (not an event object)
- Overlays follow the `Trigger` pattern: `<Dialog.Trigger>`, `<Menu.Trigger>`, etc.

## Marigold Documentation

Marigold provides AI-optimized markdown docs accessible directly via URL. **Start with the manifest** — it lists every doc page (components, foundations, patterns, getting started) with category, description, and markdown URL.

**Manifest:** `https://www.marigold-ui.io/api/manifest.json`

Each entry has the shape `{ name, slug, category, description, badge, url }`. Resolve the component you need to its `url`, then fetch `https://www.marigold-ui.io{url}` to get the markdown.

Slugs use **kebab-case** for multi-word names (e.g. `DatePicker` → `date-picker`, `TopNavigation` → `top-navigation`, `SectionMessage` → `section-message`).

Examples (resolved via the manifest):

- Component: `https://www.marigold-ui.io/api/md/components/overlay/dialog.md`
- Foundation: `https://www.marigold-ui.io/api/md/foundations/form-fields.md`
- Pattern: `https://www.marigold-ui.io/api/md/patterns/forms.md`
- Getting Started: `https://www.marigold-ui.io/api/md/getting-started/installation.md`
