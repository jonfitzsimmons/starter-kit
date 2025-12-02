# Inferring Intent

## Overview

Interaction design is an artform to make experiences that fluidly respond to human intent. Our north star as designers is to make the layer between software and user intent really thin.

Inferred intent is usually the invisible driving force behind interactions that people tend to describe as "magical" as if someone read your mind and predicted what you wanted to do without asking.

## Key Concept

**The Goal**: Make the interface between intent and software really thin.

Inferred interactions usually solve a tedious pain point when you need it the most.

## Examples

### 1. Apple Maps
Displays the active route navigation without unlocking the device.

### 2. Apple Wallet
Increases the brightness when presenting a pass for scanning.

### 3. Spotify
Adjusts the interface based on inferred user intent.

### 4. Vercel Dashboard - Environment Variables
Recognized that people don't want to fill in environment variables one by one—instead they want to paste a local environment file.

**Solution**: Pressing ⌘V in the input field reads the clipboard and generates as many fields as there are lines in the pasted variable file.

If you had to insert each variable one by one, the layer between the software and your intent would be really "thick" instead of "thin."

### 5. macOS Text Insertion
There's an interesting amount of inference behind text insertion on operating systems (from Apple's 1992 Human Interface Guidelines).

- If you cut a word from a sentence and it has spaces around it, the system will also cut the space.
- If you paste the word next to another word with no space between it, the system will add a space if the word is part of a sentence.

This is extremely convenient because you don't have to fiddle with spacing manually.

### 6. macOS Window Movement
macOS handles moving windows differently by taking into account your speed of movement—or velocity—to assume that you are trying to either:
- Move the window off screen, or
- Position it against the edge

**Behavior**:
- Moving quickly will let you easily go off screen
- Slower movements are met with resistance to let you comfortably align it

### 7. iOS Share Sheet
On an iPhone, if you wanted to share content with a friend in a crowded room, the iOS share sheet can suggest a likely recipient by using on-device knowledge about the person's most frequent and recent contacts.

### 8. Raycast Extension for Bookmarking
Built a Raycast extension for a personal bookmarking tool because logging into the site to insert a bookmark was too tedious. Realized that it is equally tedious to copy and paste the URL of the bookmark into an input form to save it.

**Solution**: The flow only requires pressing ⌘⇧B on whatever browser you're using and it will infer:
- The URL
- Favicon
- Title

All from the active tab.

## Design Principle

> "The goal is to make the interface between intent and software really thin" — Paco Coursey

## Resources

- Intelligent cut and paste (p. 302) — Macintosh Human Interface Guidelines, Apple (1992)
- Nearby interactions | Apple Developer Documentation
- (Basic) Bookmark - Raycast extension example

## Related Chapters

- [Interaction Metaphors](./02-interaction-metaphors.md)
- [Ergonomic Interactions](./03-ergonomic-interactions.md)


