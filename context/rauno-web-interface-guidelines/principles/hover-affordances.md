# Hover States & Affordances

## Overview

Hover states are a defining characteristic of web interfaces. They provide affordances, reveal information, and create a sense of interactivity that's unique to cursor-based interfaces.

## Key Principles

### 1. Hover Reveals Affordances

Hover should make it clear what can be interacted with:
- Show that elements are clickable
- Reveal hidden controls
- Indicate draggable elements
- Highlight interactive regions

### 2. Progressive Disclosure

Use hover to reveal information progressively:
- Show tooltips with additional context
- Preview content without navigation
- Reveal secondary actions
- Display metadata

### 3. Visual Feedback

Hover should provide immediate, clear feedback:
- Color changes
- Scale/transform effects
- Shadow/elevation changes
- Border highlights

## Implementation Patterns

### Basic Hover States

```css
/* Button hover */
.button {
  background: #0066cc;
  transition: background 0.2s ease;
}
.button:hover {
  background: #0052a3;
}
.button:active {
  background: #003d7a;
}

/* Link hover */
.link {
  color: #0066cc;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.link:hover {
  border-bottom-color: #0066cc;
}
```

### Hover to Reveal

```css
/* Reveal controls on hover */
.card {
  position: relative;
}
.card-actions {
  opacity: 0;
  transition: opacity 0.2s;
}
.card:hover .card-actions {
  opacity: 1;
}

/* Show tooltip on hover */
.tooltip-trigger {
  position: relative;
}
.tooltip {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
.tooltip-trigger:hover .tooltip {
  opacity: 1;
}
```

### Hover Elevation

```css
/* Lift on hover */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Hover Previews

```javascript
// Image preview on hover
function ImagePreview({ src, preview }) {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  
  return (
    <div
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt="Preview" />
      {showPreview && (
        <div
          className="preview"
          style={{
            left: position.x + 20,
            top: position.y + 20,
          }}
        >
          <img src={preview} alt="Full preview" />
        </div>
      )}
    </div>
  );
}
```

## Best Practices

### ✅ Do

- Provide hover states for all interactive elements
- Use hover to reveal hidden controls
- Show tooltips with helpful information
- Use subtle animations (not jarring)
- Consider hover delay for tooltips (300-500ms)
- Provide keyboard alternatives (focus states)

### ❌ Don't

- Hide critical information behind hover-only reveals
- Use hover for essential functionality
- Make hover states too aggressive (large movements)
- Forget touch users (hover may not work)
- Use hover as the only indicator of interactivity

## Web-Specific Considerations

### Hover vs Focus

Both hover and focus should work:
- **Hover**: Mouse users
- **Focus**: Keyboard users
- Often use `:hover, :focus` together

```css
.button:hover,
.button:focus {
  background: #0052a3;
}
```

### Touch Devices

On touch devices, hover may:
- Not work at all (mobile)
- Trigger on tap (some tablets)
- Be sticky (first tap = hover, second = click)

Consider:
- Don't rely solely on hover
- Provide tap alternatives
- Use `@media (hover: hover)` to detect hover capability

```css
/* Only show hover effects if device supports hover */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-2px);
  }
}
```

### Hover Delays

For tooltips and reveals:
- **Short delay (100-200ms)**: Quick actions, buttons
- **Medium delay (300-500ms)**: Tooltips, help text
- **Long delay (500ms+)**: Destructive actions, previews

```javascript
// Tooltip with delay
function Tooltip({ children, content }) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef();
  
  function handleMouseEnter() {
    timeoutRef.current = setTimeout(() => {
      setShow(true);
    }, 300);
  }
  
  function handleMouseLeave() {
    clearTimeout(timeoutRef.current);
    setShow(false);
  }
  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && <div className="tooltip">{content}</div>}
    </div>
  );
}
```

## Examples

### 1. GitHub: Hover to Reveal Actions

GitHub hides edit/delete buttons until hover:
- Reduces visual clutter
- Reveals actions when needed
- Clear affordance on hover

### 2. Gmail: Hover to Show Controls

Gmail shows archive/delete on hover:
- Keeps interface clean
- Actions appear contextually
- Familiar pattern

### 3. Figma: Hover to Show Layer Controls

Figma reveals layer controls on hover:
- Reduces UI complexity
- Shows controls when relevant
- Maintains focus on canvas

### 4. Link Previews

Many sites show link previews on hover:
- Medium: Article previews
- Twitter: User card previews
- GitHub: Issue/PR previews

## Related Principles

- [Mouse & Cursor Interactions](./mouse-cursor-interactions.md)
- [Keyboard Navigation & Shortcuts](./keyboard-navigation.md)
- [Browser Context Awareness](./browser-context.md)

