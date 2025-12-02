/**
 * Design System Components
 * 
 * Export all design system components from a single entry point
 * for easy importing in projects
 */

export { Button } from "./Button"
export type { ButtonProps } from "@chakra-ui/react"

export { Card } from "./Card"
export type { CardProps } from "./Card"

export { Input } from "./Input"
export type { InputProps } from "@chakra-ui/react"

export { ColorModeToggle } from "./ColorModeToggle"

// Re-export commonly used Chakra UI components
export {
  Box,
  Flex,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Link,
  Image,
  Icon,
  Spinner,
  Badge,
  Separator,
  Container,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react"

export type {
  BoxProps,
  FlexProps,
  StackProps,
  HeadingProps,
  TextProps,
  LinkProps,
  ImageProps,
  ContainerProps,
  GridProps,
  SimpleGridProps,
} from "@chakra-ui/react"

