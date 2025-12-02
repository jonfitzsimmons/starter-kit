# Quick Reference

A one-page cheat sheet of key patterns and principles from Devouring Details.

## Core Principles

### 1. Inferring Intent
- **Goal**: Make the interface between intent and software really thin
- **Examples**: Vercel env vars (⌘V paste), macOS text insertion, iOS share suggestions
- **Key**: Solve tedious pain points before users ask

### 2. Interaction Metaphors
- **Reuse patterns**: Build on what users already know (swiping = pages, pinching = zoom)
- **Compound learning**: One gesture unlocks understanding of others
- **Adapt, don't copy**: Digital mediums need thoughtful adaptation

### 3. Ergonomic Interactions
- **Affordance first**: Make it obvious how to use before interacting
- **Focus management**: Always handle focus properly (`<label>` wrapping, `focus-within`)
- **Touch considerations**: Design for the input device (fingers, mouse)

### 4. Simulating Physics
- **Use springs** for rotation, translation, scaling
- **Velocity matters**: Amplify touch interactions with momentum
- **Bounce when appropriate**: Only when there's actual momentum (swipes), not simple presses
- **Config**: `{ stiffness: 100-300, damping: 10-30, mass: 1 }` (tweak case by case)

### 5. Motion Choreography
- **Follow through**: Elements don't stop all at once
- **Staggering**: Delay based on index `delay: index * 0.1`
- **Staging**: Break interactions into nuanced stages
- **Consider distance**: Use moved distance, not just time

### 6. Responsive Interfaces
- **Always provide feedback**: Every interaction needs a response
- **Match response to input**: Don't exaggerate inappropriately
- **Reduce responsiveness**: Menus/popovers users will immediately interact with
- **Context matters**: Productivity tools ≠ entertainment

### 7. Contained Gestures
- **Disable pointer events** during gestures: `document.body.style.pointerEvents = 'none'`
- **Use `touch-action`**: `touch-action: none` for custom drag/pinch
- **Drag threshold**: 5px before registering drag
- **Pointer capture**: `setPointerCapture()` for edge dragging

### 8. Drawing Inspiration
- **Remix multiple sources**: Don't just copy, combine and elevate
- **Attribute credit**: When output clearly resembles input
- **Learn by recreating**: Solve the same problems to understand

## Code Patterns

### Spring Animation
```javascript
{
  type: "spring",
  stiffness: 100-300,
  damping: 10-30,
  mass: 1  // Use sparingly
}
```

### Staggering
```javascript
items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))
```

### Focus Management
```html
<label>
  <Icon />
  <input />
</label>
```

```css
input:focus { outline: none; }
label:focus-within { outline: 2px solid blue; }
```

### Contained Gesture
```javascript
function onPointerDown(e) {
  document.body.style.pointerEvents = 'none';
  e.currentTarget.style.pointerEvents = 'auto';
  e.currentTarget.setPointerCapture(e.pointerId);
}

function onPointerUp(e) {
  document.body.style.pointerEvents = 'auto';
  e.currentTarget.releasePointerCapture(e.pointerId);
}
```

### Drag Threshold
```javascript
const DRAG_THRESHOLD = 5;
const distance = Math.sqrt(
  Math.pow(e.clientX - startX, 2) + 
  Math.pow(e.clientY - startY, 2)
);
if (distance > DRAG_THRESHOLD) {
  // Start dragging
}
```

## Design Decisions

### When to Use Bounce
- ✅ Swipe gestures (has momentum)
- ❌ Hover/press interactions (no momentum)

### When to Reduce Responsiveness
- ✅ Menus/popovers users will immediately interact with
- ✅ When brain processes faster than animation
- ❌ Loading states, confirmations

### Tension: Usability vs Aesthetics
- **Productivity tools**: Lean usability
- **Marketing/entertainment**: Can lean aesthetics
- **Best**: Solve both with elegance

## Resources

- [Motion React](https://motion.dev/) - Spring animations
- [@use-gesture/react](https://use-gesture.netlify.app/) - Gesture handling
- [touch-action MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
- [Pointer Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)


