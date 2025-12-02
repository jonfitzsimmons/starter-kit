# Multi-Window Patterns

## Overview

Web interfaces can exist in multiple windows, tabs, and contexts simultaneously. Design for users who may have your app open in multiple places.

## Key Principles

### 1. State Synchronization

When the same app is open in multiple tabs/windows:
- Keep state synchronized
- Handle conflicts gracefully
- Update in real-time when possible
- Indicate when state is stale

### 2. Context Independence

Each window/tab should be:
- Independently usable
- Able to have different views
- Not dependent on other windows
- Respectful of user's window management

### 3. Window Communication

Enable communication between windows:
- Share updates
- Coordinate actions
- Prevent conflicts
- Maintain consistency

## Implementation Patterns

### BroadcastChannel API

```javascript
// Communicate between tabs/windows
const channel = new BroadcastChannel('app-sync');

// Send updates
function updateData(newData) {
  // Update local state
  setData(newData);
  
  // Broadcast to other tabs
  channel.postMessage({
    type: 'data-updated',
    data: newData,
    timestamp: Date.now(),
  });
}

// Listen for updates
useEffect(() => {
  channel.onmessage = (e) => {
    if (e.data.type === 'data-updated') {
      // Update local state
      setData(e.data.data);
      // Show notification if tab is not focused
      if (!document.hasFocus()) {
        showNotification('Data updated in another tab');
      }
    }
  };
  
  return () => {
    channel.close();
  };
}, []);
```

### LocalStorage Events

```javascript
// Sync via localStorage (simpler, but less reliable)
function useLocalStorageSync(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  // Update localStorage and trigger storage event
  function updateValue(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }
  
  // Listen for changes from other tabs
  useEffect(() => {
    function handleStorageChange(e) {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue));
      }
    }
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);
  
  return [value, updateValue];
}
```

### Focus Detection

```javascript
// Detect when tab/window gains/loses focus
function useWindowFocus() {
  const [isFocused, setIsFocused] = useState(document.hasFocus());
  
  useEffect(() => {
    function handleFocus() {
      setIsFocused(true);
      // Refresh data when window regains focus
      refreshData();
    }
    
    function handleBlur() {
      setIsFocused(false);
    }
    
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);
  
  return isFocused;
}
```

### Stale Data Indicators

```javascript
// Show when data might be stale
function useStaleDataIndicator() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const isFocused = useWindowFocus();
  
  useEffect(() => {
    if (isFocused) {
      // Refresh when window regains focus
      refreshData().then(() => {
        setLastUpdate(Date.now());
      });
    }
  }, [isFocused]);
  
  const timeSinceUpdate = Date.now() - lastUpdate;
  const isStale = timeSinceUpdate > 60000; // 1 minute
  
  return { isStale, timeSinceUpdate };
}
```

### Conflict Resolution

```javascript
// Handle conflicts when multiple tabs edit same data
function useConflictResolution() {
  const [localVersion, setLocalVersion] = useState(0);
  const [serverVersion, setServerVersion] = useState(0);
  
  function handleEdit(newData) {
    if (serverVersion > localVersion) {
      // Conflict: server has newer version
      showConflictDialog({
        local: newData,
        server: serverData,
        onResolve: (resolved) => {
          setLocalVersion(serverVersion + 1);
          saveData(resolved);
        },
      });
    } else {
      // No conflict
      setLocalVersion(localVersion + 1);
      saveData(newData);
    }
  }
  
  return { handleEdit };
}
```

## Best Practices

### ✅ Do

- Sync state between tabs when appropriate
- Show indicators when data is stale
- Handle conflicts gracefully
- Refresh data when window regains focus
- Use BroadcastChannel for reliable sync
- Allow independent window states
- Notify users of updates in other tabs

### ❌ Don't

- Assume single window context
- Ignore updates from other tabs
- Create conflicts without resolution
- Block functionality in multiple tabs
- Require all tabs to be in sync
- Forget to clean up listeners

## Web-Specific Considerations

### When to Sync

Sync state for:
- **User preferences**: Settings, theme, language
- **Shared data**: Documents, projects, teams
- **Notifications**: Unread counts, alerts
- **Authentication**: Login/logout state

Don't sync:
- **UI state**: Scroll position, open modals, selected items
- **Temporary data**: Form inputs, search queries
- **View-specific state**: Active filters, sort order (unless URL-based)

### Performance Considerations

Multi-tab sync can impact performance:
- Limit sync frequency
- Debounce rapid updates
- Only sync changed data
- Use efficient data structures

```javascript
// Debounce rapid updates
const debouncedSync = useMemo(
  () => debounce((data) => {
    channel.postMessage({ type: 'update', data });
  }, 500),
  []
);
```

### Browser Limitations

Some browsers limit:
- **BroadcastChannel**: Not in all browsers (use polyfill)
- **localStorage events**: Only fire in other tabs (not same tab)
- **Storage quota**: Limited storage space
- **Background tabs**: Throttled performance

## Examples

### 1. Google Docs: Real-time Sync

Google Docs syncs in real-time:
- Changes appear in all tabs
- Cursor positions shown
- Conflict resolution
- Offline support

### 2. Linear: Notification Sync

Linear syncs notifications:
- Unread counts update
- New notifications appear
- Mark as read syncs
- Works across tabs

### 3. GitHub: Independent Tabs

GitHub allows independent tabs:
- Different repositories
- Different views
- Independent navigation
- No forced sync

## Related Principles

- [Browser Context Awareness](./browser-context.md)
- [Keyboard Navigation & Shortcuts](./keyboard-navigation.md)

