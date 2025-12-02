# How to Preview Markdown Files

## Method 1: VS Code / Cursor (Easiest)

If you're using VS Code or Cursor:
1. Open the markdown file
2. Press `Cmd+Shift+V` (Mac) or `Ctrl+Shift+V` (Windows/Linux) to open preview
3. Or right-click the file and select "Open Preview"

## Method 2: Use the Preview Script

Run the preview script:
```bash
./preview.sh
```

This will:
- Start a local server
- Open the file in your browser
- Keep the server running until you press Enter

## Method 3: Use a Markdown Preview Tool

Install and use a markdown preview tool:

```bash
# Using grip (GitHub-flavored markdown)
pip3 install grip
grip prototypes/example-resizable-panel.md

# Or using markdown-preview
npx markdown-preview prototypes/example-resizable-panel.md
```

## Method 4: Convert to HTML

Use pandoc to convert to HTML:
```bash
pandoc prototypes/example-resizable-panel.md -o preview.html --standalone --css=github-markdown.css
open preview.html
```

## Method 5: Online Preview

Copy the markdown content and paste it into:
- [Dillinger](https://dillinger.io/)
- [StackEdit](https://stackedit.io/)
- [Markdown Preview](https://markdownlivepreview.com/)

## Quick Preview Command

For quick previews, you can also use:

```bash
# Open in default markdown viewer (macOS)
open -a "Marked 2" prototypes/example-resizable-panel.md

# Or use any markdown app
open prototypes/example-resizable-panel.md
```


