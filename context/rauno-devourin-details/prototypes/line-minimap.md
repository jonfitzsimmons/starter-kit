# Line Minimap

## Overview

This prototype is a miniaturized interface for something like a Scroll Strip that contains horizontally scrollable items. For example, I used this for the second Devouring Details home page.

## The Problem: Naive Hover

I knew from the start that a simple hover interaction on the lines would not cut it. The elements are not large enough to register a hover.

Even if we made hit areas larger in width, the effect we would get is still not smooth because the scale values aren't interpolated from your movement.

Not to mention the hover strategy would not work for a scroll event, so we need another way to calculate the scale value for each item.

## Solution: Proximity Effect

The core of this effect is a function that calculates how much to scale an element based on its mathematical distance from the mouse cursor or scroll position.

It creates a fluid proximity effect where elements closer to the cursor scale more than those further away.

**Key Benefit**: Notice how now we can hover in between items and the scaling still continues to work.

## Implementation

The proximity calculation uses distance-based scaling:

```javascript
function calculateProximityScale(distance, maxDistance) {
  const normalizedDistance = Math.min(distance / maxDistance, 1);
  const scale = 1 - (normalizedDistance * scaleFactor);
  return Math.max(scale, minScale);
}
```

## Velocity-Based Rest

What makes this effect feel much better is when elements come to a rest after scrolling based on velocity. With linear interpolation we can start to gradually reduce the scale effect when the scroll velocity decreases.

In the source code you'll find a reset prop to configure which of the two behaviors you want.

## Variations

You can fiddle with the constants in the source file and use the `useProximity` hook to animate other values magnetically.

For example, here we are making each line visually the same, and animating opacity or other properties based on proximity.

If you come up with any other creative proximity effects, I would love to see them!

## Key Techniques

1. **Distance-based calculation** - Use mathematical distance instead of hover states
2. **Velocity-based interpolation** - Gradually reduce effects based on scroll velocity
3. **Proximity hook** - Reusable hook for magnetic animations
4. **Configurable behavior** - Reset prop for different interaction modes

## Related Chapters

- [Scroll Strip](./scroll-strip.md)
- [Drawing Inspiration](../principles/08-drawing-inspiration.md)
- [Motion Choreography](../principles/05-motion-choreography.md)


