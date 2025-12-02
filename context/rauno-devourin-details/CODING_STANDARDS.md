# Coding Standards & Style Guide

This document captures the coding philosophy, patterns, and standards from Devouring Details. Use this to guide code generation and ensure consistency with the course principles.

## Core Philosophy

### 1. Interaction-First Thinking
- **Think in interactions, not just components**
- Every interaction should feel intentional and responsive
- Consider the user's intent before implementing

### 2. Physics-Informed Design
- Use spring animations for rotation, translation, scaling
- Consider velocity and momentum in interactions
- Model digital experiences after physical world properties

### 3. Ergonomic Excellence
- Make affordances obvious
- Handle focus properly
- Design for the input device (touch, mouse, keyboard)

### 4. Restrained Responsiveness
- Match response to input context
- Reduce responsiveness for productivity tools
- Don't animate faster than the brain can process

## Code Patterns

### Animation Standards

#### Spring Configuration
```javascript
// Default spring for most interactions
const defaultSpring = {
  type: "spring",
  stiffness: 100-300,
  damping: 10-30,
  mass: 1  // Use sparingly, usually omit
};

// Bouncy spring (only for swipe gestures with momentum)
const bouncySpring = {
  type: "spring",
  stiffness: 200,
  damping: 15,  // Lower = more bounce
};

// Reserved spring (for hover/press, no bounce)
const reservedSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,  // Higher = less bounce
};
```

#### Staggering Pattern
```javascript
// Always stagger sequential content
items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: index * 0.1,  // 100ms between items
      ...defaultSpring 
    }}
  >
    {item}
  </motion.div>
))
```

### Gesture Implementation Standards

#### Contained Gestures
```javascript
// Always disable pointer events during gestures
function onPointerDown(e) {
  document.body.style.pointerEvents = 'none';
  e.currentTarget.style.pointerEvents = 'auto';
  e.currentTarget.style.cursor = 'grabbing';
  e.currentTarget.setPointerCapture(e.pointerId);
}

function onPointerUp(e) {
  document.body.style.pointerEvents = 'auto';
  e.currentTarget.style.cursor = 'grab';
  e.currentTarget.releasePointerCapture(e.pointerId);
}
```

#### Drag Threshold
```javascript
// Always implement drag threshold (5px default)
const DRAG_THRESHOLD = 5;
let isDragging = false;
let startX, startY;

function onPointerMove(e) {
  if (!isDragging) {
    const distance = Math.sqrt(
      Math.pow(e.clientX - startX, 2) + 
      Math.pow(e.clientY - startY, 2)
    );
    if (distance > DRAG_THRESHOLD) {
      isDragging = true;
    }
  }
}
```

#### Touch Action
```javascript
// Always set touch-action for custom gestures
const draggableStyle = {
  touchAction: 'none',  // For drag
  // touchAction: 'pan-y',  // For vertical scroll only
};
```

### Focus Management Standards

#### Input with Icons
```javascript
// Always wrap input + icon in label
<label className="input-wrapper">
  <Icon />
  <input 
    onFocus={(e) => e.target.style.outline = 'none'}
  />
</label>

// Use focus-within for container focus ring
.input-wrapper:focus-within {
  outline: 2px solid blue;
  outline-offset: 2px;
  border-radius: 4px;
}
```

#### Focus Transfer
```javascript
// When opening dialogs/panels, transfer focus
function openDialog() {
  dialogRef.current?.showModal();
  // Transfer focus to first interactive element
  firstInputRef.current?.focus();
}

// When closing, return focus
function closeDialog() {
  dialogRef.current?.close();
  triggerButtonRef.current?.focus();
}
```

### Responsiveness Standards

#### Reduced Responsiveness for Tools
```javascript
// For menus/popovers users will immediately interact with
// NO fade in, instant appearance
const menuStyle = {
  opacity: isOpen ? 1 : 0,
  // No transition on open
  transition: isOpen ? 'none' : 'opacity 0.2s',
};
```

#### Loading States
```javascript
// Always show loading indicators
{isLoading && <LoadingSpinner />}
// Never leave user wondering if system is responsive
```

### Proximity Effects

#### Distance-Based Calculations
```javascript
// Use mathematical distance, not hover states
function calculateProximityScale(position, targetPosition, maxDistance) {
  const distance = Math.sqrt(
    Math.pow(position.x - targetPosition.x, 2) + 
    Math.pow(position.y - targetPosition.y, 2)
  );
  const normalizedDistance = Math.min(distance / maxDistance, 1);
  const scale = 1 - (normalizedDistance * 0.5); // Adjust multiplier
  return Math.max(scale, 0.8); // Min scale
}
```

## Design Decision Framework

### When to Use Bounce
- ✅ **YES**: Swipe gestures (has momentum)
- ✅ **YES**: Thrown elements (Dynamic Island pattern)
- ❌ **NO**: Hover interactions (no momentum)
- ❌ **NO**: Press interactions (mechanical, not fluid)

### When to Reduce Responsiveness
- ✅ **YES**: Menus/popovers (users will immediately interact)
- ✅ **YES**: Developer tools (speed is priority)
- ✅ **YES**: High-frequency actions (filtering, searching)
- ❌ **NO**: Loading states (need feedback)
- ❌ **NO**: Confirmations (need visual confirmation)

### When to Use Staggering
- ✅ **YES**: Lists of items
- ✅ **YES**: Grid layouts
- ✅ **YES**: Sequential content
- ❌ **NO**: Single elements
- ❌ **NO**: Critical information (don't delay)

### Context Considerations
- **Productivity Tools**: Lean usability, reduce animations
- **Marketing/Entertainment**: Can lean aesthetics, more animations
- **Developer Tools**: Speed > polish
- **Consumer Apps**: Balance both

## Code Quality Checklist

Before considering code complete, verify:

- [ ] Spring animations used for rotation/translation/scaling
- [ ] Gestures properly contained (pointer events disabled)
- [ ] Touch-action set for custom gestures
- [ ] Drag threshold implemented (5px)
- [ ] Pointer capture used for edge cases
- [ ] Focus management handled (labels, focus-within, transfer)
- [ ] Responsiveness matches context (reduced for tools)
- [ ] Staggering used for sequential content
- [ ] No bounce on hover/press (unless intentional)
- [ ] Loading states always shown
- [ ] Accessibility considered (focus rings, keyboard nav)

## Anti-Patterns to Avoid

### ❌ Don't Do This
```javascript
// Fixed duration animations
transition={{ duration: 0.3 }}

// Hover-based proximity (doesn't work for scroll)
onMouseEnter={() => setScale(1.2)}

// No drag threshold
onPointerMove={() => startDrag()}  // Triggers immediately

// Ignoring focus
<input />  // No focus management

// Bounce on everything
spring: { damping: 5 }  // Too bouncy for press
```

### ✅ Do This Instead
```javascript
// Spring animations
transition={{ type: "spring", stiffness: 200, damping: 20 }}

// Distance-based proximity
const scale = calculateProximityScale(cursorPos, itemPos, maxDist)

// Drag threshold
if (distance > DRAG_THRESHOLD) startDrag()

// Proper focus management
<label><Icon /><input /></label>

// Context-appropriate bounce
// Swipe: bouncy, Press: reserved
```

## Related Resources

- [Quick Reference](./QUICK_REFERENCE.md) - Code snippets
- [Patterns Index](./PATTERNS_INDEX.md) - Use case patterns
- [Principles](../principles/) - Detailed explanations


