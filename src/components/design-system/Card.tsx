import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CardProps extends BoxProps {
  variant?: "elevated" | "outlined" | "filled"
}

/**
 * Design System Card Component
 * 
 * A flexible container component with multiple visual variants
 * 
 * @example
 * ```tsx
 * <Card variant="elevated" p={6}>
 *   <Heading>Card Title</Heading>
 *   <Text>Card content goes here</Text>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", children, ...props }, ref) => {
    const variantStyles = {
      elevated: {
        bg: "bg.primary",
        shadow: "lg",
        borderRadius: "md", // 16px default
      },
      outlined: {
        bg: "bg.primary",
        borderWidth: "1px",
        borderColor: "border.base",
        borderRadius: "md", // 16px default
      },
      filled: {
        bg: "bg.secondary",
        borderRadius: "md", // 16px default
      },
    }

    return (
      <Box ref={ref} {...variantStyles[variant]} {...props}>
        {children}
      </Box>
    )
  }
)

Card.displayName = "Card"

