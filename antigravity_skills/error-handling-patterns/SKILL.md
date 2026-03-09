---
name: error-handling-patterns
description: Provides best practices and patterns for handling errors robustness. Use this skill when writing JavaScript/TypeScript code, API integrations, or state management logic for the Relledomi platform to ensure failures are handled gracefully without breaking the 3D WebGL experience.
---

# Error Handling Patterns

Build resilient applications with robust error handling strategies that gracefully handle failures and provide excellent debugging experiences in the Next.js and Three.js environment.

## When to use this skill
- Handling API requests or data fetching failures.
- Designing error boundaries in React to prevent the 3D Canvas from crashing.
- Working with `Result` types for safely executing logic.

## Core Concepts

### 1. Error Handling Philosophies
**Exceptions vs Result Types:**
- **Exceptions**: Traditional try-catch, disrupts control flow. Use for unexpected errors.
- **Result Types**: Explicit success/failure, functional approach. Use for expected errors, validation failures.

## Implementation Guidelines (TypeScript / React)

### Custom Error Classes
Use explicit error classes to trace exactly where and why the Relledomi platform failed:
```typescript
class ApplicationError extends Error {
  constructor(message: string, public code: string, public statusCode: number = 500) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class WebGLError extends ApplicationError {
  constructor(message: string) {
    super(message, "WEBGL_RENDER_ERROR", 500);
  }
}
```

### Async Error Handling
Wrap all fetch calls or async transitions in try/catch or use a Result pattern so the immersive 3D experience does not hard-crash the user's browser.

### 3D Boundaries
For the Relledomi `<VoxelWorld />` or `<Canvas />` component, always ensure you have a standard React Error Boundary surrounding the canvas to catch rendering errors and show an HTML fallback UI gracefully.

## Universal Patterns
- **Graceful Degradation:** If 3D assets fail to load or WebGL crashes, fallback seamlessly to standard HTML 2D components.
- **Error Aggregation:** Log errors correctly before re-throwing so the user flow can be audited.
