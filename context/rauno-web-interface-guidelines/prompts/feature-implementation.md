# Feature Implementation Guide

Use this guide when implementing new features in web applications. Ensures features follow web interface guidelines.

## Feature Implementation Prompt Template

```
Implement [FEATURE_NAME] feature for a web application.

Feature Description: [What does this feature do?]

User Goals:
- [Goal 1]
- [Goal 2]
- [Goal 3]

Key Interactions:
- [Interaction 1]
- [Interaction 2]
- [Interaction 3]

Web-Specific Requirements:
- [ ] URL state management (if shareable/bookmarkable)
- [ ] Browser back/forward support
- [ ] Keyboard navigation
- [ ] Hover states
- [ ] Right-click context (if applicable)
- [ ] Copy/paste support (if applicable)
- [ ] Multi-tab sync (if applicable)

Accessibility:
- [ ] Keyboard accessible
- [ ] Screen reader support
- [ ] Focus management
- [ ] ARIA labels

Performance:
- [ ] Virtual scrolling (if large lists)
- [ ] Debounced operations (if API calls)
- [ ] Optimistic updates (if applicable)

Follow web interface guidelines:
- Desktop-first design
- Proper hover and focus states
- Full keyboard support
- Browser integration
- Cursor feedback
```

## Feature Categories

### Navigation Features

**Examples:** Breadcrumbs, Sidebar navigation, Tab navigation

**Requirements:**
- URL state for current location
- Browser back/forward support
- Keyboard navigation (Arrow keys, Tab)
- Hover states for links
- Active state indication
- Shareable/bookmarkable URLs

**Implementation Checklist:**
- [ ] URL updates on navigation
- [ ] Browser history integration
- [ ] Keyboard shortcuts (if applicable)
- [ ] Hover states for links
- [ ] Focus indicators
- [ ] Current page indication

### Data Management Features

**Examples:** CRUD operations, Filtering, Sorting, Search

**Requirements:**
- URL state for filters/search (shareable)
- Keyboard shortcuts (Cmd/Ctrl+F for search)
- Real-time updates
- Optimistic updates
- Loading states
- Error handling

**Implementation Checklist:**
- [ ] URL state for filters/search
- [ ] Keyboard shortcuts
- [ ] Debounced search (if API calls)
- [ ] Loading indicators
- [ ] Error messages
- [ ] Success feedback
- [ ] Undo/redo (if applicable)

### Content Display Features

**Examples:** Lists, Grids, Tables, Cards

**Requirements:**
- Virtual scrolling (if large datasets)
- Keyboard navigation
- Hover states
- Loading states
- Empty states
- Infinite scroll (if applicable)

**Implementation Checklist:**
- [ ] Virtual scrolling (if 1000+ items)
- [ ] Keyboard navigation (Arrow keys)
- [ ] Hover states
- [ ] Loading states
- [ ] Empty states
- [ ] Lazy loading (if applicable)

### Form Features

**Examples:** Multi-step forms, Inline editing, Autocomplete

**Requirements:**
- Keyboard navigation
- Browser autofill support
- Validation feedback
- Focus management
- Error handling

**Implementation Checklist:**
- [ ] Keyboard navigation
- [ ] Browser autofill support
- [ ] Real-time validation
- [ ] Error messages
- [ ] Focus management
- [ ] Success states

### Modal/Dialog Features

**Examples:** Confirmation dialogs, Forms in modals, Image viewers

**Requirements:**
- Focus trapping
- Escape to close
- Click outside to close (if applicable)
- Focus return
- Keyboard navigation

**Implementation Checklist:**
- [ ] Focus trapping
- [ ] Escape handling
- [ ] Click outside handling
- [ ] Focus return on close
- [ ] Keyboard navigation
- [ ] ARIA attributes

## Common Feature Patterns

### Search Feature

```
Implement a search feature with:

Requirements:
- Cmd/Ctrl+K to open search
- Real-time search results
- Keyboard navigation (Arrow keys, Enter)
- URL state for search query (shareable)
- Recent searches (localStorage)
- Loading states

Web-Specific:
- Command palette pattern (Cmd/Ctrl+K)
- URL state for shareable searches
- Keyboard-first interaction
- Hover states for results
- Focus management

Accessibility:
- ARIA live region for results
- Keyboard navigation
- Screen reader support
```

### Filter Feature

```
Implement a filter feature with:

Requirements:
- Multiple filter types (dropdown, checkbox, range)
- URL state for filters (shareable)
- Clear all filters
- Filter count indicator
- Keyboard navigation

Web-Specific:
- URL state for shareable filtered views
- Browser back/forward support
- Hover states for filter controls
- Keyboard shortcuts (if applicable)

Accessibility:
- Keyboard accessible filters
- Clear filter labels
- Screen reader support
```

### Drag and Drop Feature

```
Implement a drag and drop feature with:

Requirements:
- Visual feedback during drag
- Drop zones
- Keyboard alternatives
- Touch support (for touch-enabled laptops)

Web-Specific:
- Cursor changes (grab/grabbing)
- Hover states for drop zones
- Right-click context (if applicable)
- Keyboard alternatives (Arrow keys + Enter)

Accessibility:
- Keyboard alternatives
- ARIA drag and drop attributes
- Screen reader announcements
```

## Implementation Checklist

### Planning
- [ ] Define user goals
- [ ] Identify key interactions
- [ ] Determine URL state needs
- [ ] Plan keyboard navigation
- [ ] Consider accessibility

### Development
- [ ] Implement core functionality
- [ ] Add hover states
- [ ] Add keyboard navigation
- [ ] Add focus management
- [ ] Integrate URL state (if needed)
- [ ] Add loading/error states

### Browser Integration
- [ ] Test browser back/forward
- [ ] Test browser zoom
- [ ] Test browser search (Cmd/Ctrl+F)
- [ ] Test with browser extensions
- [ ] Verify shareable URLs

### Accessibility
- [ ] Keyboard navigation complete
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] ARIA attributes added
- [ ] Color contrast verified

### Performance
- [ ] Virtual scrolling (if needed)
- [ ] Debounced operations (if needed)
- [ ] Optimized rendering
- [ ] Lazy loading (if needed)

### Testing
- [ ] Mouse interactions
- [ ] Keyboard interactions
- [ ] Touch interactions (if applicable)
- [ ] Browser compatibility
- [ ] Accessibility testing
- [ ] Performance testing

## Example: Implementing a Dashboard Feature

```
Implement a Dashboard feature for a web analytics application.

Feature Description: 
A customizable dashboard displaying multiple widgets (charts, tables, metrics) that users can arrange, resize, and configure.

User Goals:
- View multiple data visualizations at once
- Customize dashboard layout
- Save and share dashboard configurations
- Quickly navigate between different views

Key Interactions:
- Drag widgets to rearrange
- Resize widgets by dragging edges
- Click widgets to view details
- Right-click widgets for actions (edit, remove, duplicate)
- Add new widgets from sidebar
- Save dashboard configuration

Web-Specific Requirements:
- [x] URL state for dashboard ID (shareable dashboard links)
- [x] Browser back/forward support (navigate between dashboards)
- [x] Keyboard navigation (Tab through widgets, Arrow keys for navigation)
- [x] Hover states (show resize handles, highlight drop zones)
- [x] Right-click context menu for widget actions
- [x] Copy/paste support (duplicate widgets)
- [x] Multi-tab sync (updates across tabs if dashboard is shared)

Accessibility:
- [x] Keyboard accessible (Tab, Arrow keys, Enter)
- [x] Screen reader support (widget descriptions, layout info)
- [x] Focus management (focus on dragged widget, focus return)
- [x] ARIA labels for drag handles, drop zones

Performance:
- [x] Virtual scrolling for widget list (if many widgets)
- [x] Debounced save operations (auto-save)
- [x] Optimistic updates (immediate UI feedback)

Follow web interface guidelines:
- Desktop-first design (not mobile)
- Proper hover states (resize handles, drop zones)
- Full keyboard support (Tab, Arrow keys, Enter, Escape)
- Browser-friendly (URL state, back/forward, shareable links)
- Cursor feedback (grab/grabbing for drag, resize cursors)
- Focus management (visible focus, logical tab order)
```

## Related Resources

- [New Project Template](./new-project-template.md)
- [Component Creation Prompt](./component-creation.md)
- [Quick Reference](../quick-reference.md)
- [Web UI Patterns](../web-ui-patterns.md)

