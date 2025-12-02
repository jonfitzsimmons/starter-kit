# Web Interface Guidelines - Summary

Quick overview of the web interface guidelines for AI model reference.

## Purpose

This documentation provides comprehensive guidelines for creating exceptional **web interfaces** (desktop browsers), specifically **NOT** for mobile (iOS/Android) interfaces.

## Key Distinctions: Web vs Mobile

| Aspect | Web (Desktop) | Mobile (iOS/Android) |
|--------|---------------|----------------------|
| **Input Precision** | Cursor (pixel-perfect) | Touch (larger targets) |
| **Hover States** | Essential | Not applicable |
| **Keyboard** | Full keyboard support | Limited/on-screen |
| **Multi-tasking** | Multiple windows/tabs | Single app focus |
| **Gestures** | Mouse/trackpad gestures | Touch gestures |
| **Context Menus** | Right-click expected | Long-press |
| **Copy/Paste** | Keyboard shortcuts | Touch-based |

## Core Principles

### 1. Cursor Precision
- Leverage pixel-perfect cursor positioning
- Smaller click targets acceptable (minimum 44px for accessibility)
- Precise hover states
- Fine-grained interactions

### 2. Hover States
- Essential for web interfaces
- Reveal affordances and information
- Progressive disclosure
- Immediate visual feedback

### 3. Keyboard Navigation
- Full keyboard accessibility required
- Keyboard shortcuts for power users
- Focus management (trapping, return)
- Logical tab order

### 4. Browser Integration
- Work with browser, not against it
- URL state for shareable/bookmarkable views
- Browser back/forward support
- Respect browser behaviors (zoom, search, extensions)

### 5. Multi-Tab Context
- Sync state when appropriate
- Handle conflicts gracefully
- Refresh on focus
- Independent window states

### 6. Desktop Gestures
- Trackpad support (two-finger scroll, pinch zoom)
- Touch on desktop devices
- Complement mouse interactions
- Don't override system gestures

## Essential Patterns

### Command Palette (Cmd/Ctrl+K)
Universal search and command interface for complex applications.

### URL State Management
Use URLs for shareable, bookmarkable state (filters, views, selections).

### Hover Reveals
Show controls, tooltips, and previews on hover.

### Focus Management
- Visible focus indicators
- Focus trapping in modals
- Focus return after closing
- Logical tab order

### Keyboard Shortcuts
- `Cmd/Ctrl+K` - Command palette
- `Cmd/Ctrl+/` - Show shortcuts
- `Escape` - Close modals
- `Enter` - Confirm/Submit
- `Tab` - Next element
- `Shift+Tab` - Previous element

## Implementation Checklist

### For Any Web Component
- [ ] Hover states implemented
- [ ] Focus states visible
- [ ] Keyboard accessible
- [ ] Cursor changes appropriately
- [ ] Browser integration (URL state if shareable)
- [ ] Accessibility (ARIA, keyboard, screen reader)

### For New Projects
- [ ] Desktop-first design (not mobile-first)
- [ ] Keyboard navigation complete
- [ ] Hover states for interactive elements
- [ ] URL state management (if needed)
- [ ] Browser history integration
- [ ] Reduced motion support
- [ ] Multi-tab considerations (if applicable)

## Quick Reference Locations

- **Principles**: `principles/` - Core web interface principles
- **Patterns**: `web-ui-patterns.md` - Common UI patterns
- **Quick Ref**: `quick-reference.md` - One-page cheat sheet
- **Prompts**: `prompts/` - Project kickoff templates

## When to Use These Guidelines

Use these guidelines when:
- ✅ Creating web applications (desktop browsers)
- ✅ Building websites with interactive elements
- ✅ Designing dashboards and admin interfaces
- ✅ Developing web-based tools
- ✅ Working on desktop-first experiences

**Do NOT use for:**
- ❌ Native iOS applications
- ❌ Native Android applications
- ❌ Mobile-first responsive designs
- ❌ Touch-only mobile interfaces

## Integration with Existing Guidelines

These web guidelines complement the existing `rauno-devourin-details` principles:
- Many principles apply to both (inferring intent, physics simulation)
- Implementation details differ for web vs mobile
- Web-specific patterns (hover, cursor, browser integration) are unique to web

## Model Reference

When creating web projects, reference:
1. **README.md** - Overview and structure
2. **quick-reference.md** - Quick lookup during development
3. **principles/** - Deep dives into web-specific principles
4. **prompts/** - Templates for project kickoff
5. **web-ui-patterns.md** - Common patterns with examples

Always emphasize:
- Desktop web experience (not mobile)
- Cursor precision and hover states
- Full keyboard accessibility
- Browser integration
- Multi-tab considerations

---

*This summary is designed for quick reference. See individual documents for detailed implementation guidance.*

