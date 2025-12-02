import { Input as ChakraInput, type InputProps } from "@chakra-ui/react"
import { forwardRef } from "react"

/**
 * Design System Input Component
 * 
 * Mobile-friendly inputs with 44px minimum height and 16px border radius
 * 
 * @example
 * ```tsx
 * <Input placeholder="Enter text..." />
 * <Input size="lg" variant="subtle" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ borderRadius = "md", minH = "44px", ...props }, ref) => {
    return (
      <ChakraInput
        ref={ref}
        borderRadius={borderRadius}
        minH={minH}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

