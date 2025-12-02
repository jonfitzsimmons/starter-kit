# Example: Long Press Menu

**Note**: This is an example prototype demonstrating how to apply Devouring Details principles to a new interaction not covered in the course. This serves as a reference for creating your own prototypes following the same standards.

## Overview

A long press menu that appears after holding an element for 600ms. The menu features visual feedback during the press, spring animations on appearance, and staggered menu items. This demonstrates how to apply multiple principles to a context menu interaction.

## Interaction Design

### Core Behavior
- User long presses (holds for 600ms) on a target element
- Progress ring fills during the press duration
- Menu appears with spring animation at press location
- Menu items stagger in with 100ms delays
- Menu closes on backdrop click, Escape key, or scroll

## Principles Applied

### 1. Contained Gestures ✅

The long press must be properly contained to prevent default browser behaviors and accidental triggers.

```javascript
function handlePointerDown(e, item) {
  // Prevent context menu
  e.preventDefault();
  
  // Contained gesture setup
  item.style.touchAction = 'none';
  item.setPointerCapture(e.pointerId);

  isPressing = true;
  currentTarget = item;
  pressStartTime = Date.now();

  // Cancel if moved too far
  function handlePointerMove(e) {
    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + 
      Math.pow(e.clientY - centerY, 2)
    );

    if (distance > 50) {
      resetPress(item);
      item.releasePointerCapture(e.pointerId);
    }
  }
}
```

**Principles Applied**:
- ✅ Touch-action set to 'none'
- ✅ Pointer capture for consistent behavior
- ✅ Movement threshold (50px) cancels press
- ✅ Context menu prevented
- ✅ Proper cleanup on cancel

### 2. Simulating Physics ✅

The menu appearance uses spring animation to feel natural and responsive.

```javascript
function springAnimation(start, target, onUpdate, onComplete) {
  const stiffness = 400;
  const damping = 25;
  let position = start;
  let velocity = 0;

  function animate() {
    const force = (target - position) * (stiffness / 1000);
    velocity += force;
    velocity *= (1 - damping / 100);
    position += velocity;

    if (Math.abs(target - position) < 0.5 && Math.abs(velocity) < 0.1) {
      position = target;
      onUpdate(position);
      if (onComplete) onComplete();
      return;
    }

    onUpdate(position);
    requestAnimationFrame(animate);
  }

  animate();
}

// Menu appearance
menu.style.opacity = 0;
menu.style.transform = 'scale(0.9) translateY(-10px)';

springAnimation(0, 1, (value) => {
  menu.style.opacity = value;
  menu.style.transform = `scale(${0.9 + value * 0.1}) translateY(${-10 + value * 10}px)`;
});
```

**Spring Configuration**:
```javascript
// Bouncy spring for menu appearance (playful interaction)
const springConfig = {
  stiffness: 400,  // Fast response
  damping: 25,     // Slight bounce (lower damping)
  // No mass - keeps it responsive
};
```

**Principles Applied**:
- ✅ Spring animation (not fixed duration)
- ✅ Appropriate stiffness/damping for context
- ✅ Menu appearance feels natural and responsive

### 3. Motion Choreography ✅

Menu items stagger in with delays, creating a layered appearance.

```javascript
const STAGGER_DELAY = 100; // ms between items

menuItems.forEach((item, index) => {
  setTimeout(() => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(-5px)';
    
    // Spring animation for each item
    springAnimation(0, 1, (value) => {
      item.style.opacity = value;
      item.style.transform = `translateY(${-5 + value * 5}px)`;
    });
  }, index * STAGGER_DELAY);
});
```

**Principles Applied**:
- ✅ Staggered appearance (100ms delay between items)
- ✅ Each item animates independently
- ✅ Creates depth and visual interest
- ✅ Doesn't feel slow (items appear quickly)

### 4. Ergonomic Interactions ✅

Visual feedback makes it clear what's happening and what to do.

```javascript
// Progress ring during long press
function updateProgressRing(item, progress) {
  const circle = item.querySelector('circle');
  const circumference = 2 * Math.PI * 25;
  const offset = circumference - (progress * circumference);
  circle.style.strokeDashoffset = offset;
}

// Visual state changes
item.classList.add('pressing'); // Visual feedback
const indicator = item.querySelector('.press-indicator');
indicator.classList.add('active'); // Pulse animation

// Progress animation
const startTime = Date.now();
function updateProgress() {
  const elapsed = Date.now() - startTime;
  const progress = Math.min(elapsed / LONG_PRESS_DURATION, 1);
  updateProgressRing(item, progress);
  
  if (progress >= 1) {
    showMenu();
    return;
  }
  requestAnimationFrame(updateProgress);
}
```

**Principles Applied**:
- ✅ Clear visual affordance (cards indicate interactivity)
- ✅ Progress feedback (ring fills during press)
- ✅ Press indicator (pulse animation)
- ✅ State changes (pressing class, hover states)
- ✅ Menu positioning (stays in viewport)

### 5. Responsive Interfaces ✅

The interaction provides continuous feedback and responds appropriately to user input.

```javascript
// Instant feedback on press start
item.classList.add('pressing'); // Immediate visual change
indicator.classList.add('active'); // Immediate pulse

// Continuous progress feedback
requestAnimationFrame(updateProgress); // Smooth progress ring

// Menu positioning adapts to viewport
function showMenu(x, y) {
  const menuRect = menu.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Adjust to stay in viewport
  let menuX = x;
  let menuY = y - 10;

  if (menuX + menuRect.width > viewportWidth) {
    menuX = viewportWidth - menuRect.width - 10;
  }
  // ... more positioning logic
}
```

**Principles Applied**:
- ✅ Instant feedback (immediate visual changes)
- ✅ Continuous updates (progress ring)
- ✅ Adaptive positioning (stays in viewport)
- ✅ Clear state transitions

### 6. Inferring Intent ✅

The system infers user intent through press duration and movement.

```javascript
const LONG_PRESS_DURATION = 600; // ms
const MOVEMENT_THRESHOLD = 50; // pixels

function handlePointerMove(e) {
  const rect = item.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.sqrt(
    Math.pow(e.clientX - centerX, 2) + 
    Math.pow(e.clientY - centerY, 2)
  );

  // If moved too far, user likely didn't intend long press
  if (distance > MOVEMENT_THRESHOLD) {
    resetPress(item);
    return;
  }
}

// Progress indicates intent
const progress = elapsed / LONG_PRESS_DURATION;
if (progress >= 1) {
  // User held long enough - show menu
  showMenu();
}
```

**Principles Applied**:
- ✅ Duration-based intent (600ms = intentional)
- ✅ Movement threshold (50px = accidental)
- ✅ Visual progress indicates completion
- ✅ Cancels appropriately on movement

## Complete Implementation

```javascript
const LONG_PRESS_DURATION = 600;
const STAGGER_DELAY = 100;
const MOVEMENT_THRESHOLD = 50;

let pressTimer = null;
let isPressing = false;
let currentTarget = null;

function springAnimation(start, target, onUpdate, onComplete) {
  const stiffness = 400;
  const damping = 25;
  let position = start;
  let velocity = 0;

  function animate() {
    const force = (target - position) * (stiffness / 1000);
    velocity += force;
    velocity *= (1 - damping / 100);
    position += velocity;

    if (Math.abs(target - position) < 0.5 && Math.abs(velocity) < 0.1) {
      position = target;
      onUpdate(position);
      if (onComplete) onComplete();
      return;
    }

    onUpdate(position);
    requestAnimationFrame(animate);
  }

  animate();
}

function updateProgressRing(item, progress) {
  const circle = item.querySelector('circle');
  const circumference = 2 * Math.PI * 25;
  const offset = circumference - (progress * circumference);
  circle.style.strokeDashoffset = offset;
}

function showMenu(x, y) {
  // Position menu (viewport-aware)
  const menuRect = menu.getBoundingClientRect();
  let menuX = Math.min(x, window.innerWidth - menuRect.width - 10);
  let menuY = Math.min(y - 10, window.innerHeight - menuRect.height - 10);
  
  menu.style.left = menuX + 'px';
  menu.style.top = menuY + 'px';

  // Spring animation
  menu.style.opacity = 0;
  menu.style.transform = 'scale(0.9) translateY(-10px)';
  
  springAnimation(0, 1, (value) => {
    menu.style.opacity = value;
    menu.style.transform = `scale(${0.9 + value * 0.1}) translateY(${-10 + value * 10}px)`;
  });

  // Stagger menu items
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(-5px)';
      
      springAnimation(0, 1, (value) => {
        item.style.opacity = value;
        item.style.transform = `translateY(${-5 + value * 5}px)`;
      });
    }, index * STAGGER_DELAY);
  });
}

function handlePointerDown(e, item) {
  e.preventDefault();
  item.style.touchAction = 'none';
  item.setPointerCapture(e.pointerId);

  isPressing = true;
  currentTarget = item;
  
  item.classList.add('pressing');
  const indicator = item.querySelector('.press-indicator');
  indicator.classList.add('active');

  const startTime = Date.now();
  function updateProgress() {
    if (!isPressing || currentTarget !== item) return;

    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / LONG_PRESS_DURATION, 1);
    
    updateProgressRing(item, progress);

    if (progress >= 1) {
      const rect = item.getBoundingClientRect();
      showMenu(rect.left + rect.width / 2, rect.top + rect.height / 2);
      resetPress(item);
      return;
    }

    requestAnimationFrame(updateProgress);
  }
  updateProgress();

  function handlePointerMove(e) {
    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + 
      Math.pow(e.clientY - centerY, 2)
    );

    if (distance > MOVEMENT_THRESHOLD) {
      resetPress(item);
      item.releasePointerCapture(e.pointerId);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    }
  }

  function handlePointerUp(e) {
    resetPress(item);
    item.releasePointerCapture(e.pointerId);
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  }

  document.addEventListener('pointermove', handlePointerMove);
  document.addEventListener('pointerup', handlePointerUp);
}

function resetPress(item) {
  isPressing = false;
  item.classList.remove('pressing');
  const indicator = item.querySelector('.press-indicator');
  indicator.classList.remove('active');
  updateProgressRing(item, 0);
  currentTarget = null;
}
```

## CSS

```css
.target-item {
  touch-action: none;
  user-select: none;
  position: relative;
  transition: all 0.2s;
}

.target-item.pressing {
  transform: scale(0.95);
  border-color: #0066cc;
}

.press-indicator {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid #0066cc;
  border-radius: 50%;
  opacity: 0;
}

.press-indicator.active {
  animation: pulse 0.6s ease-out;
}

.progress-ring circle {
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  transition: stroke-dashoffset 0.1s linear;
}

.menu {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
  transition: opacity 0.2s, transform 0.2s;
}

.menu.visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.menu-item {
  opacity: 0;
  transform: translateY(-5px);
  transition: opacity 0.2s, transform 0.2s;
}

.menu-item.visible {
  opacity: 1;
  transform: translateY(0);
}
```

## Design Decisions Explained

### Why Spring Animation?
Following **Simulating Physics**: Menu appearance benefits from spring physics with slight bounce (lower damping: 25) because it's a playful, discovery interaction. The spring feels natural and engaging.

### Why Staggered Menu Items?
Following **Motion Choreography**: Staggering creates visual depth and makes the menu feel more polished. The 100ms delay is fast enough to not feel slow but creates the layered effect.

### Why Progress Ring?
Following **Ergonomic Interactions**: The progress ring provides clear feedback about the press duration. Users know how long to hold and can see their progress, reducing uncertainty.

### Why Movement Threshold?
Following **Inferring Intent**: If the user moves more than 50px, they likely didn't intend a long press. Canceling prevents accidental menu triggers.

### Why 600ms Duration?
Following **Responsive Interfaces**: 600ms is long enough to prevent accidental triggers but short enough to feel responsive. It's a common standard for long press interactions.

### Why Viewport-Aware Positioning?
Following **Ergonomic Interactions**: The menu should always be visible and accessible. Positioning adapts to keep the menu within the viewport, ensuring usability.

## Principles Checklist

- ✅ **Contained Gestures**: Touch-action, pointer capture, movement threshold
- ✅ **Simulating Physics**: Spring animation with appropriate config
- ✅ **Motion Choreography**: Staggered menu items
- ✅ **Ergonomic Interactions**: Progress feedback, visual states, viewport positioning
- ✅ **Responsive Interfaces**: Instant feedback, continuous updates
- ✅ **Inferring Intent**: Duration-based detection, movement threshold

## Related Principles

- [Contained Gestures](../principles/07-contained-gestures.md) - Gesture implementation
- [Simulating Physics](../principles/04-simulating-physics.md) - Spring configuration
- [Motion Choreography](../principles/05-motion-choreography.md) - Staggering
- [Ergonomic Interactions](../principles/03-ergonomic-interactions.md) - Visual feedback
- [Responsive Interfaces](../principles/06-responsive-interfaces.md) - Feedback patterns
- [Inferring Intent](../principles/01-inferring-intent.md) - Duration and movement detection

---

**This example demonstrates how to apply Devouring Details principles to create production-quality long press interactions that feel intentional, responsive, and ergonomic.**


