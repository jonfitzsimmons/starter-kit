# Motion Choreography

## Overview

Choreography is orchestrating when something happens in a sequence. It means you structure the animation lifecycle so that elements don't just linearly transition. For example, you might delay the appearance of secondary elements.

Not only can choreography make an interaction feel more layered, it can help us avoid overlapping layers during an animation.

## Key Concept: Follow Through and Overlapping Action

Walt Disney was once eager to push his animators and told them:

> "Things don't come to a stop all at once guys; first there's one part and then another"

They developed concepts of "follow through" and "overlapping action" for richer motion. Their intuition was that bodies in motion do not move all at once. Instead, parts of it move at different speeds and at different times.

A character might have a coat or long ears, and these parts would keep moving once the subject had stopped moving. The ears, or coat, would "follow through" even after the main action had stopped.

## Software Applications

Software on a screen is no different. Elements should move at different speeds and at different times, especially if they are conceptually distinct and have different sizes.

**Example**: When fading in secondary elements like labels and active items, you could choreograph a slight amount of delay before fading them in. Yet, it doesn't feel like a terrible delay because the scale transition is immediate.

## Staggering

A school of fish produce mesmerizing effects because they have very subtle differences in their movement—you could say they are naturally choreographed this way.

Naturally choreographed motion is found everywhere in nature. You rarely see all the leaves of a tree moving in a jarring concert all at once.

### Implementation

A commonly used motion choreography technique is called **staggering**. Staggering means to slightly delay the movement of an element based on their order in the group. We use the index property from a loop for this:

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

The prior text animation without any staggering would look very lifeless and visually uninteresting. Staggering almost feels like a hack for the amount of visual interest it is able to produce for little complexity.

### Communication Through Staggering

Now, staggering can also be used to better communicate what happens on the screen.

**Example**: OpenAI staggers the fade in of loaded content in a grid layout. The interface does not feel slower as a result. Instead, there's more depth to the motion because elements don't just jarringly appear all at once.

## Staging Interactions

Sometimes very subtle choreography can also help us stage an interaction so that it has more nuance to it.

**Example**: Try dragging the dock and notice all the stages it goes through. The details here are very minute, but how would you improve this interaction?

Despite the spring motion, the movement feels too lightweight, almost like it's devoid of meaning—like an abstract rectangle. For example, while dragging an orange rectangle, the effortless movement feels appropriate because we don't attribute any meaning to the object.

### Adding Weight with Damping

Now, let's try damping the dock offset so that it moves less than the actual dragged distance, creating a sensation of weight:

```javascript
function onPan(_, { offset }) {
  const damping = 0.5;
  const dampenedY = offset.y * damping;
  // ... rest of logic
}
```

Let's try dragging again. The dock should now feel heavier which makes it harder to trigger by accident.

### Adjusting Snap Points

We have now added more organic movement to the dock, but something about the snapping still feels off. Play with it again and try doing very short movements.

You'll find that the transition to the collapsed state feels too abrupt because the snapping happens when the dragged distance is virtually zero.

In the context of interactions not only can we use delays to choreograph motion, but take into account moved distance.

Now we'll adjust the snap point to have 35px of padding:

```javascript
function onPan(_, { offset }) {
  const damping = 0.5;
  const dampenedY = offset.y * damping;
  
  if (dampenedY > 35) {
    setCollapse(true);
  }
}
```

This feels nicer because you can now anticipate the snapping. And the drag has a moment to register in your brain so the interaction feels more layered and natural.

Remember, nature does not move in perfect concert. And great interactions are modelled after properties from our surrounding world because we naturally recognize them as familiar.

### Resetting Damping

We can go a step further. After snapping, we should reset the damping and restore natural movement:

```javascript
function onPan(_, { offset }) {
  const damping = collapsed ? 1 : 0.5;
  const dampenedY = offset.y * damping;
  // ... rest of logic
}
```

Resetting the damping amplifies the snap effect with satisfying feedback, because of the change in resistance to movement. It feels like peeling off the end of a sticker.

## Design Principles

1. **Follow through** - Elements don't stop all at once
2. **Overlapping action** - Different parts move at different speeds
3. **Staggering** - Delay elements based on order for visual interest
4. **Staging** - Break interactions into nuanced stages
5. **Consider distance** - Use moved distance, not just time, for choreography
6. **Natural movement** - Model after nature, not perfect concert

## Related Chapters

- [Simulating Physics](./04-simulating-physics.md)
- [Responsive Interfaces](./06-responsive-interfaces.md)
- [Contained Gestures](./07-contained-gestures.md)


