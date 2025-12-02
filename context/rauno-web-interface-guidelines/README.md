# Web Interface Guidelines

A comprehensive reference for creating exceptional web interfaces. These guidelines are specifically focused on **web applications and websites**, not mobile (iOS/Android) interfaces.

## Scope

This documentation provides:
- **Web-specific interaction patterns** (mouse, keyboard, touch on desktop)
- **Browser-native behaviors** and how to enhance them
- **Desktop-first ergonomics** (cursor precision, hover states, keyboard shortcuts)
- **Multi-window and multi-tab considerations**
- **Responsive design for desktop viewports** (not mobile-first)

## ⚠️ Important Distinction

These guidelines are for **web interfaces**:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Touch-enabled laptops/tablets in desktop mode
- ✅ Large viewports (typically 1024px+)
- ✅ Mouse, keyboard, and trackpad interactions

**NOT for:**
- ❌ Native iOS applications
- ❌ Native Android applications
- ❌ Mobile-first responsive designs
- ❌ Touch-only mobile interfaces

## Structure

### 📚 [Principles](./principles/)
Core web interface principles adapted for desktop web experiences.

1. [Mouse & Cursor Interactions](./principles/mouse-cursor-interactions.md)
2. [Keyboard Navigation & Shortcuts](./principles/keyboard-navigation.md)
3. [Hover States & Affordances](./principles/hover-affordances.md)
4. [Browser Context Awareness](./principles/browser-context.md)
5. [Multi-Window Patterns](./principles/multi-window-patterns.md)
6. [Desktop Gestures](./principles/desktop-gestures.md)

### 🎯 [Project Kickoff Prompts](./prompts/)
Templates and prompts for starting new web projects.

1. [New Web Project Template](./prompts/new-project-template.md)
2. [Component Creation Prompt](./prompts/component-creation.md)
3. [Feature Implementation Guide](./prompts/feature-implementation.md)

### 📋 [Quick Reference](./quick-reference.md)
One-page cheat sheet for common web interface patterns.

### 🎨 [Web UI Patterns](./web-ui-patterns.md)
Common web interface patterns with implementation details.

## Core Philosophy

### Web-Specific Considerations

1. **Cursor Precision**: Web interfaces can leverage precise cursor positioning (unlike touch targets)
2. **Hover States**: Essential for web - reveal information and affordances on hover
3. **Keyboard Power Users**: Many web users rely heavily on keyboard navigation
4. **Browser Integration**: Respect browser behaviors (back/forward, bookmarks, extensions)
5. **Multi-Tab Context**: Users may have multiple tabs open - design for context switching
6. **Copy/Paste**: Web content is frequently copied - optimize for clipboard workflows
7. **Right-Click Context**: Web users expect context menus
8. **Scroll Behaviors**: Desktop scrolling is different from mobile - leverage momentum scrolling

### Differences from Mobile

| Aspect | Web (Desktop) | Mobile (iOS/Android) |
|--------|---------------|----------------------|
| **Input Precision** | Cursor (pixel-perfect) | Touch (larger targets) |
| **Hover States** | Essential | Not applicable |
| **Keyboard** | Full keyboard support | Limited/on-screen |
| **Multi-tasking** | Multiple windows/tabs | Single app focus |
| **Gestures** | Mouse/trackpad gestures | Touch gestures |
| **Context Menus** | Right-click expected | Long-press |
| **Copy/Paste** | Keyboard shortcuts | Touch-based |

## Usage

When starting a new web project:

1. Review [New Web Project Template](./prompts/new-project-template.md)
2. Reference [Quick Reference](./quick-reference.md) during development
3. Apply relevant [Principles](./principles/) to your interface
4. Check [Web UI Patterns](./web-ui-patterns.md) for common solutions

## Integration with Existing Guidelines

These web guidelines complement the existing [rauno-devourin-details](../rauno-devourin-details/) principles but focus specifically on web interfaces. Many principles (like inferring intent, physics simulation) apply to both, but the implementation details differ.

---

*These guidelines are designed to help create web interfaces that feel native to the desktop browser environment while maintaining the high-quality interaction design principles from Devouring Details.*

