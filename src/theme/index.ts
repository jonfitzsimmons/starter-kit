import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  brandConfig,
  typographyConfig,
  radiusConfig,
  shadowConfig,
} from "./config"

/**
 * Custom theme configuration for the design system
 * Values are pulled from config.ts for easy customization
 */
export const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary brand colors (from config)
        primary: {
          50: { value: brandConfig.accentShades[50] },
          100: { value: brandConfig.accentShades[100] },
          200: { value: brandConfig.accentShades[200] },
          300: { value: brandConfig.accentShades[300] },
          400: { value: brandConfig.accentShades[400] },
          500: { value: brandConfig.accentShades[500] },
          600: { value: brandConfig.accentShades[600] },
          700: { value: brandConfig.accentShades[700] },
          800: { value: brandConfig.accentShades[800] },
          900: { value: brandConfig.accentShades[900] },
        },
        // Secondary colors - more subdued
        secondary: {
          50: { value: "#f5f5f5" },
          100: { value: "#e0e0e0" },
          200: { value: "#c4c4c4" },
          300: { value: "#a8a8a8" },
          400: { value: "#8c8c8c" },
          500: { value: "#707070" },
          600: { value: "#5a5a5a" },
          700: { value: "#444444" },
          800: { value: "#2e2e2e" },
          900: { value: "#181818" },
        },
        // Semantic colors
        success: {
          50: { value: "#f0fdf4" },
          100: { value: "#dcfce7" },
          200: { value: "#bbf7d0" },
          300: { value: "#86efac" },
          400: { value: "#4ade80" },
          500: { value: "#22c55e" },
          600: { value: "#16a34a" },
          700: { value: "#15803d" },
          800: { value: "#166534" },
          900: { value: "#14532d" },
        },
        warning: {
          50: { value: "#fffbeb" },
          100: { value: "#fef3c7" },
          200: { value: "#fde68a" },
          300: { value: "#fcd34d" },
          400: { value: "#fbbf24" },
          500: { value: "#f59e0b" },
          600: { value: "#d97706" },
          700: { value: "#b45309" },
          800: { value: "#92400e" },
          900: { value: "#78350f" },
        },
        error: {
          50: { value: "#fef2f2" },
          100: { value: "#fee2e2" },
          200: { value: "#fecaca" },
          300: { value: "#fca5a5" },
          400: { value: "#f87171" },
          500: { value: "#ef4444" },
          600: { value: "#dc2626" },
          700: { value: "#b91c1c" },
          800: { value: "#991b1b" },
          900: { value: "#7f1d1d" },
        },
      },
      fonts: {
        heading: { value: typographyConfig.fonts.heading },
        body: { value: typographyConfig.fonts.body },
        mono: { value: typographyConfig.fonts.mono },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },
      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
      radii: {
        none: { value: radiusConfig.values.none },
        sm: { value: radiusConfig.values.sm },
        md: { value: radiusConfig.values.md },
        lg: { value: radiusConfig.values.lg },
        xl: { value: radiusConfig.values.xl },
        "2xl": { value: radiusConfig.values["2xl"] },
        "3xl": { value: radiusConfig.values["3xl"] },
        full: { value: radiusConfig.values.full },
      },
      spacing: {
        xs: { value: "0.5rem" },
        sm: { value: "0.75rem" },
        md: { value: "1rem" },
        lg: { value: "1.5rem" },
        xl: { value: "2rem" },
        "2xl": { value: "3rem" },
        "3xl": { value: "4rem" },
      },
      sizes: {
        // Mobile-friendly button sizes (44px minimum tap target)
        button: {
          sm: {
            height: { value: "2.75rem" },
            minHeight: { value: "2.75rem" },
            px: { value: "1rem" },
            fontSize: { value: "0.875rem" },
          },
          md: {
            height: { value: "3rem" },
            minHeight: { value: "3rem" },
            px: { value: "1.25rem" },
            fontSize: { value: "1rem" },
          },
          lg: {
            height: { value: "3.5rem" },
            minHeight: { value: "3.5rem" },
            px: { value: "1.5rem" },
            fontSize: { value: "1.125rem" },
          },
        },
      },
      shadows: {
        sm: { value: `0 1px 2px 0 ${shadowConfig.color}` },
        md: { value: `0 4px 6px -1px ${shadowConfig.color}` },
        lg: { value: `0 10px 15px -3px ${shadowConfig.color}` },
        xl: { value: `0 20px 25px -5px ${shadowConfig.color}` },
      },
    },
    semanticTokens: {
      colors: {
        "bg.primary": { value: { base: "white", _dark: "gray.900" } },
        "bg.secondary": { value: { base: "gray.50", _dark: "gray.800" } },
        "text.primary": { value: { base: "gray.900", _dark: "white" } },
        "text.secondary": { value: { base: "gray.600", _dark: "gray.400" } },
        "border.base": { value: { base: "gray.200", _dark: "gray.700" } },
      },
      radii: {
        // Default border radius for components (uses config)
        component: { value: { base: `{radii.${radiusConfig.default}}` } },
      },
    },
  },
})

export const system = createSystem(defaultConfig, theme)

// Re-export config for easy access
export { designSystemConfig } from "./config"
