# CLAUDE.md - アタリメ Web Project Guidelines

## Build/Run Commands
```bash
# Use browser to preview site
open index.html     # macOS
start index.html    # Windows

# HTTP server for local development
python -m http.server 8000
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 tags (header, nav, section, footer)
- Indent with tabs, not spaces
- Use lowercase attributes and element names
- Close all tags properly, even void elements with trailing slash

### CSS
- Use descriptive class names (e.g., .hero not .h)
- Follow existing color scheme (defined in style.css)
- Organize CSS with comments by component/section
- Use the existing CSS import system in main.css

### JavaScript
- Use jQuery for DOM manipulation (already loaded)
- Follow existing camelCase naming conventions
- Keep scripts at bottom of HTML for performance
- Maintain existing event handling patterns

### Images
- Store in /images/ directory
- Use descriptive filenames
- Optimize for web before adding