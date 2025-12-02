# Patterns Index

Organized by use case - find patterns for specific interaction needs.

## Animations

### Spring Motion
- **When**: Rotation, translation, scaling movements
- **Config**: `{ stiffness: 100-300, damping: 10-30 }`
- **See**: [Simulating Physics](../principles/04-simulating-physics.md)

### Staggering
- **When**: Lists, grids, sequential content
- **Pattern**: `delay: index * 0.1`
- **See**: [Motion Choreography](../principles/05-motion-choreography.md)

### Follow Through
- **When**: Elements stopping, completing actions
- **Pattern**: Different parts move at different speeds
- **See**: [Motion Choreography](../principles/05-motion-choreography.md)

## Gestures

### Drag Interactions
- **Patterns**: 
  - Disable pointer events during drag
  - Use `touch-action: none`
  - Implement drag threshold (5px)
  - Use pointer capture for edge cases
- **See**: [Contained Gestures](../principles/07-contained-gestures.md)

### Swipe Navigation
- **Pattern**: Horizontal swiping = pages (book metaphor)
- **See**: [Interaction Metaphors](../principles/02-interaction-metaphors.md)

### Pinch to Zoom
- **Pattern**: Fingers close together, then spread (opposite of real world)
- **See**: [Interaction Metaphors](../principles/02-interaction-metaphors.md)

## Input & Forms

### Text Input with Icons
- **Pattern**: Wrap in `<label>` for focus management
- **See**: [Ergonomic Interactions](../principles/03-ergonomic-interactions.md)

### Focus Management
- **Pattern**: Custom focus rings with `focus-within`
- **See**: [Ergonomic Interactions](../principles/03-ergonomic-interactions.md)

### Form Validation
- **Pattern**: Let users submit and show errors, not tooltips on disabled buttons
- **See**: [Ergonomic Interactions](../principles/03-ergonomic-interactions.md)

## Feedback & Responsiveness

### Loading States
- **Pattern**: Always show loading indicators
- **See**: [Responsive Interfaces](../principles/06-responsive-interfaces.md)

### Reduced Responsiveness
- **When**: Menus, popovers users will immediately interact with
- **Pattern**: No fade in, instant appearance
- **See**: [Responsive Interfaces](../principles/06-responsive-interfaces.md)

### Exaggeration
- **When**: Moments of magnitude, entertainment contexts
- **Avoid**: Productivity software, cancel actions
- **See**: [Responsive Interfaces](../principles/06-responsive-interfaces.md)

## Proximity & Distance

### Proximity Effects
- **Pattern**: Distance-based scaling/interpolation
- **Use Case**: Line minimap, hover effects
- **See**: [Line Minimap](../prototypes/line-minimap.md)

### Magnetic Interactions
- **Pattern**: Elements respond to cursor/scroll position
- **See**: [Line Minimap](../prototypes/line-minimap.md)

## Visual Design

### Depth & Affordance
- **Pattern**: Use background color to lift interactive elements
- **Example**: `#282828` background, `#000000` for buttons
- **See**: [Ergonomic Interactions](../principles/03-ergonomic-interactions.md)

### Visual Hierarchy
- **Pattern**: Rich visuals separate elements without busyness
- **See**: [Ergonomic Interactions](../principles/03-ergonomic-interactions.md)

## Intent & Inference

### Clipboard Inference
- **Pattern**: Detect paste intent (⌘V) and parse content
- **Example**: Vercel env vars from `.env` file
- **See**: [Inferring Intent](../principles/01-inferring-intent.md)

### Velocity-Based Behavior
- **Pattern**: Use movement speed to infer intent
- **Example**: macOS window movement (fast = off screen, slow = align)
- **See**: [Inferring Intent](../principles/01-inferring-intent.md)

### Context-Aware Suggestions
- **Pattern**: Use device knowledge for suggestions
- **Example**: iOS share sheet suggests frequent contacts
- **See**: [Inferring Intent](../principles/01-inferring-intent.md)

## Staging & Choreography

### Interaction Stages
- **Pattern**: Break interactions into nuanced stages
- **Example**: Dock dragging with damping, snap points, reset
- **See**: [Motion Choreography](../principles/05-motion-choreography.md)

### Distance-Based Snapping
- **Pattern**: Use moved distance, not just time
- **Example**: 35px threshold before snapping
- **See**: [Motion Choreography](../principles/05-motion-choreography.md)

## Inspiration & Learning

### Remixing Sources
- **Pattern**: Combine multiple inspirations
- **See**: [Drawing Inspiration](../principles/08-drawing-inspiration.md)

### Learning by Recreating
- **Pattern**: Recreate others' work to understand problems
- **See**: [Drawing Inspiration](../principles/08-drawing-inspiration.md)

## By Component Type

### Scroll Indicators
- [Scroll Strip](../prototypes/scroll-strip.md)
- [Line Minimap](../prototypes/line-minimap.md)

### Timelines
- [Radial Timeline](../prototypes/radial-timeline.md)

### Graphs & Data
- [Line Graph](../prototypes/line-graph.md)

### Carousels
- [Logos Carousel](../prototypes/logos-carousel.md)

### Surfaces
- [Morph Surface](../prototypes/morph-surface.md)
- [Blur Reveal](../prototypes/blur-reveal.md)

## By Problem

### Small Hit Areas
- **Solution**: Proximity effects, distance-based calculations
- **See**: [Line Minimap](../prototypes/line-minimap.md)

### Gesture Conflicts
- **Solution**: Drag threshold, gesture state management
- **See**: [Contained Gestures](../principles/07-contained-gestures.md)

### Touch vs Mouse
- **Solution**: `touch-action` CSS property
- **See**: [Contained Gestures](../principles/07-contained-gestures.md)

### Edge Dragging
- **Solution**: Pointer capture API
- **See**: [Contained Gestures](../principles/07-contained-gestures.md)

### Text Selection During Drag
- **Solution**: Disable pointer events during gesture
- **See**: [Contained Gestures](../principles/07-contained-gestures.md)


