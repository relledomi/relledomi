---
name: superpowers
description: A meta-skill providing workflows for testing, systematic debugging, collaboration, and writing execution plans. Use this skill when you need structured methodologies to break down complex tasks, write robust tests, or debug deep issues on the Relledomi platform.
---

# Superpowers

The Superpowers skill acts as an index of methodologies you must follow for high-quality engineering. When doing deep work on the Relledomi codebase, use these concepts.

## When to use this skill
- You are stuck debugging a complex 3D or layout issue.
- You are setting up tests for new components.
- You are planning a large feature (like integrating a new Stop in the 3D scene).

## Core Superpower Workflows

### 1. Testing (`test-driven-development`)
- Always aim for RED-GREEN-REFACTOR cycles. Write tests for logic components before implementation.
- For 3D elements, prioritize testing the underlying state (Zustand stores, camera mappers) over raw React Three Fiber output.

### 2. Debugging (`systematic-debugging`)
- Use a 4-phase root cause process.
- **Trace the Root Cause:** Don't just patch the symptom (e.g., if a 3D model isn't rendering, check the loader, the path, the material, and the exported GLTF).
- **Verification before Completion:** Ensure the fix actually resolves the error in the environment.

### 3. Collaboration & Planning
- **Writing Plans:** For large features, draft detailed implementation plans before writing code.
- **Executing Plans:** Batch execution with checkpoints.
- **Subagent Workflow:** Break down massive tasks (like building a full 3D scene) into smaller, verifiable chunks.

### 4. Meta (`writing-skills`)
- Continuously refine how you approach tasks. If you notice a recurring pattern in the Relledomi app, propose turning it into a new skill (like `voxel-optimization` or `threejs-camera-routing`).
