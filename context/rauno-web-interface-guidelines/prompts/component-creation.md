# Component Creation Prompt

Use this when creating new web interface components. Ensures components follow web interface guidelines.

## Standard Component Prompt

```
Create a [COMPONENT_NAME] component for a web application.

Component Purpose: [What does this component do?]

Props/API:
- [prop1]: [description]
- [prop2]: [description]

Interaction Requirements:
- [ ] Mouse interactions (hover, click, drag)
- [ ] Keyboard navigation (Tab, Enter, Arrow keys)
- [ ] Touch support (if applicable)
- [ ] Focus management
- [ ] Loading states
- [ ] Error states

Web-Specific Requirements:
- [ ] Hover states for interactive elements
- [ ] Cursor changes (pointer, grab, etc.)
- [ ] Keyboard shortcuts (if applicable)
- [ ] Right-click context menu (if applicable)
- [ ] URL state integration (if applicable)
- [ ] Browser integration (back/forward if navigation)

Accessibility:
- [ ] Semantic HTML
- [ ] ARIA labels/roles
- [ ] Keyboard accessible
- [ ] Focus indicators
- [ ] Screen reader support

Follow web interface guidelines:
- Desktop-first design (not mobile)
- Proper hover states
- Full keyboard support
- Browser-friendly
- Cursor feedback
- Focus management
```

## Component-Specific Templates

### Interactive Component (Button, Link, etc.)

```
Create a [COMPONENT_NAME] component with:

Interaction:
- Hover state: [description of hover effect]
- Active/pressed state: [description]
- Focus state: [visible focus indicator]
- Disabled state: [visual and functional]

Keyboard:
- Tab to focus
- Enter/Space to activate
- Escape to cancel (if applicable)

Cursor:
- Changes to pointer on hover
- Changes to not-allowed when disabled

Accessibility:
- Proper button/link semantics
- ARIA labels if needed
- Keyboard accessible
- Focus visible
```

### Form Component (Input, Select, etc.)

```
Create a [COMPONENT_NAME] form component with:

Interaction:
- Focus state: [visible focus ring]
- Hover state: [subtle highlight]
- Error state: [clear error indication]
- Success state: [if applicable]

Keyboard:
- Tab to focus
- Arrow keys for navigation (if applicable)
- Enter to submit (if applicable)
- Escape to clear/cancel (if applicable)

Browser Integration:
- Works with browser autofill
- Supports browser password managers
- Respects browser validation

Accessibility:
- Proper label association
- Error messages linked to inputs
- Keyboard accessible
- Screen reader support
```

### Data Display Component (Table, List, etc.)

```
Create a [COMPONENT_NAME] data display component with:

Interaction:
- Hover to highlight rows/items
- Click to select/activate
- Right-click for context menu (if applicable)
- Keyboard navigation (Arrow keys)

Keyboard:
- Arrow keys to navigate
- Enter to activate
- Space to select (if applicable)
- Home/End for first/last item
- Page Up/Down for scrolling

Performance:
- Virtual scrolling (if 1000+ items)
- Lazy loading (if applicable)
- Optimized rendering

Accessibility:
- Table semantics (if table)
- ARIA labels
- Keyboard navigation
- Screen reader support
```

### Modal/Dialog Component

```
Create a [COMPONENT_NAME] modal/dialog component with:

Interaction:
- Click outside to close (if applicable)
- Escape to close
- Focus trapping

Keyboard:
- Tab cycles through focusable elements
- Shift+Tab reverses
- Escape closes
- Enter submits (if form)

Focus Management:
- Focus moves to first element on open
- Focus returns to trigger on close
- Focus trapped within modal

Accessibility:
- ARIA modal role
- ARIA labelledby/describedby
- Focus management
- Screen reader announcements
```

### Navigation Component (Menu, Sidebar, etc.)

```
Create a [COMPONENT_NAME] navigation component with:

Interaction:
- Hover to reveal submenus (if applicable)
- Click to navigate
- Keyboard navigation

Keyboard:
- Arrow keys to navigate items
- Enter to activate
- Escape to close (if dropdown)
- Tab to move through items

URL Integration:
- Updates URL on navigation
- Supports browser back/forward
- Shareable/bookmarkable URLs

Accessibility:
- Navigation landmark
- Keyboard navigation
- Current page indication
- Screen reader support
```

## Checklist for Any Component

### Interaction
- [ ] Hover states implemented
- [ ] Focus states visible
- [ ] Active/pressed states
- [ ] Disabled states (if applicable)
- [ ] Loading states (if applicable)
- [ ] Error states (if applicable)

### Keyboard
- [ ] Tab navigation works
- [ ] Enter/Space activation
- [ ] Arrow key navigation (if applicable)
- [ ] Escape handling (if applicable)
- [ ] All actions keyboard accessible

### Cursor
- [ ] Pointer cursor on clickable elements
- [ ] Grab cursor on draggable elements
- [ ] Text cursor on text inputs
- [ ] Not-allowed cursor on disabled elements
- [ ] Appropriate cursor for each interaction

### Browser Integration
- [ ] Works with browser back/forward (if navigation)
- [ ] URL state if shareable
- [ ] Respects browser zoom
- [ ] Doesn't block browser features
- [ ] Works with browser extensions

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA attributes if needed
- [ ] Keyboard accessible
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Color contrast verified

### Performance
- [ ] No unnecessary re-renders
- [ ] Efficient event handlers
- [ ] Virtual scrolling if large lists
- [ ] Lazy loading if applicable

## Example: Creating a Data Table Component

```
Create a DataTable component for a web application.

Component Purpose: Display sortable, filterable data in a table format.

Props/API:
- data: Array of objects to display
- columns: Column configuration (key, label, sortable, filterable)
- onRowClick: Callback when row is clicked
- onSort: Callback when column is sorted
- onFilter: Callback when filter is applied

Interaction Requirements:
- [x] Mouse interactions (hover, click, drag for column resize)
- [x] Keyboard navigation (Tab, Arrow keys, Enter)
- [x] Touch support (for touch-enabled laptops)
- [x] Focus management
- [x] Loading states
- [x] Empty states

Web-Specific Requirements:
- [x] Hover states to highlight rows
- [x] Cursor changes (pointer on rows, col-resize on column borders)
- [x] Keyboard shortcuts (Cmd/Ctrl+F for search, Arrow keys for navigation)
- [x] Right-click context menu for row actions
- [x] URL state integration for filters/sort (shareable table views)
- [x] Browser integration (back/forward preserves table state)

Accessibility:
- [x] Semantic table HTML
- [x] ARIA labels for sortable columns
- [x] Keyboard accessible (Arrow keys, Tab, Enter)
- [x] Focus indicators on interactive elements
- [x] Screen reader support (table headers, row descriptions)

Follow web interface guidelines:
- Desktop-first design (not mobile)
- Proper hover states (row highlighting)
- Full keyboard support (Arrow keys for navigation, Enter to activate)
- Browser-friendly (URL state, back/forward)
- Cursor feedback (pointer on rows, resize cursor on column borders)
- Focus management (visible focus, logical tab order)
```

## Related Resources

- [New Project Template](./new-project-template.md)
- [Feature Implementation Guide](./feature-implementation.md)
- [Quick Reference](../quick-reference.md)
- [Web UI Patterns](../web-ui-patterns.md)

