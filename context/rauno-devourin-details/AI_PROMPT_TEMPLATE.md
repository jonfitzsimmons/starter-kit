# AI Assistant Prompt Template

Use this template to help AI assistants code in the Devouring Details style.

## Quick Start Prompt

```
You are a design engineer following the Devouring Details interaction design principles. 
When writing code, follow these standards:

1. Use spring animations (not fixed duration) for rotation/translation/scaling
2. Implement contained gestures (disable pointer events, use touch-action, drag threshold)
3. Handle focus properly (label wrapping, focus-within, focus transfer)
4. Match responsiveness to context (reduced for productivity tools)
5. Use staggering for sequential content
6. Consider physics (velocity, momentum, bounce only with momentum)
7. Make interactions feel intentional and responsive

Reference: [path to devouring-details-reference/CODING_STANDARDS.md]

Now, [your task here]
```

## Detailed Prompt Template

```
I'm working on [component/feature description]. Please help me implement this following 
Devouring Details principles:

CONTEXT:
- Type: [Productivity Tool / Marketing Site / Consumer App / Developer Tool]
- Interaction: [Drag / Swipe / Hover / Click / etc.]
- Platform: [Web / Mobile / Desktop]

REQUIREMENTS:
[Your specific requirements]

STANDARDS TO FOLLOW:
1. Refer to CODING_STANDARDS.md for animation patterns
2. Use spring animations with appropriate stiffness/damping
3. Implement gesture containment if needed
4. Handle focus management properly
5. Match responsiveness to context
6. Use staggering if displaying sequential content

Please:
1. Write code following these standards
2. Explain which principles you're applying
3. Suggest improvements if you see opportunities
```

## Code Review Prompt

```
Please review this code against Devouring Details principles:

[Paste your code]

Use CODE_REVIEW.md as the checklist. For each principle:
1. Check if it's followed
2. Provide specific line numbers where issues exist
3. Suggest concrete improvements
4. Rate 1-5 for each principle
5. Give overall assessment

Also check:
- Animation quality (springs, staggering)
- Gesture implementation (if applicable)
- Focus management
- Responsiveness matching context
```

## Pattern-Specific Prompts

### For Animation Implementation
```
I need to animate [element/action]. Following Devouring Details:

1. Should this use a spring? (rotation/translation/scaling = yes)
2. What stiffness/damping? (consider context: swipe = bouncy, press = reserved)
3. Should this be staggered? (if part of a list/grid = yes)
4. Any follow-through needed? (if stopping = yes)

Context: [describe interaction context]
```

### For Gesture Implementation
```
I need to implement [drag/swipe/pinch] gesture. Following Devouring Details:

1. Disable pointer events during gesture
2. Set appropriate touch-action
3. Implement 5px drag threshold
4. Use pointer capture for edge cases
5. Handle gesture conflicts (click vs drag)

Please provide complete implementation.
```

### For Focus Management
```
I have an input with an icon. Following Devouring Details ergonomic standards:

1. Wrap in <label> so icon focuses input
2. Use focus-within for container focus ring
3. Disable outline on input itself
4. Ensure proper focus transfer if opening/closing dialogs

Please provide the implementation.
```

## Style Enforcement Prompt

```
When writing code for me, always:

1. Check CODING_STANDARDS.md first
2. Use spring animations (motion/react or similar)
3. Implement contained gestures properly
4. Handle focus management
5. Match responsiveness to context
6. Use staggering for lists
7. Consider physics (velocity, momentum)

If you're unsure about a pattern, check PATTERNS_INDEX.md for use case examples.

Never:
- Use fixed duration animations (duration: 0.3)
- Ignore focus management
- Add bounce to hover/press (only swipe)
- Skip loading states
- Forget touch-action for custom gestures
```

## Comparison Prompt

```
Compare this code to Devouring Details standards:

[Your code]

[Reference code from course, if available]

Please identify:
1. What principles are being followed well
2. What's missing or could be improved
3. Specific code changes needed
4. How to elevate it to match course standards
```

## Learning Prompt

```
I want to learn how to implement [interaction pattern] following Devouring Details.

Please:
1. Explain which principles apply
2. Show code example following CODING_STANDARDS.md
3. Explain why each decision was made
4. Show common mistakes to avoid
5. Provide a complete working example

Reference: [relevant principle chapter]
```

## Integration with Your Workflow

### For Cursor/VS Code
Add to your `.cursorrules` or workspace settings:
```
When coding, follow Devouring Details principles from:
[path]/devouring-details-reference/CODING_STANDARDS.md

Always check CODE_REVIEW.md checklist before considering code complete.
```

### For ChatGPT/Claude
Save this as a custom instruction:
```
You are a design engineer following Devouring Details interaction design principles.
Always reference CODING_STANDARDS.md and CODE_REVIEW.md when writing or reviewing code.
Prioritize spring animations, contained gestures, focus management, and context-appropriate responsiveness.
```

### For Code Reviews
Use this in PR templates:
```markdown
## Devouring Details Review

- [ ] Reviewed against CODE_REVIEW.md
- [ ] All principles checked
- [ ] Animations use springs
- [ ] Gestures properly contained
- [ ] Focus management handled
- [ ] Responsiveness matches context
```

## Example Conversations

### Example 1: Building a Draggable Component
```
User: I need a draggable card component

AI: Following Devouring Details contained gestures principles, here's the implementation:

[Code with pointer events, touch-action, drag threshold, pointer capture]

This follows:
- Contained Gestures principle (pointer events disabled)
- Simulating Physics (spring on release)
- Ergonomic Interactions (proper cursor states)
```

### Example 2: Reviewing Existing Code
```
User: [Pastes code] Review this against Devouring Details

AI: Reviewing against CODE_REVIEW.md:

✅ Simulating Physics: Using springs (4/5)
❌ Contained Gestures: Missing pointer event management (2/5)
✅ Focus Management: Properly handled (5/5)
...

Overall: 28/40 - Good, but needs gesture containment
```

## Related Files

- [Coding Standards](./CODING_STANDARDS.md) - Detailed standards
- [Code Review](./CODE_REVIEW.md) - Review checklist
- [Quick Reference](./QUICK_REFERENCE.md) - Code snippets
- [Patterns Index](./PATTERNS_INDEX.md) - Use case patterns


