# @seaguntech/ui

Shared UI component library for the Seaguntech monorepo.

## Install

```bash
pnpm add @seaguntech/ui
```

## Usage

```tsx
import { Button } from '@seaguntech/ui';

export function Example() {
  return <Button size="lg">Get started</Button>;
}
```

## Styles

Import the global design system once in your app:

```css
@import '@seaguntech/ui/styles.css';
```

## Notes

- Tailwind CSS v4 tokens live in `@seaguntech/design-system`.
- Components use `class-variance-authority` and `cn` helper.
