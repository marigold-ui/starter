# Marigold Starter

A starter template for prototyping with the Marigold Design System.

## Tech Stack

- React, TypeScript, Vite, Tailwind CSS, pnpm
- Marigold Components with RUI theme

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

Marigold components are styled through the theme — never put `className` with Tailwind utilities on Marigold components. Use their built-in props (e.g. `variant`, `size`, `space`) instead. Use Tailwind only for custom containers, page-level grids, and non-Marigold elements like plain `<div>` or `<section>`.

Tailwind CSS with Marigold theme styles. See `src/index.css`:

- `@import '@marigold/theme-rui/theme.css'` for theme styles
- `@source` directives point to Marigold packages for Tailwind class scanning

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm preview` — preview production build

## Prototyping Guidelines

- Keep everything in `src/App.tsx` unless the user asks to split into multiple files. For larger prototypes, create components under `src/`.
- **Always fetch the docs** before using a component you're unsure about. Don't guess props or patterns — look them up.
- Prefer Marigold components over plain HTML elements (e.g. use `<Text>` not `<p>`, `<Headline>` not `<h1>`, `<Stack>` not `<div>`).
- Don't invent props that don't exist. If unsure, fetch the component doc to verify.

### Layout Primitives

For layout, use these Marigold components instead of raw `<div>` with Tailwind. Fetch the component docs for full props and usage.

- `<Stack>` — vertical stack
- `<Inline>` — horizontal row that wraps
- `<Columns>` — column grid
- `<Aside>` — sidebar layout (exactly 2 children)
- `<Split />` — pushes flex siblings apart
- `<Inset>` — adds inner padding

### Forms

Wrap fields in a vertical `<Stack>` layout. Place the submit `<Button>` at the bottom-left. Fetch the [forms pattern doc](https://www.marigold-ui.io/patterns/forms.md) for spacing tokens and full guidance.

### React Aria Foundation

Marigold is built on [React Aria](https://react-spectrum.adobe.com/react-aria/). This means:

- Use `onPress` instead of `onClick` for buttons and pressable elements
- Selection uses `onSelectionChange`, not `onChange`
- Form fields use `onChange` with the value directly (not an event object)
- Overlays follow the `Trigger` pattern: `<Dialog.Trigger>`, `<Menu.Trigger>`, etc.

## Marigold Documentation

Marigold provides AI-optimized markdown docs accessible directly via URL. When you need component APIs, props, usage examples, or patterns, fetch the relevant markdown file. URLs use **kebab-case** for multi-word names (e.g. `DatePicker` → `date-picker`, `TopNavigation` → `top-navigation`, `SectionMessage` → `section-message`).

**Base URL:** `https://www.marigold-ui.io/`

- **Components:** `https://www.marigold-ui.io/components/<category>/<name>.md`
  - Categories: `application`, `layout`, `actions`, `form`, `collection`, `navigation`, `overlay`, `content`
  - Example: `https://www.marigold-ui.io/components/overlay/dialog.md`
  - If a component returns a 404, try other categories.
  - Common mappings: `Button` → `actions`, `TextField/Select/Checkbox/DatePicker` → `form`, `Table/Accordion` → `collection`, `Dialog/Menu/Popover` → `overlay`, `Stack/Inline/Columns/Aside` → `layout`, `Text/Headline/Card/Image` → `content`, `Link/Tabs` → `navigation`
- **Foundations:** `https://www.marigold-ui.io/foundations/<topic>.md`
  - Example: `https://www.marigold-ui.io/foundations/form-fields.md`
- **Patterns:** `https://www.marigold-ui.io/patterns/<pattern>.md`
  - Example: `https://www.marigold-ui.io/patterns/forms.md`
- **Getting Started:** `https://www.marigold-ui.io/getting-started/installation.md`
