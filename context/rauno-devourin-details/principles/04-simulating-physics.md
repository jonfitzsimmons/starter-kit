# Simulating Physics

## Overview

I can't reiterate enough that great interactions are inspired by physics and modelled after the natural world around us.

In this chapter, we'll be looking at how movement from the physical world can be used to drive the movement of our animations. We'll talk about how different properties like velocity, momentum, and weight can be applied to digital interactions.

## Key Concept

All of our touch interactions are amplified with velocity to create a sense of momentum and resemblance to a physical counterpart.

For instance, the movement of Apple's Dynamic Island retains the momentum and angle at which it was thrown. It's never perfectly centered or consistent in timing.

This movement builds on our natural sense of physics from the real world, like how swiping a playing card would feel. Although the movement of the playing card exhibits less bounce since it's conceptual.

## Spring Motion

When it comes to simulating physics, spring motion gets brought up a lot.

Instead of a fixed animation duration, springs have physical properties that determine how an object moves—such as stiffness, damping, and mass.

You don't need to always use springs but generally any rotation, translation, or scaling movement looks better with a spring.

For example, this pendulum movement with an ease-in-out easing would make it not feel very physical.

### CSS Spring Limitations

Unfortunately the spring motion offered by CSS is not perfect so we still need a spring motion library. The recent `linear()` API still works with duration and does not feel very nice to use because the springs are not fluidly interruptible.

**What does this mean?** If you animate an element with `linear()` into a position and then quickly to another—it won't smoothly retarget.

True spring physics will retain the momentum and transition with a beautiful smooth arc instead.

### Spring Configuration

I use motion/react for spring animations, their spring configuration looks something like this, like many other libraries:

```javascript
{
  type: "spring",
  stiffness: 100,
  damping: 10,
  mass: 1,
}
```

There isn't a perfect config that you can reuse across animations, I always tweak the parameters case by case in code. The config depends a lot on the size of the moving target and sometimes changing one value slightly can make a huge difference.

**Mental Model**:
- Higher stiffness values produce faster movement
- Lower damping values produce more bounce or overshoot

**Example**: I would usually never use mass because increasing it makes the movement feel lethargic and not responsive for interactions. But for this pendulum it feels a lot better with mass because of the way it moves left and right a bit after coming to a stop.

## When to Use Bounce

Simulating physics does not just mean animating everything with bouncy springs. It can be tempting to do so but let's take a step back for a moment.

The mental model I use for bounce in spring motion is to consider whether the interaction has any considerable momentum to it that should be reflected in the movement of the surface.

**Example**: Bouncy springs on traditional hover–press interactions usually feel jarring considering the lack of momentum.

A press feels more mechanical than fluid. Unless you want the interface to feel playful it generally makes more sense to be more reserved with the bounce effect.

Conversely, if you were to perform a swipe gesture, a bouncy response would feel better because of the velocity of the gesture.

## Spring Without Overexaggeration

Spring motion can still feel good without overexaggerating on the bounce. When I think about "simulating physics" I want to emphasize all the creative physical metaphors you could connect digital experiences to.

You might scale an element up on hover, and down on press, simulating a sense of applied pressure. It is important to also understand that scaling an element down only makes sense when you press it, not when you hover.

Here is the spring config again—there is no bounce compared to the previous example but we still get the satisfying feeling of a spring:

```javascript
{
  type: "spring",
  stiffness: 300,
  damping: 30,
}
```

## Interaction Metaphors

You could also take a physical interaction and then adjust it for a digital interaction while retaining its essence.

**Example**: To complete an item in a todo list, you could draw inspiration from crossing off text in a notebook. A swift stroke through text carries momentum in it. We can draw inspiration from such movement to subtly bounce the todo item as it gets crossed off.

## Physicality in Repositioning

On the second home page for Devouring Details I used to have this orange indicator that had a call-to-action button attached to it. If you scrolled down far enough, it would eventually move off screen creating a jarring reachability problem as if it had fallen off a ledge.

Repositioning the button when it reaches the screen's edge, the interaction gains a sense of physicality. It feels as if the element has mass and force that responds to the environment—like throwing a ball against a wall.

## Design Principles

1. **Velocity matters** - Amplify touch interactions with velocity for momentum
2. **Use springs for physical movement** - Rotation, translation, scaling benefit from springs
3. **Consider momentum** - Bounce makes sense when there's actual momentum (swipes), not for simple presses
4. **Tweak parameters** - There's no perfect config, adjust case by case
5. **Physical metaphors** - Connect digital experiences to physical interactions
6. **Mass and weight** - Use mass sparingly, usually makes things feel lethargic

## Related Chapters

- [Motion Choreography](./05-motion-choreography.md)
- [Interaction Metaphors](./02-interaction-metaphors.md)
- [Responsive Interfaces](./06-responsive-interfaces.md)


