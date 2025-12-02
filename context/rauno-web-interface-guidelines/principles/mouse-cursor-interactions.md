# Mouse & Cursor Interactions

## Overview

Web interfaces have the unique advantage of cursor precision. Unlike touch interfaces, the cursor can hover, provide pixel-perfect targeting, and reveal information before interaction.

## Key Principles

### 1. Cursor as a Tool

The cursor is not just a pointer—it's a tool that communicates:
- **What can be interacted with** (pointer cursor on clickable elements)
- **What can be dragged** (grab/grabbing cursors)
- **What can be resized** (resize cursors)
- **What can be edited** (text cursor)
- **What is loading** (wait cursor)

### 2. Hover as Preview

Hover states should reveal information without requiring a click:
- Show tooltips with additional context
- Preview content (images, cards, links)
- Highlight related elements
- Reveal hidden controls

### 3. Cursor Feedback

Always provide immediate visual feedback:
- Change cursor on hoverable elements
- Show loading state during async operations
- Provide drag feedback (cursor change, visual state)

## Implementation Patterns

### Cursor States

```css
/* Clickable elements */
.clickable {
  cursor: pointer;
}

/* Draggable elements */
.draggable {
  cursor: grab;
}
.draggable:active {
  cursor: grabbing;
}

/* Resizable elements */
.resizable {
  cursor: nwse-resize; /* or appropriate direction */
}

/* Text selection */
.selectable {
  cursor: text;
}

/* Loading state */
.loading {
  cursor: wait;
}

/* Not allowed */
.disabled {
  cursor: not-allowed;
}
```

### Hover Reveals

```css
/* Reveal on hover */
.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Show hidden controls */
.toolbar {
  opacity: 0;
  transition: opacity 0.2s;
}
.container:hover .toolbar {
  opacity: 1;
}
```

### Drag Feedback

```javascript
// Visual feedback during drag
function onDragStart(e) {
  e.currentTarget.style.cursor = 'grabbing';
  e.currentTarget.style.opacity = '0.8';
  // Create drag ghost image
  const dragImage = e.currentTarget.cloneNode(true);
  dragImage.style.position = 'absolute';
  dragImage.style.pointerEvents = 'none';
  e.dataTransfer.setDragImage(dragImage, 0, 0);
}

function onDragEnd(e) {
  e.currentTarget.style.cursor = 'grab';
  e.currentTarget.style.opacity = '1';
}
```

## Best Practices

### ✅ Do

- Change cursor to indicate interactivity
- Use hover to preview content
- Provide immediate visual feedback
- Use appropriate cursor types for different actions
- Show loading cursor during async operations

### ❌ Don't

- Use `cursor: pointer` on non-clickable elements
- Hide important information behind hover-only reveals
- Ignore cursor feedback during drag operations
- Use custom cursors unnecessarily (browser defaults are familiar)

## Web-Specific Considerations

### Right-Click Context

Web users expect right-click context menus. Consider:
- Browser default context menu (view source, inspect)
- Custom context menus for app-specific actions
- Balance between custom and native behaviors

### Cursor Precision

Leverage pixel-perfect cursor positioning:
- Smaller click targets are acceptable (minimum 44px for accessibility)
- Precise hover states (not just large touch targets)
- Fine-grained interactions (resize handles, drag points)

### Mouse vs Trackpad

Consider both input methods:
- Trackpad gestures (two-finger scroll, pinch zoom)
- Mouse wheel scrolling
- Trackpad momentum scrolling
- Different scroll behaviors

## Examples

### 1. Hover to Reveal Controls

Many web apps hide secondary actions until hover:
- GitHub: Edit button appears on hover
- Gmail: Archive/delete buttons on hover
- Figma: Layer controls on hover

### 2. Cursor Changes for Drag

- File managers: Cursor changes to indicate drag state
- Design tools: Grab cursor for moving elements
- Code editors: Text cursor for selection

### 3. Hover Previews

- Link previews on hover
- Image enlargements on hover
- Card details on hover

## Related Principles

- [Hover States & Affordances](./hover-affordances.md)
- [Desktop Gestures](./desktop-gestures.md)
- [Keyboard Navigation & Shortcuts](./keyboard-navigation.md)

