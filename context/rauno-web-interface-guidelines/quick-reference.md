# Quick Reference - Web Interface Guidelines

One-page cheat sheet for common web interface patterns and principles.

## Core Principles

### Web-Specific Considerations
- ✅ **Cursor precision** - Leverage pixel-perfect targeting
- ✅ **Hover states** - Essential for web interfaces
- ✅ **Keyboard navigation** - Full keyboard accessibility
- ✅ **Browser integration** - Work with browser, not against it
- ✅ **Multi-tab context** - Design for multiple windows/tabs
- ✅ **Right-click context** - Support context menus
- ✅ **Copy/paste workflows** - Optimize clipboard operations

### NOT Mobile
- ❌ Touch-only interfaces
- ❌ Mobile-first responsive
- ❌ Native iOS/Android patterns
- ❌ Large touch targets only

## Cursor & Mouse

### Cursor States
```css
.clickable { cursor: pointer; }
.draggable { cursor: grab; }
.draggable:active { cursor: grabbing; }
.resizable { cursor: nwse-resize; }
.selectable { cursor: text; }
.loading { cursor: wait; }
.disabled { cursor: not-allowed; }
```

### Hover Patterns
```css
/* Reveal on hover */
.element:hover .hidden { opacity: 1; }

/* Lift on hover */
.card:hover { transform: translateY(-2px); }

/* Show controls */
.container:hover .toolbar { opacity: 1; }
```

## Keyboard

### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

### Common Shortcuts
- `Cmd/Ctrl+K` - Command palette
- `Cmd/Ctrl+/` - Show shortcuts
- `Escape` - Close modals
- `Enter` - Confirm/Submit
- `Tab` - Next element
- `Shift+Tab` - Previous element

### Focus Trapping
```javascript
// Trap focus in modal
const focusable = container.querySelectorAll(
  'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
```

## Browser Integration

### URL State
```javascript
// Use URL for shareable state
const params = new URLSearchParams(window.location.search);
const filter = params.get('filter');
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
```

### Browser Zoom
```css
/* Use relative units */
.container { font-size: 1rem; padding: 1em; }
```

## Multi-Tab Sync

### BroadcastChannel
```javascript
const channel = new BroadcastChannel('app-sync');
channel.postMessage({ type: 'update', data });
channel.onmessage = (e) => { /* handle */ };
```

### Focus Detection
```javascript
window.addEventListener('focus', () => refreshData());
```

## Gestures

### Touch Detection
```javascript
const isTouch = 'ontouchstart' in window;
```

### Pinch Zoom
```javascript
// Handle two-finger pinch
if (e.touches.length === 2) {
  // Calculate distance, update scale
}
```

### Momentum Scrolling
```css
.scrollable {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
```

## Common Patterns

### Command Palette
```javascript
// Cmd/Ctrl+K
if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
  openCommandPalette();
}
```

### Inline Editing
```javascript
// Double-click to edit, Enter to save, Escape to cancel
onDoubleClick={() => setIsEditing(true)}
onKeyDown={(e) => {
  if (e.key === 'Enter') save();
  if (e.key === 'Escape') cancel();
}}
```

### Drag and Drop
```javascript
// Visual feedback
onDragStart={(e) => {
  e.currentTarget.style.opacity = '0.8';
  e.currentTarget.style.cursor = 'grabbing';
}}
```

### Resizable Panel
```javascript
// Mouse down on handle, track mouse move, update width
onMouseDown={() => setIsDragging(true)}
onMouseMove={(e) => setWidth(e.clientX)}
```

## Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] Focus trapping in modals
- [ ] Focus return after closing modals
- [ ] ARIA labels where needed
- [ ] Skip links for main content
- [ ] Alt text for images
- [ ] Color contrast (WCAG AA)
- [ ] Screen reader support

## Performance

### Virtual Scrolling
- Use for lists with 1000+ items
- Libraries: react-window, react-virtualized

### Debouncing
```javascript
const debounced = debounce((value) => {
  // API call
}, 300);
```

### Lazy Loading
```javascript
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadMore();
});
```

## Anti-Patterns

### ❌ Don't
- Override browser shortcuts unnecessarily
- Disable browser zoom
- Hide critical info behind hover-only
- Ignore keyboard navigation
- Block browser search (Cmd/Ctrl+F)
- Require mouse for essential actions
- Use fixed pixels (use relative units)
- Ignore reduced motion preference

### ✅ Do
- Support all input methods (mouse, keyboard, touch)
- Provide hover AND focus states
- Use URL for shareable state
- Respect browser behaviors
- Test with keyboard only
- Support browser zoom
- Use relative units
- Check reduced motion

## Quick Links

- [Principles](./principles/)
- [Web UI Patterns](./web-ui-patterns.md)
- [Project Prompts](./prompts/)

