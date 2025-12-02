# Ergonomic Interactions

## Overview

Have you ever tried to push a door only to realize it should be pulled instead? This is the design failing you, not you failing to use the door.

We can say that an interface has excellent affordance when it is obvious how to use it before interacting with it.

While affordance is concerned with the indication of how to use a thing, ergonomics relates to the ease of use of a thing.

Ergonomics and affordances contribute to the general usability of an interface. They both are worth considering prior to fancy animations and more visually appealing aspects of interaction design.

## Key Concepts

### Using Depth

It is much easier to build physical objects with adequate affordances because you are working with not only width and height in the form of a screen, but real depth and texture.

**Example**: The key fob for the Jaguar F-Type uses different textured buttons. The lock button is slightly more raised compared to other buttons. And the button that turns on the headlights to locate the car is textured differently.

These tactile cues help one memorize the button layout and interact with them without ever looking at them. This is excellent affordance and ergonomics.

### Visual Depth in Digital Interfaces

Which one of these buttons do you think stands more out as interactive? They both have shadows and exact same styling, but the background is what makes or breaks how visible your interactive elements are on the page.

To introduce more depth to the interface, it helps to further visually lift buttons by using a slightly subtler gray `#282828` as the page background, and reserve using pure colors like `#000000` for interactive elements.

## Creative Tension

Why do we even have interfaces with usability issues? Because often interfaces with extremely high usability trade off on visual appeal and people want to make beautiful interfaces. So, there is a tension.

For example, interfaces with large buttons or increased information density are usually harder to pull off in a visually appealing way. This is why we often see small font sizes or useful information hidden behind tooltips.

The tension between usability and aesthetics is why it feels so good when a design is able to solve both with elegance and strike a balance between usability and visual appeal.

**Example**: A project that we worked on at the 2024 Vercel Hackathon used the constraint of space as an opportunity to build beautiful yet information rich widgets for our dashboard.

The interface looks great and not busy because of the rich visuals that separate elements, and has great usability because you need fewer interactions and page navigations for the information you need.

### Leaning in the Tension

I don't believe you have to always strike a perfect balance between usability and aesthetics. Intended audience can be a factor to determine which way to lean in the tension.

**Example**: Here is the waitlist form input for Devouring Details. It could use a stronger button style to make it clear how to submit the form. But I made a trade-off for aesthetics by assuming that the people who would be interested in signing up for interaction design content would know how to submit a form by pressing the Enter key.

If you wanted to maximize sign ups, then you would probably lean more toward usability, but this is a side project where I am confidently happy with a slight bias for visual appeal.

## Specific Patterns

### Text Input

In forms, it is generally more ergonomic to not add tooltips to disabled buttons, but instead let users submit the form and receive an error instead.

It doesn't really make a lot of sense if there's only a single field, but with a more complex form it is much easier to find out what field you might have missed when you can submit the faulty form and see all the errors at once.

**Icon Placement**: A pet peeve of mine are when icons next to input fields either block mouse interactions or do not focus the input.

- The first input is ergonomically broken because the icon is not part of the input field
- The second gets closer to feeling great but the icon now steals pointer events from the input
- The last input feels the best because it lets you focus the input by pressing on the icon

**Implementation**: This is not complicated to do, you just need to wrap the elements with a `<label>` HTML element:

```html
<label>
  <Icon />
  <input />
</label>
```

And we can disable the focus ring on the `<input>` itself and use `focus-within` for a focus ring around the entire container:

```css
input:focus {
  outline: none;
}

label:focus-within {
  outline: 2px solid blue;
}
```

### Focus Management

You might have encountered websites that remove the default focus ring for aesthetics with `outline: none`—I surely am guilty of doing this early in my career without realizing that this significantly hurts accessibility.

The bare minimum is to leave the default outline property as is, but usually I like to customize the color, offset, and even radius for more aesthetic focus rings—all without trading off on aesthetics.

Generally browsers handle focus for you. But when launching other surfaces, like dialogs or panels from user input you should take special care of handling where the focus goes.

**Example**: On the platform if you press C to reveal the source code for a given prototype the focus is manually transferred to the code block. Pressing C again moves it back to the trigger element to avoid leaving the user stuck on an element that is no longer on screen.

It is usually not complicated to be sensible about this, but just takes extra attention to detail.

### Touch Input

When the iPhone launched before commercial touch screens, Steve Jobs literally had to show the entire world how to pinch and scroll. But the audience cheered seeing inertial scrolling for the first time not because it was something new, but because it used an input device we all are intimately in tune with—our fingers.

## Design Principles

1. **Affordance first** - Make it obvious how to use before interacting
2. **Ergonomics matter** - Ease of use is fundamental
3. **Balance tension** - Usability vs aesthetics based on audience
4. **Use depth** - Visual depth helps distinguish interactive elements
5. **Focus management** - Always handle focus properly for accessibility
6. **Touch considerations** - Design for the input device (fingers, mouse, etc.)

## Related Chapters

- [Interaction Metaphors](./02-interaction-metaphors.md)
- [Responsive Interfaces](./06-responsive-interfaces.md)
- [Contained Gestures](./07-contained-gestures.md)


