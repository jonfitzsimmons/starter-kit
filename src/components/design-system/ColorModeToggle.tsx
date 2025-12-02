"use client"

import { Button } from "./Button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * Color Mode Toggle Component
 * 
 * Switches between light and dark mode
 * 
 * @example
 * ```tsx
 * <ColorModeToggle />
 * ```
 */
export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button size="sm" variant="outline" disabled>
        ...
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </Button>
  )
}

