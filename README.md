1. What is JSX, and why is it used?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript. It is used in React to describe what the UI should look like.

2. What is the difference between state and props?
State: State is internal to a component and can be changed by the component itself. It is used to manage dynamic data that affects the component's rendering.
Props: Props (short for properties) are read-only data passed from a parent component to a child component. A component cannot modify the props it receives; it can only use them to render or pass them further down.

3. What is the useState hook, and how does it work?
`useState` is a React Hook that allows functional components to have state. It returns an array with two elements: the current state value and a function to update that state. When the update function is called, React re-renders the component with the new state value.

4. How can you share state between components in React?
State can be shared between components by:
Lifting State Up: Moving the state to the closest common ancestor of the components that need it and passing it down via props.
Context API: Providing a way to share values between components without having to explicitly pass props through every level of the tree.
State Management Libraries: Using libraries like Redux or Zustand for complex global state.

5. How is event handling done in React?
Event handling in React is similar to handling events on DOM elements, but with some syntax differences:
- React events are named using camelCase
- You pass a function as the event handler rather than a string.
