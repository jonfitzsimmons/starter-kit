# Example: Resizable Panel

**Note**: This is an example prototype demonstrating how to apply Devouring Details principles to a new interaction not covered in the course. This serves as a reference for creating your own prototypes following the same standards.

## Overview

A resizable sidebar panel that can be dragged to adjust width. The panel snaps to predefined breakpoints and provides visual feedback during resizing. This demonstrates how to apply multiple principles to a single component.

## Interaction Design

### Core Behavior
- User drags the resize handle to adjust panel width
- Panel snaps to predefined breakpoints (narrow, medium, wide)
- Visual feedback shows current width and snap targets
- Smooth spring animation when snapping

## Principles Applied

### 1. Contained Gestures ✅

The resize handle must be properly contained to prevent text selection and cursor changes during dragging.

```javascript
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function ResizablePanel({ children }) {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(300);
  const panelRef = useRef(null);
  const x = useMotionValue(300);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handlePointerDown = (e) => {
    // Disable pointer events on all elements
    document.body.style.pointerEvents = 'none';
    e.currentTarget.style.pointerEvents = 'auto';
    e.currentTarget.style.cursor = 'col-resize';
    
    // Capture pointer for edge cases
    e.currentTarget.setPointerCapture(e.pointerId);
    
    setIsResizing(true);
    
    const startX = e.clientX;
    const startWidth = width;
    
    const handlePointerMove = (e) => {
      // Drag threshold check
      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) < 5 && !isResizing) return;
      
      const newWidth = Math.max(200, Math.min(600, startWidth + deltaX));
      x.set(newWidth);
    };
    
    const handlePointerUp = (e) => {
      // Re-enable pointer events
      document.body.style.pointerEvents = 'auto';
      e.currentTarget.style.cursor = 'col-resize';
      e.currentTarget.releasePointerCapture(e.pointerId);
      
      setIsResizing(false);
      
      // Snap to nearest breakpoint
      snapToBreakpoint(width);
      
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
    
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <motion.div
      ref={panelRef}
      style={{ width: springX }}
      className="resizable-panel"
    >
      {children}
      <div
        className="resize-handle"
        onPointerDown={handlePointerDown}
        style={{ touchAction: 'none' }}
      />
    </motion.div>
  );
}
```

**Principles Applied**:
- ✅ Pointer events disabled during gesture
- ✅ Pointer capture for edge cases
- ✅ Drag threshold (5px)
- ✅ Touch-action set to 'none'
- ✅ Cursor management

### 2. Simulating Physics ✅

The snap animation uses spring physics to feel natural, and we consider velocity when determining snap behavior.

```javascript
const BREAKPOINTS = [200, 300, 450, 600]; // narrow, medium, wide, extra-wide

function snapToBreakpoint(currentWidth) {
  // Find nearest breakpoint
  const nearest = BREAKPOINTS.reduce((prev, curr) => 
    Math.abs(curr - currentWidth) < Math.abs(prev - currentWidth) ? curr : prev
  );
  
  // Spring animation to breakpoint
  x.set(nearest);
  setWidth(nearest);
}
```

**Spring Configuration**:
```javascript
// Reserved spring - no bounce for resize (mechanical interaction)
const springConfig = {
  type: "spring",
  stiffness: 300,  // Fast response
  damping: 30,      // No bounce (higher damping)
  // No mass - keeps it responsive
};
```

**Principles Applied**:
- ✅ Spring animation (not fixed duration)
- ✅ Reserved spring (no bounce for mechanical interaction)
- ✅ Appropriate stiffness/damping for context

### 3. Motion Choreography ✅

The resize interaction is staged with multiple phases: dragging, visual feedback, and snapping.

```javascript
const [dragState, setDragState] = useState('idle'); // idle, dragging, snapping

function handlePointerMove(e) {
  const deltaX = e.clientX - startX;
  const newWidth = startWidth + deltaX;
  
  // Stage 1: Damping during drag (creates weight sensation)
  const damping = 0.7; // Moves less than cursor for weight
  const dampenedWidth = startWidth + (deltaX * damping);
  
  x.set(dampenedWidth);
  
  // Stage 2: Show snap preview
  const nearestBreakpoint = findNearestBreakpoint(dampenedWidth);
  const distanceToSnap = Math.abs(dampenedWidth - nearestBreakpoint);
  
  if (distanceToSnap < 50) {
    setDragState('near-snap');
    showSnapIndicator(nearestBreakpoint);
  } else {
    setDragState('dragging');
    hideSnapIndicator();
  }
}

function snapToBreakpoint(width) {
  setDragState('snapping');
  
  // Stage 3: Snap with spring
  const target = findNearestBreakpoint(width);
  x.set(target);
  
  // Stage 4: Reset after snap
  setTimeout(() => {
    setDragState('idle');
    setWidth(target);
  }, 300);
}
```

**Principles Applied**:
- ✅ Staged interaction (drag → preview → snap → reset)
- ✅ Damping creates weight sensation
- ✅ Different states move at different speeds
- ✅ Distance-based snapping (50px threshold)

### 4. Ergonomic Interactions ✅

Visual feedback makes it clear how to interact and what's happening.

```javascript
function ResizeHandle() {
  return (
    <div
      className="resize-handle"
      style={{
        touchAction: 'none',
        cursor: 'col-resize',
        // Visual affordance
        width: '4px',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        if (!isResizing) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {/* Snap indicator */}
      {dragState === 'near-snap' && (
        <motion.div
          className="snap-indicator"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      )}
    </div>
  );
}
```

**Principles Applied**:
- ✅ Clear visual affordance (handle visible on hover)
- ✅ Visual feedback during interaction
- ✅ Snap indicators show targets
- ✅ Cursor changes appropriately

### 5. Responsive Interfaces ✅

The interaction provides continuous feedback and matches the input appropriately.

```javascript
// Show width indicator during resize
{dragState === 'dragging' && (
  <motion.div
    className="width-indicator"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {Math.round(width)}px
  </motion.div>
)}

// Instant feedback - no delay
const handlePointerDown = (e) => {
  setIsResizing(true); // Immediate state change
  // No fade in - user is actively interacting
};
```

**Principles Applied**:
- ✅ Continuous feedback (width indicator)
- ✅ Instant response (no fade in during active interaction)
- ✅ Appropriate feedback for context (productivity tool = fast)

### 6. Inferring Intent ✅

The panel infers user intent through velocity and position to determine snap behavior.

```javascript
let velocity = 0;
let lastX = 0;
let lastTime = Date.now();

function handlePointerMove(e) {
  const now = Date.now();
  const deltaTime = now - lastTime;
  const deltaX = e.clientX - lastX;
  
  // Calculate velocity
  velocity = deltaX / deltaTime;
  
  lastX = e.clientX;
  lastTime = now;
  
  // If moving fast toward a breakpoint, snap earlier
  const nearestBreakpoint = findNearestBreakpoint(width);
  const direction = nearestBreakpoint > width ? 1 : -1;
  
  if (Math.abs(velocity) > 2 && Math.sign(velocity) === direction) {
    // Fast movement toward breakpoint - snap with anticipation
    const snapThreshold = 80; // Larger threshold for fast movement
    if (Math.abs(width - nearestBreakpoint) < snapThreshold) {
      snapToBreakpoint(width);
    }
  }
}
```

**Principles Applied**:
- ✅ Velocity-based behavior (fast movement = earlier snap)
- ✅ Anticipates user intent
- ✅ Reduces friction (snaps when moving fast toward target)

## Complete Implementation

```javascript
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const BREAKPOINTS = [200, 300, 450, 600];

function ResizablePanel({ children, initialWidth = 300 }) {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(initialWidth);
  const [dragState, setDragState] = useState('idle');
  const [snapTarget, setSnapTarget] = useState(null);
  
  const panelRef = useRef(null);
  const x = useMotionValue(initialWidth);
  const springX = useSpring(x, { 
    stiffness: 300, 
    damping: 30 
  });

  const findNearestBreakpoint = (currentWidth) => {
    return BREAKPOINTS.reduce((prev, curr) => 
      Math.abs(curr - currentWidth) < Math.abs(prev - currentWidth) ? curr : prev
    );
  };

  const snapToBreakpoint = (currentWidth) => {
    const target = findNearestBreakpoint(currentWidth);
    setSnapTarget(target);
    x.set(target);
    setWidth(target);
    
    setTimeout(() => {
      setDragState('idle');
      setSnapTarget(null);
    }, 300);
  };

  const handlePointerDown = (e) => {
    // Contained gesture setup
    document.body.style.pointerEvents = 'none';
    e.currentTarget.style.pointerEvents = 'auto';
    e.currentTarget.style.cursor = 'col-resize';
    e.currentTarget.setPointerCapture(e.pointerId);
    
    setIsResizing(true);
    setDragState('dragging');
    
    const startX = e.clientX;
    const startWidth = width;
    let hasMoved = false;
    let velocity = 0;
    let lastX = startX;
    let lastTime = Date.now();

    const handlePointerMove = (e) => {
      const deltaX = e.clientX - startX;
      
      // Drag threshold
      if (Math.abs(deltaX) < 5 && !hasMoved) return;
      hasMoved = true;
      
      // Calculate velocity
      const now = Date.now();
      const deltaTime = now - lastTime;
      if (deltaTime > 0) {
        velocity = (e.clientX - lastX) / deltaTime;
      }
      lastX = e.clientX;
      lastTime = now;
      
      // Damping for weight sensation
      const damping = 0.7;
      const newWidth = Math.max(150, Math.min(700, startWidth + (deltaX * damping)));
      x.set(newWidth);
      
      // Snap preview
      const nearest = findNearestBreakpoint(newWidth);
      const distance = Math.abs(newWidth - nearest);
      
      if (distance < 50) {
        setDragState('near-snap');
        setSnapTarget(nearest);
      } else {
        setDragState('dragging');
        setSnapTarget(null);
      }
      
      // Velocity-based early snap
      const direction = nearest > newWidth ? 1 : -1;
      if (Math.abs(velocity) > 2 && Math.sign(velocity) === direction && distance < 80) {
        snapToBreakpoint(newWidth);
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
        return;
      }
    };

    const handlePointerUp = (e) => {
      document.body.style.pointerEvents = 'auto';
      e.currentTarget.style.cursor = 'col-resize';
      e.currentTarget.releasePointerCapture(e.pointerId);
      
      setIsResizing(false);
      
      if (hasMoved) {
        snapToBreakpoint(width);
      } else {
        setDragState('idle');
      }
      
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <motion.div
      ref={panelRef}
      style={{ 
        width: springX,
        position: 'relative'
      }}
      className="resizable-panel"
    >
      {children}
      
      <div
        className="resize-handle"
        onPointerDown={handlePointerDown}
        style={{ 
          touchAction: 'none',
          cursor: 'col-resize',
          width: '4px',
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: isResizing ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => {
          if (!isResizing) {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isResizing) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <AnimatePresence>
          {dragState === 'near-snap' && snapTarget && (
            <motion.div
              className="snap-indicator"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '3px',
                height: '40px',
                backgroundColor: 'blue',
                borderRadius: '2px'
              }}
            />
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {isResizing && (
          <motion.div
            className="width-indicator"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '4px 8px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              pointerEvents: 'none'
            }}
          >
            {Math.round(width)}px
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ResizablePanel;
```

## CSS

```css
.resizable-panel {
  position: relative;
  background: white;
  border-right: 1px solid #e5e5e5;
  overflow: hidden;
}

.resize-handle {
  user-select: none;
  -webkit-user-select: none;
}

.resize-handle:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Focus management */
.resizable-panel:focus-within {
  outline: 2px solid blue;
  outline-offset: -2px;
}
```

## Design Decisions Explained

### Why Spring Animation?
Following **Simulating Physics**: Mechanical interactions (resize) benefit from spring physics but with higher damping (no bounce). The spring feels natural without being playful.

### Why Damping During Drag?
Following **Motion Choreography**: Damping creates a sensation of weight, making the panel feel substantial and preventing accidental resizing. The panel moves 70% of cursor movement, creating resistance.

### Why Snap Preview?
Following **Ergonomic Interactions**: Showing the snap target before snapping gives users control and anticipation. The indicator appears when within 50px of a breakpoint.

### Why Velocity-Based Snapping?
Following **Inferring Intent**: If the user is moving quickly toward a breakpoint, they likely want to snap there. We snap earlier (80px threshold) when velocity indicates intent.

### Why No Bounce?
Following **Simulating Physics**: Resize is a mechanical interaction, not a thrown gesture. Bounce would feel inappropriate. Higher damping (30) creates smooth, controlled movement.

### Why Instant Feedback?
Following **Responsive Interfaces**: During active interaction, feedback must be instant. No fade-in delays. The width indicator appears immediately when dragging starts.

## Principles Checklist

- ✅ **Contained Gestures**: Pointer events, touch-action, drag threshold, pointer capture
- ✅ **Simulating Physics**: Spring animation with appropriate config
- ✅ **Motion Choreography**: Staged interaction with damping and snap points
- ✅ **Ergonomic Interactions**: Visual affordance, clear feedback
- ✅ **Responsive Interfaces**: Instant feedback, continuous updates
- ✅ **Inferring Intent**: Velocity-based behavior, anticipatory snapping

## Related Principles

- [Contained Gestures](../principles/07-contained-gestures.md) - Gesture implementation
- [Simulating Physics](../principles/04-simulating-physics.md) - Spring configuration
- [Motion Choreography](../principles/05-motion-choreography.md) - Staging interactions
- [Ergonomic Interactions](../principles/03-ergonomic-interactions.md) - Visual feedback
- [Responsive Interfaces](../principles/06-responsive-interfaces.md) - Feedback patterns
- [Inferring Intent](../principles/01-inferring-intent.md) - Velocity-based behavior

---

**This example demonstrates how to apply Devouring Details principles to create production-quality interactions that feel intentional, responsive, and ergonomic.**


