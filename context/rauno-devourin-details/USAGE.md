# How to Use This Reference

This guide explains how to integrate the Devouring Details reference into your projects and workflow.

## Quick Start

### 1. Reference in AI Conversations

When working with AI assistants (like Cursor, ChatGPT, Claude, etc.), you can reference specific files:

```
"Based on devouring-details-reference/principles/motion-choreography.md, 
how should I animate this transition?"
```

```
"Reference the scroll-strip.md prototype when implementing this scroll indicator"
```

### 2. Copy to Your Project

**Option A: Standalone Reference**
```
your-project/
├── src/
├── docs/
│   └── devouring-details-reference/  ← Copy or symlink
└── README.md
```

**Option B: Workspace-Level (Recommended)**
```
~/workspace/
├── project-1/
├── project-2/
└── shared-references/
    └── devouring-details-reference/  ← Shared across projects
```

### 3. Local Search

Use your editor's search or command-line tools:

```bash
# Search for specific concepts
grep -r "motion choreography" devouring-details-reference/

# Find code examples
grep -r "useSpring" devouring-details-reference/
```

## Usage Patterns

### During Design Phase

1. **Browse principles** when making design decisions
2. **Reference prototypes** for component inspiration
3. **Check design philosophies** for guidance

### During Implementation

1. **Copy code patterns** from prototypes
2. **Reference principles** when implementing interactions
3. **Use code snippets** from resources

### During Code Reviews

1. **Check against principles** for consistency
2. **Reference patterns** for best practices
3. **Use design philosophies** as criteria

## Integration Examples

### With Cursor/VS Code

1. Add the reference directory to your workspace
2. Use `@filename` to reference specific files in AI chat
3. Open files side-by-side while coding

### With Git

1. Add as a git submodule (if version controlled separately)
2. Or copy into your project's `docs/` folder
3. Commit with your project for team access

### With Documentation Tools

1. Link to specific chapters in your project docs
2. Include relevant sections in your design system
3. Reference in code comments

## Tips

- **Start with QUICK_REFERENCE.md** for a high-level overview
- **Use PATTERNS_INDEX.md** to find patterns by use case
- **Keep it updated** as you learn new techniques
- **Share with your team** for consistent design language

## File Structure

Each chapter file follows this structure:
- **Title & Overview** - What the chapter covers
- **Key Concepts** - Core principles and ideas
- **Code Examples** - Implementation patterns
- **Design Principles** - Best practices
- **Implementation Notes** - Technical details
- **Related Chapters** - Cross-references

This makes it easy to:
- Quickly scan for relevant information
- Copy code examples
- Understand context
- Find related concepts


