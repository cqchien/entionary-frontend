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

## Rules of Hooks
- Only call Hooks at the top level
- Only call Hooks from React function components.

## 1. State Hook - useState()
`const [count, setCount] = useState(0);`

`[]` in useState() is **array destructuring** 
  - unlike this.setState in a class, updating a state variable always replaces it instead of merging it.
## 2. Effect Hook - useEffect()
**Side Effect:** *data fetching, subscriptions, or manually changing the DOM from React components*

*The Effect Hook,* useEffect, lets you perform side effects in function components: 
- It serves the same purpose as **componentDidMount, componentDidUpdate, and componentWillUnmount** in React classes, but unified into a single API
- Effects are declared inside the component so they have access to its props and state.
- By default, React runs the effects after every render — including the first render.

### Effects without cleanup
*Network requests, manual DOM mutations, and logging*  -> don't need cleanup
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
### Effects with cleanup
*subscription, fetching data, call api* -> clean up -> don’t a memory leak!

**your effect returns a function, React will run it when it is time to clean up:**

    useEffect(() => {
      // Specify how to clean up after this effect:
      return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });

- Cleanup when the component unmounts. 
- Hooks let us split the code based on what it is doing rather than a lifecycle method name.
- **Cleans up the previous effects before applying the next effects**

### Optimizing Performance by Skipping Effects
*Skip applying an effect if certain values haven’t changed between re-renders.*

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes 

- **M ake sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.**
- If you want to **run an effect and clean it up only once** (on mount and unmount), you can **pass an empty array** ([]) as a second argument