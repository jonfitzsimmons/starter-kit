# Browser Context Awareness

## Overview

Web interfaces exist within browsers, which have their own behaviors, expectations, and capabilities. Great web interfaces work with the browser, not against it.

## Key Principles

### 1. Respect Browser Behaviors

Don't fight the browser:
- Back/forward navigation
- Bookmarking
- URL sharing
- Browser extensions
- Developer tools

### 2. Enhance, Don't Replace

Enhance browser features:
- Use browser history API for navigation
- Support browser search (Cmd/Ctrl+F)
- Work with browser zoom
- Respect browser preferences (reduced motion)

### 3. Browser Integration

Leverage browser capabilities:
- URL state management
- Browser storage (localStorage, sessionStorage)
- Service workers for offline
- Browser notifications

## Implementation Patterns

### URL State Management

```javascript
// Use URL for state (shareable, bookmarkable)
function useURLState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || defaultValue;
  });
  
  function updateValue(newValue) {
    setValue(newValue);
    const params = new URLSearchParams(window.location.search);
    if (newValue === defaultValue) {
      params.delete(key);
    } else {
      params.set(key, newValue);
    }
    window.history.replaceState({}, '', `?${params.toString()}`);
  }
  
  return [value, updateValue];
}
```

### Browser History

```javascript
// Handle browser back/forward
useEffect(() => {
  function handlePopState(e) {
    // Restore state from URL
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    setFilter(filter || 'all');
  }
  
  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
}, []);

// Update URL on state change
function handleFilterChange(newFilter) {
  setFilter(newFilter);
  const url = new URL(window.location);
  url.searchParams.set('filter', newFilter);
  window.history.pushState({}, '', url);
}
```

### Browser Search (Cmd/Ctrl+F)

```javascript
// Don't override browser search
// Instead, make content searchable
function SearchableContent({ content }) {
  // Browser's native Cmd/Ctrl+F will work
  // Ensure content is in DOM (not canvas, not images)
  return (
    <div>
      {content.map(item => (
        <div key={item.id}>
          {/* Text content, not images */}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Reduced Motion Preference

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Or selectively reduce */
.card {
  transition: transform 0.3s ease;
}
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
```

```javascript
// Check reduced motion preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Adjust animations accordingly
const animationConfig = prefersReducedMotion
  ? { duration: 0 }
  : { type: 'spring', stiffness: 200 };
```

### Browser Zoom

```css
/* Support browser zoom (don't disable) */
/* Use relative units */
.container {
  font-size: 1rem; /* Not 16px */
  padding: 1em; /* Not 16px */
  width: 100%; /* Not 1200px */
}

/* Don't set max-width that breaks zoom */
/* Bad */
.container {
  max-width: 1200px;
  overflow: hidden; /* Prevents zoom */
}

/* Good */
.container {
  max-width: 75rem; /* 1200px at default zoom */
  /* Allows zoom to work */
}
```

## Best Practices

### ✅ Do

- Use URL for shareable state
- Support browser back/forward
- Respect reduced motion preferences
- Support browser zoom
- Make content searchable (text in DOM)
- Use browser storage appropriately
- Work with browser extensions
- Support browser bookmarks

### ❌ Don't

- Override browser shortcuts unnecessarily
- Disable browser zoom
- Break browser search (Cmd/Ctrl+F)
- Ignore browser history
- Fight browser behaviors
- Require browser extensions
- Block developer tools

## Web-Specific Considerations

### URL as State

URLs are powerful for web apps:
- **Shareable**: Users can share specific states
- **Bookmarkable**: Users can bookmark views
- **Refreshable**: State persists on refresh
- **SEO-friendly**: Search engines can index

Use URLs for:
- Filters and search queries
- Selected items
- Active tabs/views
- Scroll positions (sometimes)
- Modal states (sometimes)

### Browser Extensions

Users may have extensions that:
- Modify CSS
- Inject JavaScript
- Block content
- Change behavior

Design defensively:
- Don't rely on specific class names
- Test with common extensions
- Handle missing content gracefully
- Don't break if JavaScript is modified

### Developer Tools

Users (especially developers) use dev tools:
- Inspect elements
- Modify CSS
- Debug JavaScript
- Test accessibility

Don't:
- Block dev tools
- Obfuscate code unnecessarily
- Break with dev tools open
- Prevent element inspection

### Multi-Tab Context

Users may have multiple tabs:
- Same app in different states
- Different views of same data
- Shared state considerations

Consider:
- Real-time updates across tabs
- Storage synchronization
- Tab-specific state
- BroadcastChannel API for communication

```javascript
// Communicate between tabs
const channel = new BroadcastChannel('app-updates');

// Send update
channel.postMessage({ type: 'data-updated', data: newData });

// Listen for updates
channel.onmessage = (e) => {
  if (e.data.type === 'data-updated') {
    refreshData();
  }
};
```

## Examples

### 1. GitHub: URL State

GitHub uses URLs for:
- Repository views
- File paths
- Issue/PR numbers
- Search queries

All shareable and bookmarkable.

### 2. Gmail: Browser History

Gmail integrates with browser history:
- Back button works
- URLs update with view
- Shareable email links

### 3. Linear: URL for Everything

Linear uses URLs extensively:
- Every view has a URL
- Filters in URL
- Shareable links
- Bookmarkable states

## Related Principles

- [Multi-Window Patterns](./multi-window-patterns.md)
- [Keyboard Navigation & Shortcuts](./keyboard-navigation.md)
- [Mouse & Cursor Interactions](./mouse-cursor-interactions.md)

