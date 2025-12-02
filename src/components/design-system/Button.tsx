import { Button as ChakraButton, type ButtonProps } from "@chakra-ui/react"
import { forwardRef } from "react"

/**
 * Design System Button Component
 * 
 * Mobile-friendly buttons with 44px minimum tap targets
 * Automatically applies appropriate color tokens based on colorPalette
 * 
 * @example
 * ```tsx
 * <Button colorPalette="primary">Primary</Button>
 * <Button colorPalette="secondary">Secondary (subdued)</Button>
 * <Button colorPalette="success">Success</Button>
 * <Button colorPalette="warning">Warning</Button>
 * <Button colorPalette="error">Error</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, colorPalette, size = "md", borderRadius = "md", ...props }, ref) => {
    return (
      <ChakraButton
        ref={ref}
        colorPalette={colorPalette}
        size={size}
        borderRadius={borderRadius}
        {...props}
      >
        {children}
      </ChakraButton>
    )
  }
)

Button.displayName = "Button"

