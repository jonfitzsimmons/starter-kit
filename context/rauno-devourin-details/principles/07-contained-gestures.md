# Contained Gestures

## Overview

I usually use libraries like `@use-gesture/react` for gestures because they handle a lot of edge cases for you.

But sometimes for projects like Next.js Dev Tool, I would implement my own interactions when it doesn't make sense to pull in external dependencies.

And for such cases, it is useful to understand what the libraries handle so you can implement them accordingly.

## Key Concept: Drag Selection

Contained gestures is just something I made up myself so I'll do my best to explain it. To me it means they are "isolated" gestures that don't trigger surrounding elements or other gestures by accident.

Because dragging can often make the pointer exceed bounds of the target, we should be mindful to not select any text or trigger unintended elements in the way.

Try dragging the circle up and observe how you'll unintentionally select the text as soon as the pointer moves over the text.

## Cursor Consistency

There's another minute issue. During the gesture, the cursor will change to whatever it is hovering. In this case, moving over the text you should see a cursor or something similar if you're not using a touch device.

We should make sure that the cursor is always consistently the grabbing cursor, and does not ever change until the gesture ends regardless of what is being hovered.

## Solution: Disable Pointer Events

We can fix both of these by disabling pointer-event on all elements for the lifecycle of the gesture so our cursor does nothing when it moves over other elements.

Here's an example for what we would do for a dragging gesture where we want the cursor:

```javascript
function onPointerDown(e) {
  // Disable pointer events on all elements
  document.body.style.pointerEvents = 'none';
  e.currentTarget.style.pointerEvents = 'auto';
  e.currentTarget.style.cursor = 'grabbing';
}

function onPointerUp() {
  // Re-enable pointer events
  document.body.style.pointerEvents = 'auto';
  e.currentTarget.style.cursor = 'grab';
}
```

For this I usually create a utility for every type of gesture to enable and disable the containment like so:

```javascript
function enableGestureContainment() {
  document.body.style.pointerEvents = 'none';
}

function disableGestureContainment() {
  document.body.style.pointerEvents = 'auto';
}
```

Now we can be confident that the gesture feels native and predictable at all times.

Again, try dragging and observe how the cursor remains consistent and never selects text.

## Touch Action

There's another CSS property you want to be using when you build any touch interaction.

If you don't apply `touch-action` to an element that you implement custom interactions for, like dragging or pinching, the browser will try to scroll the page because there is a conflict between the native scroll behavior and your custom gesture.

**Example**: The yellow rectangle in this video is not draggable at all without scrolling. But the orange rectangle has `touch-action: none` applied and the browser knows not to scroll.

It is best to use the property and be specific about which native behavior you want to disable. For example, `touch-action: pan-y` will disable scrolling vertically, but not horizontally.

## Gesture Conflict

If you press this ball it toggles color between orange and yellow.

Now, if you try and drag it, as a side effect it also changes color because the end of a drag event sends off a `pointerup` event.

Remember, a click event in browsers is a `pointerdown` event followed by a `pointerup` event, and unfortunately dragging activates both.

### Solution: Cancel Click on Movement

How operating systems and libraries handle this conflict is by cancelling the click event when there is any movement detected on the target.

First, a move event sets internal state to drag:

```javascript
let isDragging = false;

function onPointerMove() {
  if (hasMoved) {
    isDragging = true;
  }
}
```

And when the drag event ends, the state is set to drag-end:

```javascript
function onPointerUp() {
  if (isDragging) {
    // Handle drag end
    isDragging = false;
    return;
  }
  // Handle click
}
```

Now the system can safely ignore the click event when it was sure that the user was dragging previously:

```javascript
function onClick(e) {
  if (isDragging) {
    e.preventDefault();
    return;
  }
  // Handle click
}
```

Try interacting again, you should be able to safely press and drag without any conflict.

## Drag Threshold

Further, drag interactions aren't usually triggered immediately. Some people don't have perfect motor skills and might accidentally move their mouse by a few pixels when they meant to press.

For example, in Figma there are a few pixels that you have to move before a drag gets registered.

It doesn't feel slow when you deliberately intend to drag but offers just a little grace to avoid unintentional triggers.

The way this usually gets implemented is by assigning a threshold that the pointer must move before the drag event is triggered:

```javascript
const DRAG_THRESHOLD = 5; // pixels

function onPointerMove(e) {
  const distance = Math.sqrt(
    Math.pow(e.clientX - startX, 2) + 
    Math.pow(e.clientY - startY, 2)
  );
  
  if (distance > DRAG_THRESHOLD) {
    // Start dragging
  }
}
```

You might adjust the threshold for the target size, but generally just a few pixels is good enough.

## Pointer Capture

There's a web specific quirk that you need to take into account here as well.

If you start dragging from the very edge, the drag will not work because your pointer leaves the target area.

If you try to drag the yellow circle, you'll notice that first it doesn't respond very well from the edge, but also it comes to a complete halt as soon as your pointer is no longer exactly on it.

The `setPointerCapture()` API elegantly solves this problem.

For dragging specifically, we can capture the pointer such that if it moves outside the target element, the events are still bound to it:

```javascript
function onPointerDown(e) {
  e.currentTarget.setPointerCapture(e.pointerId);
}

function onPointerUp(e) {
  e.currentTarget.releasePointerCapture(e.pointerId);
}
```

Then, on releasing the pointer, we simply release the capture:

Try dragging the orange circle, it should work from the edge and also respond when the pointer moves outside.

## Summary

### Best Practices

1. Make sure that drag interactions don't select or trigger other elements in the way
2. Use an appropriate `touch-action` value for touch interactions
3. Handle gesture conflicts with thresholds and gesture cancelling
4. Use the Pointer Capture API to direct all further events to the captured element

### Resources

- [touch-action - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)
- [Element: setPointerCapture() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)

## Related Chapters

- [Ergonomic Interactions](./03-ergonomic-interactions.md)
- [Interaction Metaphors](./02-interaction-metaphors.md)
- [Simulating Physics](./04-simulating-physics.md)


