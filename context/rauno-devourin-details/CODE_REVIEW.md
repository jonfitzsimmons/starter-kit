# Code Review Checklist

Use this checklist to evaluate your code against Devouring Details principles and standards.

## How to Use

1. **For Self-Review**: Go through each section and check your code
2. **For AI Review**: Provide this checklist and your code to an AI assistant
3. **For Team Review**: Use as a code review template

## Review Template

```markdown
## Code Review: [Component/Feature Name]

### Principles Adherence
- [ ] Inferring Intent
- [ ] Interaction Metaphors  
- [ ] Ergonomic Interactions
- [ ] Simulating Physics
- [ ] Motion Choreography
- [ ] Responsive Interfaces
- [ ] Contained Gestures
- [ ] Drawing Inspiration

### Detailed Findings
[AI or reviewer fills in specific findings]

### Recommendations
[Specific suggestions for improvement]
```

## Principles Checklist

### 1. Inferring Intent ✅
- [ ] Does the interface anticipate user needs?
- [ ] Are there shortcuts for common actions?
- [ ] Is the layer between intent and software "thin"?
- [ ] Are tedious tasks automated where possible?

**Examples to Look For:**
- Clipboard inference (⌘V paste parsing)
- Velocity-based behavior
- Context-aware suggestions
- Smart defaults

**Red Flags:**
- Users must perform multiple steps for common tasks
- No shortcuts or accelerators
- Interface doesn't adapt to context

### 2. Interaction Metaphors ✅
- [ ] Are gestures reused from familiar patterns?
- [ ] Does one gesture unlock understanding of others?
- [ ] Are physical metaphors adapted thoughtfully?
- [ ] Is interruptability preserved?

**Examples to Look For:**
- Swipe = page navigation (book metaphor)
- Pinch = zoom (precision metaphor)
- Consistent gesture patterns across interface

**Red Flags:**
- Inconsistent gesture behavior
- Metaphors copied without adaptation
- Non-interruptible animations

### 3. Ergonomic Interactions ✅
- [ ] Is it obvious how to use before interacting?
- [ ] Are interactive elements visually distinct?
- [ ] Is focus management handled properly?
- [ ] Are touch targets appropriately sized?

**Examples to Look For:**
- `<label>` wrapping for input + icon
- `focus-within` for container focus rings
- Visual depth (background color, shadows)
- Proper touch target sizes (44x44px minimum)

**Red Flags:**
- Icons that don't focus inputs
- Missing focus indicators
- Unclear what's interactive
- Small touch targets

### 4. Simulating Physics ✅
- [ ] Are springs used for rotation/translation/scaling?
- [ ] Is velocity considered in interactions?
- [ ] Is bounce used appropriately (only with momentum)?
- [ ] Do animations feel physical, not mechanical?

**Examples to Look For:**
- Spring animations instead of fixed duration
- Velocity-based momentum
- Bounce only on swipe gestures
- Reserved springs for hover/press

**Red Flags:**
- `duration: 0.3` fixed animations
- Bounce on hover/press (no momentum)
- No velocity consideration
- Mechanical, non-fluid movement

### 5. Motion Choreography ✅
- [ ] Do elements move at different speeds/times?
- [ ] Is staggering used for sequential content?
- [ ] Is follow-through implemented?
- [ ] Are interactions staged with nuance?

**Examples to Look For:**
- Staggered list animations (`delay: index * 0.1`)
- Different speeds for different element sizes
- Follow-through on stopping animations
- Staged interactions (damping, snap points)

**Red Flags:**
- Everything animates at once
- No staggering for lists/grids
- Abrupt stops (no follow-through)
- Single-stage interactions

### 6. Responsive Interfaces ✅
- [ ] Is feedback provided for every interaction?
- [ ] Does response match input context?
- [ ] Is responsiveness reduced for productivity tools?
- [ ] Are loading states always shown?

**Examples to Look For:**
- Loading indicators
- Instant menus (no fade in for tools)
- Context-appropriate animations
- Blinking caret when idle

**Red Flags:**
- No loading feedback
- Exaggerated animations in productivity tools
- Menus fade in when user will immediately interact
- No response to user input

### 7. Contained Gestures ✅
- [ ] Are pointer events disabled during gestures?
- [ ] Is `touch-action` set appropriately?
- [ ] Is drag threshold implemented?
- [ ] Is pointer capture used for edge cases?

**Examples to Look For:**
- `document.body.style.pointerEvents = 'none'` during drag
- `touch-action: none` for custom gestures
- 5px drag threshold
- `setPointerCapture()` for edge dragging

**Red Flags:**
- Text selection during drag
- Cursor changes during gesture
- Browser scrolling conflicts with custom gesture
- Drag doesn't work from edges

### 8. Drawing Inspiration ✅
- [ ] Is inspiration properly attributed?
- [ ] Are multiple sources remixed?
- [ ] Is the implementation elevated beyond the source?
- [ ] Is creative distance established?

**Examples to Look For:**
- Credit given to sources
- Multiple inspirations combined
- Iteration beyond original
- Unique take on pattern

**Red Flags:**
- Direct copy without attribution
- Single source copied
- No iteration or improvement
- Too similar to source

## Technical Standards Checklist

### Animation Quality
- [ ] Springs used (not fixed duration)
- [ ] Staggering for sequential content
- [ ] Appropriate bounce (context-dependent)
- [ ] Smooth, interruptible animations

### Gesture Implementation
- [ ] Pointer events managed
- [ ] Touch-action set
- [ ] Drag threshold (5px)
- [ ] Pointer capture for edges
- [ ] Gesture conflicts handled

### Accessibility
- [ ] Focus management
- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Touch target sizes (44x44px)
- [ ] Screen reader considerations

### Performance
- [ ] Animations don't block interaction
- [ ] No janky animations
- [ ] Appropriate use of will-change
- [ ] Efficient proximity calculations

## Context-Specific Review

### Productivity Tools
- [ ] Reduced responsiveness (instant menus)
- [ ] Speed prioritized over polish
- [ ] Minimal animations
- [ ] Fast feedback loops

### Marketing/Entertainment
- [ ] Can use more animations
- [ ] Aesthetic considerations
- [ ] Engaging interactions
- [ ] Visual polish

### Developer Tools
- [ ] Maximum speed
- [ ] Minimal animations
- [ ] Keyboard shortcuts
- [ ] Focus on efficiency

## Scoring Guide

Rate each principle 1-5:
- **5**: Exemplary - Goes beyond standards
- **4**: Meets standards - Follows all patterns
- **3**: Mostly good - Minor improvements needed
- **2**: Needs work - Several issues
- **1**: Poor - Major refactoring needed

### Overall Assessment
- **40-32 points**: Excellent - Production ready
- **31-24 points**: Good - Minor improvements
- **23-16 points**: Needs work - Significant improvements
- **15-8 points**: Poor - Major refactoring needed

## Review Questions for AI

When asking an AI to review your code, use these prompts:

```
Review this code against Devouring Details principles:

1. Does it follow the coding standards in CODING_STANDARDS.md?
2. Check each principle from CODE_REVIEW.md
3. Provide specific line numbers and suggestions
4. Rate each principle 1-5
5. Give overall assessment
```

## Related Files

- [Coding Standards](./CODING_STANDARDS.md) - Detailed standards
- [Quick Reference](./QUICK_REFERENCE.md) - Code patterns
- [Patterns Index](./PATTERNS_INDEX.md) - Use case solutions


