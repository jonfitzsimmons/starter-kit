# Web UI Patterns

Common web interface patterns with implementation guidance. These patterns are specific to web (desktop) interfaces.

## Navigation Patterns

### Command Palette (Cmd/Ctrl+K)

Universal search and command interface.

**When to use:**
- Complex applications with many actions
- Power users who prefer keyboard
- Quick navigation needs

**Implementation:**
```javascript
function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Filter commands based on query
  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return isOpen ? (
    <Modal>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type a command..."
        autoFocus
      />
      <CommandList commands={filteredCommands} />
    </Modal>
  ) : null;
}
```

**Examples:** Linear, Vercel, GitHub (new), Notion

---

### Breadcrumb Navigation

Shows hierarchical navigation path.

**When to use:**
- Deep navigation hierarchies
- File/folder structures
- Multi-level content

**Implementation:**
```javascript
function Breadcrumbs({ path }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {path.map((item, index) => (
          <li key={index}>
            {index < path.length - 1 ? (
              <a href={item.url}>{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {index < path.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

### Sidebar Navigation

Persistent navigation sidebar.

**When to use:**
- Multi-section applications
- Dashboard layouts
- Content management systems

**Key considerations:**
- Collapsible for more space
- Active state indication
- Keyboard navigation
- Responsive behavior

---

## Input Patterns

### Inline Editing

Edit content directly in place.

**When to use:**
- Quick edits
- Content management
- Data tables

**Implementation:**
```javascript
function InlineEdit({ value, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef();
  
  function handleDoubleClick() {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  }
  
  function handleSave() {
    onSave(editValue);
    setIsEditing(false);
  }
  
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(value);
      setIsEditing(false);
    }
  }
  
  return isEditing ? (
    <input
      ref={inputRef}
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <span onDoubleClick={handleDoubleClick}>{value}</span>
  );
}
```

---

### Autocomplete/Typeahead

Suggestions as user types.

**When to use:**
- Search inputs
- Tag inputs
- Command inputs

**Key considerations:**
- Debounce API calls
- Keyboard navigation (arrow keys)
- Highlight matches
- Show loading state

---

### Multi-select with Tags

Select multiple items with visual tags.

**When to use:**
- Filtering
- Tagging
- Multi-selection

**Implementation:**
```javascript
function TagInput({ options, value, onChange }) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(inputValue.toLowerCase()) &&
    !value.includes(opt.value)
  );
  
  function handleSelect(option) {
    onChange([...value, option.value]);
    setInputValue('');
    setIsOpen(false);
  }
  
  function handleRemove(tagValue) {
    onChange(value.filter(v => v !== tagValue));
  }
  
  return (
    <div>
      <div>
        {value.map(v => (
          <Tag key={v} onRemove={() => handleRemove(v)}>
            {options.find(o => o.value === v)?.label}
          </Tag>
        ))}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Add tag..."
        />
      </div>
      {isOpen && filteredOptions.length > 0 && (
        <Dropdown>
          {filteredOptions.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </div>
  );
}
```

---

## Data Display Patterns

### Data Tables

Sortable, filterable tables.

**Key features:**
- Column sorting
- Row selection
- Pagination
- Column resizing
- Sticky headers

**Implementation considerations:**
- Virtual scrolling for large datasets
- Keyboard navigation
- Accessible markup
- Responsive design

---

### Infinite Scroll

Load more content as user scrolls.

**When to use:**
- Feeds
- Long lists
- Social media content

**Implementation:**
```javascript
function InfiniteScroll({ loadMore, hasMore, children }) {
  const observerRef = useRef();
  const loadMoreRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasMore, loadMore]);
  
  return (
    <div>
      {children}
      {hasMore && <div ref={loadMoreRef}>Loading...</div>}
    </div>
  );
}
```

---

### Virtual Scrolling

Render only visible items for performance.

**When to use:**
- Very large lists (1000+ items)
- Performance-critical applications
- Data tables with many rows

**Libraries:** react-window, react-virtualized

---

## Feedback Patterns

### Toast Notifications

Temporary notifications that don't block interaction.

**When to use:**
- Success/error messages
- Action confirmations
- System updates

**Key considerations:**
- Auto-dismiss (3-5 seconds)
- Manual dismiss
- Stack multiple toasts
- Accessible announcements

---

### Loading States

Indicate async operations.

**Types:**
- Skeleton screens (content loading)
- Spinners (quick operations)
- Progress bars (known duration)
- Optimistic updates (immediate feedback)

---

### Empty States

Guide users when there's no content.

**Components:**
- Clear message
- Helpful illustration
- Action to get started
- Contextual help

---

## Interaction Patterns

### Drag and Drop

Reorder, move, or organize items.

**Key considerations:**
- Visual feedback during drag
- Drop zones
- Keyboard alternatives
- Touch support

**Implementation:**
- Use HTML5 drag and drop API
- Or pointer events for custom implementation
- Provide keyboard alternatives

---

### Resizable Panels

Allow users to adjust layout.

**When to use:**
- Split views
- Sidebars
- Code editors

**Implementation:**
```javascript
function ResizablePanel({ children, minWidth = 200, maxWidth = 800 }) {
  const [width, setWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);
  
  function handleMouseDown(e) {
    setIsDragging(true);
    e.preventDefault();
  }
  
  useEffect(() => {
    if (!isDragging) return;
    
    function handleMouseMove(e) {
      const newWidth = e.clientX;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    }
    
    function handleMouseUp() {
      setIsDragging(false);
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minWidth, maxWidth]);
  
  return (
    <div style={{ width, position: 'relative' }}>
      {children}
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 4,
          cursor: 'col-resize',
          backgroundColor: isDragging ? '#0066cc' : 'transparent',
        }}
      />
    </div>
  );
}
```

---

### Context Menus

Right-click menus for actions.

**When to use:**
- Secondary actions
- Bulk operations
- Power user features

**Implementation:**
```javascript
function ContextMenu({ trigger, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef();
  
  function handleContextMenu(e) {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  }
  
  useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);
  
  return (
    <div onContextMenu={handleContextMenu}>
      {trigger}
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
          }}
        >
          {items.map(item => (
            <MenuItem key={item.id} onClick={item.onClick}>
              {item.label}
            </MenuItem>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## Layout Patterns

### Split View

Side-by-side content views.

**When to use:**
- Master-detail views
- Code editors
- Comparison views

---

### Sticky Headers

Headers that stay visible while scrolling.

**When to use:**
- Long content
- Data tables
- Navigation bars

---

### Collapsible Sections

Expandable/collapsible content areas.

**When to use:**
- Settings panels
- FAQ sections
- Nested navigation

---

## Related Resources

- [Quick Reference](./quick-reference.md)
- [Principles](./principles/)
- [Project Kickoff Prompts](./prompts/)

