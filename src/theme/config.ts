/**
 * =============================================================================
 * DESIGN SYSTEM CONFIG
 * =============================================================================
 * This is your universal control panel for the design system.
 * Change these values to quickly transform the look and feel of your app.
 * 
 * The theme/index.ts file consumes these values and applies them
 * throughout Chakra UI components.
 */

// =============================================================================
// COLOR MODE
// =============================================================================
export const colorModeConfig = {
  /** Default color mode: 'light' | 'dark' | 'system' */
  defaultColorMode: 'system' as const,
  
  /** Whether to persist color mode in localStorage */
  useSystemColorMode: true,
}

// =============================================================================
// BRAND COLORS
// =============================================================================
export const brandConfig = {
  /** 
   * Primary accent color - used for buttons, links, focus states
   * Change this to your brand color (hex value)
   */
  accentColor: '#0073e6',
  
  /**
   * Accent color palette - auto-generated shades
   * You can override individual shades or let the system generate them
   */
  accentShades: {
    50: '#e6f2ff',
    100: '#b3d9ff',
    200: '#80bfff',
    300: '#4da6ff',
    400: '#1a8cff',
    500: '#0073e6', // Main accent (should match accentColor)
    600: '#005cb3',
    700: '#004580',
    800: '#002e4d',
    900: '#00171a',
  },
}

// =============================================================================
// TYPOGRAPHY
// =============================================================================
export const typographyConfig = {
  /** 
   * Font families - customize for your brand
   * Options: system fonts, Google Fonts, custom fonts
   */
  fonts: {
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
  },
  
  /**
   * Base font size (affects all relative sizing)
   * Default: 16px (1rem)
   */
  baseFontSize: '16px',
  
  /**
   * Line height for body text
   */
  lineHeight: 1.6,
}

// =============================================================================
// SPACING & LAYOUT
// =============================================================================
export const spacingConfig = {
  /**
   * Base spacing unit (in rem)
   * All spacing values are multiples of this
   */
  baseUnit: 0.25, // 4px
  
  /**
   * Container max widths
   */
  containerMaxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

// =============================================================================
// BORDER RADIUS
// =============================================================================
export const radiusConfig = {
  /**
   * Global border radius scale
   * 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
   * 
   * - 'none': Sharp corners (0px)
   * - 'sm': Subtle rounding (8px)
   * - 'md': Moderate rounding (16px) - iOS-like
   * - 'lg': Generous rounding (24px)
   * - 'xl': Very rounded (32px)
   * - 'full': Pill shape (9999px)
   */
  default: 'md' as const,
  
  /**
   * Individual radius values (in rem)
   */
  values: {
    none: '0',
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem',   // 48px
    full: '9999px',
  },
}

// =============================================================================
// SHADOWS
// =============================================================================
export const shadowConfig = {
  /**
   * Shadow intensity: 'none' | 'subtle' | 'normal' | 'strong'
   */
  intensity: 'normal' as const,
  
  /**
   * Shadow color (with alpha)
   */
  color: 'rgb(0 0 0 / 0.1)',
}

// =============================================================================
// MOTION / ANIMATION
// =============================================================================
export const motionConfig = {
  /**
   * Enable/disable animations globally
   * Respects prefers-reduced-motion by default
   */
  enableAnimations: true,
  
  /**
   * Default transition duration (in ms)
   */
  transitionDuration: 200,
  
  /**
   * Default easing function
   */
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

// =============================================================================
// COMPONENT DEFAULTS
// =============================================================================
export const componentDefaults = {
  /**
   * Button defaults
   */
  button: {
    /** Default variant: 'solid' | 'outline' | 'ghost' | 'subtle' */
    variant: 'solid' as const,
    /** Default size: 'sm' | 'md' | 'lg' */
    size: 'md' as const,
  },
  
  /**
   * Input defaults
   */
  input: {
    /** Default variant: 'outline' | 'filled' | 'flushed' */
    variant: 'outline' as const,
    /** Default size: 'sm' | 'md' | 'lg' */
    size: 'md' as const,
  },
  
  /**
   * Card defaults
   */
  card: {
    /** Default variant: 'elevated' | 'outline' | 'subtle' */
    variant: 'elevated' as const,
  },
}

// =============================================================================
// EXPORT ALL CONFIG
// =============================================================================
export const designSystemConfig = {
  colorMode: colorModeConfig,
  brand: brandConfig,
  typography: typographyConfig,
  spacing: spacingConfig,
  radius: radiusConfig,
  shadow: shadowConfig,
  motion: motionConfig,
  components: componentDefaults,
}

export default designSystemConfig

