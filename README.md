# Starter Kit

A starter kit for rapid prototyping and full-blown projects with integrated design system.

## Design System

This starter kit includes your design system from `jonfitzsimmons/design-system`. The design system has been fully integrated with:

### Theme Configuration
- Custom color palette (primary, secondary, success, warning, error)
- Typography system
- Spacing and sizing tokens
- Mobile-friendly button sizes (44px minimum tap targets)
- Border radius system
- Dark mode support

### Components Available

From `@/components/design-system`:
- `Button` - Mobile-friendly buttons with color palette support
- `Card` - Container component with elevated, outlined, and filled variants
- `Input` - Form inputs with mobile-friendly sizing
- `ColorModeToggle` - Light/dark mode switcher
- Re-exports of common Chakra UI components (Box, Flex, Stack, Heading, Text, etc.)

### Provider Setup

The design system is configured in `src/app/layout.tsx` with:
- `Provider` - Wraps your app with Chakra UI and theme providers
- `Toaster` - Toast notification system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
src/
  app/                    # Next.js app directory
    layout.tsx           # Root layout with Provider
    page.tsx             # Example page using design system
  components/
    design-system/       # Design system components
    ui/                  # UI utilities (provider, toaster, etc.)
  theme/                 # Theme configuration
```

## Usage Example

```tsx
import { Button, Card, Heading, Text } from "@/components/design-system";

export default function MyPage() {
  return (
    <Card variant="elevated" p={6}>
      <Heading>Hello World</Heading>
      <Text>This is using the design system</Text>
      <Button colorPalette="primary">Click me</Button>
    </Card>
  );
}
```

