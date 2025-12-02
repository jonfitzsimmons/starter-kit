# New Web Project Template

Use this template when starting a new web project. Copy and customize for your specific needs.

## Project Kickoff Prompt

```
I'm starting a new web project: [PROJECT_NAME]

Project Type: [Web Application / Website / Dashboard / etc.]

Key Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Target Users: [Description of users]

Primary Use Cases:
1. [Use case 1]
2. [Use case 2]
3. [Use case 3]

Technical Constraints:
- Framework: [React / Vue / Vanilla JS / etc.]
- Browser Support: [Modern browsers / IE11+ / etc.]
- Performance Requirements: [Any specific needs]

Design Considerations:
- [Any specific design requirements]
- [Brand guidelines if applicable]
- [Accessibility requirements]

Please create this project following the web interface guidelines:
- Focus on desktop web experience (not mobile-first)
- Implement proper keyboard navigation
- Add hover states for interactive elements
- Use URL state management where appropriate
- Ensure browser integration (back/forward, bookmarks, etc.)
- Support both mouse and keyboard interactions
- Follow the principles in rauno-web-interface-guidelines
```

## Checklist for New Projects

### Setup
- [ ] Project structure established
- [ ] Framework/tools configured
- [ ] Browser support defined
- [ ] Accessibility baseline set

### Core Web Features
- [ ] Keyboard navigation implemented
- [ ] Focus indicators visible
- [ ] Hover states for interactive elements
- [ ] URL state management (if needed)
- [ ] Browser history integration
- [ ] Reduced motion support

### Input Methods
- [ ] Mouse interactions
- [ ] Keyboard shortcuts
- [ ] Touch support (if applicable)
- [ ] Trackpad gestures (if applicable)

### Browser Integration
- [ ] Back/forward navigation works
- [ ] URLs are shareable/bookmarkable
- [ ] Browser search (Cmd/Ctrl+F) works
- [ ] Browser zoom supported
- [ ] No blocking of browser features

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Keyboard navigation complete
- [ ] Focus management in modals
- [ ] Screen reader tested
- [ ] Color contrast verified

### Performance
- [ ] Virtual scrolling for large lists (if needed)
- [ ] Debounced API calls
- [ ] Lazy loading where appropriate
- [ ] Optimized animations

## Component Creation Checklist

When creating new components:

### Interaction
- [ ] Hover states implemented
- [ ] Focus states implemented
- [ ] Keyboard accessible
- [ ] Cursor changes appropriately
- [ ] Loading states shown

### Browser Integration
- [ ] Works with browser back/forward (if navigation)
- [ ] URL state if shareable (if applicable)
- [ ] Respects browser zoom
- [ ] Doesn't block browser features

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA attributes if needed
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Screen reader friendly

### Web-Specific
- [ ] Right-click context (if applicable)
- [ ] Copy/paste support (if applicable)
- [ ] Multi-tab considerations (if applicable)
- [ ] Desktop-appropriate sizing

## Example: Starting a Dashboard Project

```
I'm starting a new web dashboard project: Analytics Dashboard

Project Type: Web Application (Dashboard)

Key Requirements:
- Real-time data visualization
- Multiple chart types (line, bar, pie)
- Filterable data tables
- Export functionality
- User preferences (theme, layout)

Target Users: Business analysts, data scientists

Primary Use Cases:
1. View real-time analytics metrics
2. Filter and drill down into data
3. Export reports
4. Customize dashboard layout

Technical Constraints:
- Framework: React + TypeScript
- Browser Support: Modern browsers (Chrome, Firefox, Safari, Edge)
- Performance: Handle 10,000+ data points smoothly

Design Considerations:
- Clean, professional design
- Dark/light theme support
- Accessible color contrast
- Keyboard navigation essential (power users)

Please create this project following the web interface guidelines:
- Desktop-first design (1024px+ viewports)
- Implement Cmd/Ctrl+K command palette for quick navigation
- Add hover states to reveal chart details
- Use URL state for filters (shareable dashboard views)
- Support browser back/forward for navigation
- Full keyboard navigation (arrow keys for charts, Tab for navigation)
- Resizable panels for custom layouts
- Context menus (right-click) for chart actions
- Follow rauno-web-interface-guidelines principles
```

## Questions to Answer Before Starting

1. **What is the primary input method?**
   - Mouse-focused?
   - Keyboard-focused?
   - Both equally?

2. **What needs to be shareable?**
   - Views? (use URL state)
   - Data? (export functionality)
   - Settings? (URL or localStorage)

3. **What browser features are important?**
   - Back/forward navigation?
   - Bookmarks?
   - Browser search?
   - Extensions compatibility?

4. **What are the performance requirements?**
   - Large datasets? (virtual scrolling)
   - Real-time updates? (WebSocket, polling)
   - Heavy computations? (Web Workers)

5. **What accessibility level is needed?**
   - WCAG AA minimum
   - Screen reader support?
   - Keyboard-only users?

## Related Resources

- [Component Creation Prompt](./component-creation.md)
- [Feature Implementation Guide](./feature-implementation.md)
- [Quick Reference](../quick-reference.md)
- [Web UI Patterns](../web-ui-patterns.md)

