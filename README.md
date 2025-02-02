# Next.js 15 Invalid Hook Call Error

This repository demonstrates a common error in Next.js 15 applications: 'Error: Invalid hook call. Hooks can only be called inside of the body of a function component'.  The error arises from improperly using React hooks within components that are not function components.

## Issue

The `pages/index.js` file attempts to use React hooks within a non-function component. This violates the rules of React hooks.

## Solution

The solution involves refactoring the component into a functional component, ensuring all hook calls occur within the function body.
