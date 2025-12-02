# Desktop Gestures

## Overview

Desktop web interfaces support gestures through trackpads and touch-enabled devices. These gestures differ from mobile touch gestures and should be designed accordingly.

## Key Principles

### 1. Trackpad Gestures

Trackpads support:
- **Two-finger scroll**: Vertical/horizontal scrolling
- **Pinch zoom**: Zoom in/out
- **Swipe**: Navigate back/forward
- **Three-finger swipe**: App switching (system-level)

### 2. Touch on Desktop

Touch-enabled laptops/tablets:
- Support both touch and cursor
- May have different behaviors
- Should work with both input methods
- Consider hybrid interactions

### 3. Gesture vs Mouse

Gestures should:
- Complement mouse interactions
- Not replace mouse functionality
- Work alongside keyboard shortcuts
- Feel natural for desktop context

## Implementation Patterns

### Scroll Gestures

```javascript
// Handle trackpad/mouse wheel scrolling
function useScrollGesture() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    let isScrolling = false;
    
    function handleWheel(e) {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          isScrolling = false;
        });
      }
      
      // Prevent default for custom scroll behavior
      // e.preventDefault();
    }
    
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  
  return scrollY;
}
```

### Pinch Zoom

```javascript
// Handle pinch zoom gesture
function usePinchZoom() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef();
  
  useEffect(() => {
    let initialDistance = 0;
    let initialScale = 1;
    
    function getDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
    
    function handleTouchStart(e) {
      if (e.touches.length === 2) {
        initialDistance = getDistance(e.touches);
        initialScale = scale;
      }
    }
    
    function handleTouchMove(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        const currentDistance = getDistance(e.touches);
        const newScale = initialScale * (currentDistance / initialDistance);
        setScale(Math.max(0.5, Math.min(3, newScale)));
      }
    }
    
    const container = containerRef.current;
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scale]);
  
  return { scale, containerRef };
}
```

### Swipe Navigation

```javascript
// Handle swipe gestures for navigation
function useSwipeNavigation(onSwipeLeft, onSwipeRight) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const minSwipeDistance = 50;
  
  function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }
  
  function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }
  
  function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onSwipeLeft();
    }
    if (isRightSwipe) {
      onSwipeRight();
    }
  }
  
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
```

### Momentum Scrolling

```css
/* Enable momentum scrolling on trackpads */
.scrollable {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS momentum */
  scroll-behavior: smooth; /* Smooth scrolling */
}

/* Custom scrollbar for webkit */
.scrollable::-webkit-scrollbar {
  width: 8px;
}
.scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scrollable::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
.scrollable::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

### Gesture Detection

```javascript
// Detect if device supports touch
function useTouchSupport() {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  return isTouch;
}

// Detect trackpad vs mouse
function useInputType() {
  const [inputType, setInputType] = useState('unknown');
  
  useEffect(() => {
    let lastWheelTime = 0;
    let wheelTimeout;
    
    function handleWheel(e) {
      // Trackpad often has smaller deltaY with more events
      // Mouse wheel has larger deltaY with fewer events
      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime;
      lastWheelTime = now;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (timeSinceLastWheel < 50 && Math.abs(e.deltaY) < 10) {
          setInputType('trackpad');
        } else {
          setInputType('mouse');
        }
      }, 100);
    }
    
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  
  return inputType;
}
```

## Best Practices

### ✅ Do

- Support trackpad scrolling
- Enable momentum scrolling
- Handle pinch zoom appropriately
- Support both touch and mouse
- Provide gesture alternatives (keyboard/mouse)
- Test on trackpad devices
- Respect system gestures

### ❌ Don't

- Override browser zoom (pinch)
- Block system gestures
- Require gestures for essential actions
- Ignore mouse users
- Make gestures too sensitive
- Conflict with browser gestures

## Web-Specific Considerations

### Browser Zoom vs App Zoom

Two types of zoom:
- **Browser zoom**: System-level, affects entire page
- **App zoom**: Application-level, affects specific content

Don't prevent browser zoom:
```javascript
// ❌ Bad: Prevents browser zoom
document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) {
    e.preventDefault(); // Blocks browser zoom
  }
});

// ✅ Good: Allow browser zoom, implement app zoom separately
function handlePinchZoom(e) {
  if (e.touches.length === 2) {
    // App-level zoom
    e.preventDefault();
    // Handle zoom
  }
  // Browser zoom still works with Cmd/Ctrl+scroll
}
```

### Trackpad vs Mouse Wheel

Different behaviors:
- **Trackpad**: Smooth, continuous scrolling
- **Mouse wheel**: Discrete, stepped scrolling

Handle both:
```javascript
function handleScroll(e) {
  // Trackpad: small deltaY, many events
  // Mouse: large deltaY, fewer events
  const isTrackpad = Math.abs(e.deltaY) < 10;
  
  if (isTrackpad) {
    // Smooth scrolling behavior
  } else {
    // Stepped scrolling behavior
  }
}
```

### System Gestures

Respect system-level gestures:
- **Three-finger swipe**: App switching (macOS)
- **Four-finger swipe**: Desktop switching
- **Pinch**: System zoom (some systems)

Don't override these - they're system-level.

## Examples

### 1. Figma: Trackpad Gestures

Figma supports:
- Two-finger pan
- Pinch zoom
- Smooth scrolling
- Works with mouse and trackpad

### 2. Google Maps: Pinch Zoom

Google Maps:
- Supports pinch zoom
- Doesn't block browser zoom
- Smooth zoom transitions
- Works on touch devices

### 3. CodePen: Momentum Scrolling

CodePen uses momentum scrolling:
- Smooth trackpad scrolling
- Custom scrollbars
- Preserves native feel

## Related Principles

- [Mouse & Cursor Interactions](./mouse-cursor-interactions.md)
- [Hover States & Affordances](./hover-affordances.md)
- [Browser Context Awareness](./browser-context.md)

