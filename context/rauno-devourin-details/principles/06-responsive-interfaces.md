# Responsive Interfaces

## Overview

I like to think of design as an asynchronous conversation between you and the human on the other end using your interface. Only you aren't conversing directly with words, but through your design decisions.

But if they were sitting right across from you, narrating a story, you would likely give them tactful feedback by either nodding, asking follow up questions, or laughing. In various ways this lets them know you're engaged and following along.

Similarly, nearly all interactions you perform on a software system must respond with some form of feedback.

## Input-Response Loop

This "input-response" loop is why the text caret starts blinking when you stop typing—it communicates that the system is still responsive to your next input, and did not suddenly freeze.

Loading indicators communicate that the system understood you and is currently thinking of a response.

## Exaggeration

We can say that an interaction is jarring when the response on the screen was not appropriate for the input or dismisses context in which the action was taken.

Jarringness can manifest in different ways—stuttering framerate, poor motion choreography, or an inherently disproportionate response.

We must not forget that for the most part we build software that is a means to an end. People are trying to get stuff done using our interfaces, not be entertained. That means it is often important to exercise restraint.

**Example**: Say, you were about to cancel a form submission because you realized the shipping for a given item is outrageous. Does it feel appropriate to see the cancel button launch confetti? In this case, the exaggerated output is unexpected for the input.

### When Exaggeration Works

I want to also caveat the prior statement with the fact that exaggeration can be a great principle to apply in animation. Disney's 12 Principles of Animation cover exaggeration as a great technique.

But they also mention how important it is to exercise restraint when using exaggeration, especially in a scene containing several subjects.

### Sound Effects

Game developers use auditory feedback to exaggerate every piece of trivial input for a "juiced" or "game" feel.

Sound is easy to misuse for productivity software. The intent of a person is entirely different from a game.

It is especially important to disable it for mobile. Operating systems will pause whatever song is playing when a website plays a sound effect. This can be very jarring.

**Applied tastefully it feels viscerally satisfying**. For example, Line Graph plays a tick sound when you hover between data points.

Notably, using a sound with a slightly different pitch respectively for entering and exiting the graph makes this feel especially dynamic.

**Example**: Not Boring uses exaggeration in their interactions holistically through sound, haptics, and visuals, because their intended audience is a lot more specific which affords them to be more creative in their approach.

Even so, Not Boring understands restraint and dials up the exaggeration especially in moments of magnitude, like checking off a day in their Habits app.

### When Exaggeration Fails

But often times we get carried away with the craft of interfaces and forget what are we even solving. A few examples from my work on the right illustrate a jarring level of responsiveness from traditional interactions.

If we for a moment consider the interaction context, we realize that an engineer trying to fix an error in their code likely has no appreciation for a cute gooey-like surface animation when they are trying to get work done.

These are great demos for social media, but rarely make great production experiences for their ignorance of interaction context.

## Reduced Responsiveness

I like to think of ourselves as toolmakers, and that humans prefer tools to be fast. This is why the principles we use to build our product at Vercel are different from the principles we apply to our marketing pages.

A core product principle that we follow is to never fade in popovers for menus that the user launches, and is planning to immediately interact with thereafter.

From my point of view, the menu here without fade in feels nicer.

Reduced responsiveness makes the interaction feel more native, and dampens cognitive load while performing critical or high-frequency actions, such as reverting a broken change in production or filtering through data.

You'll find that we still fade out to confirm that the interaction was successful, and the interface did not suddenly error or freeze.

### When Brain Processes Faster Than Animation

Another usual case for reduced responsiveness are interactions where your brain is able to process what's on the screen faster than the animation can run. This may seem obvious but I see animations that take longer than necessary.

Let's look at this graph, try hovering and see if you are able to read the tooltip well before it finishes animating in.

## Design Principles

1. **Always provide feedback** - Every interaction needs a response
2. **Match response to input** - Don't exaggerate inappropriately
3. **Consider context** - Productivity tools need different responsiveness than entertainment
4. **Exercise restraint** - Especially in productivity software
5. **Reduce responsiveness when appropriate** - Menus, popovers that users will immediately interact with
6. **Don't animate faster than brain processes** - If the brain can read it faster, skip the animation

## Related Chapters

- [Motion Choreography](./05-motion-choreography.md)
- [Ergonomic Interactions](./03-ergonomic-interactions.md)
- [Simulating Physics](./04-simulating-physics.md)


