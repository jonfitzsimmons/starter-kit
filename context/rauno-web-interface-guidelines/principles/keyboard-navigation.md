# Keyboard Navigation & Shortcuts

## Overview

Web interfaces should be fully keyboard-accessible. Many power users rely on keyboard navigation, and it's essential for accessibility. Keyboard shortcuts can dramatically improve productivity.

## Key Principles

### 1. Full Keyboard Accessibility

Every interactive element must be:
- **Focusable** (tab order)
- **Activable** (Enter/Space)
- **Navigable** (arrow keys where appropriate)
- **Visible** (focus indicators)

### 2. Keyboard Shortcuts

Provide keyboard shortcuts for:
- Common actions (Save: Cmd/Ctrl+S)
- Navigation (Search: Cmd/Ctrl+K)
- Power user features
- Accessibility (Skip to content)

### 3. Focus Management

Properly manage focus:
- Logical tab order
- Focus trapping in modals
- Focus return after closing modals
- Focus indicators that are visible

## Implementation Patterns

### Focus Indicators

```css
/* Visible focus indicators */
*:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Remove default outline, add custom */
button:focus {
  outline: none;
}
button:focus-visible {
  box-shadow: 0 0 0 2px #0066cc;
}
```

### Tab Order

```html
<!-- Logical tab order follows visual order -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
<main>
  <button>Action</button>
</main>
```

### Keyboard Shortcuts

```javascript
// Global keyboard shortcuts
useEffect(() => {
  function handleKeyDown(e) {
    // Cmd/Ctrl+K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
      closeModal();
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown') {
      navigateNext();
    }
  }
  
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);
```

### Focus Trapping

```javascript
// Trap focus within modal
function trapFocus(container) {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}
```

### Skip Links

```html
<!-- Skip to main content for screen readers -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
</style>
```

## Common Keyboard Shortcuts

### Standard Web Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Save | Cmd+S | Ctrl+S |
| Open | Cmd+O | Ctrl+O |
| New | Cmd+N | Ctrl+N |
| Close | Cmd+W | Ctrl+W |
| Search | Cmd+F | Ctrl+F |
| Find in page | Cmd+G | Ctrl+G |
| Reload | Cmd+R | Ctrl+R |
| Hard reload | Cmd+Shift+R | Ctrl+Shift+R |
| Dev tools | Cmd+Option+I | Ctrl+Shift+I |

### Application-Specific Shortcuts

Common patterns:
- **Cmd/Ctrl+K**: Command palette / search
- **Cmd/Ctrl+/**: Show keyboard shortcuts
- **Escape**: Close modals, cancel actions
- **Enter**: Confirm, submit
- **Arrow keys**: Navigate lists, move focus
- **Tab**: Next element
- **Shift+Tab**: Previous element

## Best Practices

### ✅ Do

- Provide visible focus indicators
- Support standard browser shortcuts
- Add application-specific shortcuts
- Show keyboard shortcuts in UI (Cmd/Ctrl+/)
- Maintain logical tab order
- Trap focus in modals
- Return focus after closing modals
- Support arrow key navigation in lists

### ❌ Don't

- Override browser default shortcuts unnecessarily
- Hide focus indicators
- Create confusing tab orders
- Forget to trap focus in modals
- Require mouse for essential actions
- Use only mouse hover for important information

## Web-Specific Considerations

### Browser Shortcuts

Respect browser default shortcuts:
- Don't override Cmd/Ctrl+T (new tab)
- Don't override Cmd/Ctrl+W (close tab)
- Don't override Cmd/Ctrl+R (reload)
- Be careful with Cmd/Ctrl+S (save - browser default is "Save Page")

### Command Palette Pattern

Many modern web apps use Cmd/Ctrl+K for a command palette:
- Vercel Dashboard
- Linear
- GitHub (new)
- Notion

This pattern provides:
- Quick navigation
- Action shortcuts
- Search functionality
- Keyboard-first workflow

### Keyboard Navigation in Lists

For lists and grids:
- Arrow keys: Navigate items
- Enter: Activate item
- Home/End: First/last item
- Page Up/Down: Scroll pages

## Examples

### 1. Command Palette (Cmd/Ctrl+K)

```javascript
// Command palette implementation
function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return isOpen ? <CommandPaletteUI /> : null;
}
```

### 2. Keyboard Navigation in Lists

```javascript
// Arrow key navigation
function ListItem({ items, onSelect }) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  
  function handleKeyDown(e) {
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        onSelect(items[focusedIndex]);
        break;
    }
  }
  
  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      {items.map((item, index) => (
        <div
          key={index}
          className={index === focusedIndex ? 'focused' : ''}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
```

## Related Principles

- [Hover States & Affordances](./hover-affordances.md)
- [Browser Context Awareness](./browser-context.md)
- [Mouse & Cursor Interactions](./mouse-cursor-interactions.md)

