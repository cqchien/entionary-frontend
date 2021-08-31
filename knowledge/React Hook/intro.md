# React Hooks

Before Hooks, how to write with React?

**Hook is a function that let you use React sate and lifecycle in functional component**

- **Class components (Stateful components)**: are components written in class, they are provided with a lot of features such as State, Lifecycle, refs, ...
- **Functional components (Stateless components)**: are components written as a function of JS, only receiving data through props and rendering it. They do not have State, Lifecycle and also do not support refs.

React Hooks was created with the task of helping us **write a functional component with all the features like a class component** through hooks.

**So, Why you should use Hooks**
- Code component is much more concise and easy to understand than using class
- Full-feature as class component
- Enjoy the benefits of functional components such as the ease of testing a function (taking input and returning results).
- Getting rid of the "this" keyword is often confusing when using classes.
- No need to rewrite old component classes. New components should be written with hooks.
- React Hooks are only used in functional components.
- Easily customize hooks as you like for each different business logic.

## 1. Effect Hook
**Side Effect:** *data fetching, subscriptions, or manually changing the DOM from React components*

*The Effect Hook,* useEffect, adds the ability to perform side effects from a function component. 
- It serves the same purpose as **componentDidMount, componentDidUpdate, and componentWillUnmount** in React classes, but unified into a single API
- Effects are declared inside the component so they have access to its props and state.
- By default, React runs the effects after every render — including the first render.

**Rules of Hooks**
- Only call Hooks at the top level
- Only call Hooks from React function components.