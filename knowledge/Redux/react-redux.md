## REACT REDUX
- React Redux is the official React UI bindings layer for Redux. 
- It lets your React components **read data from a Redux store**, and **dispatch actions to the store to update state**.

*NOTE:* 
 - **React Redux is the official Redux UI binding library for React**
 - If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.
 -  A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.

        React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.

- Component only extracts the specific pieces of data from the store state

 **STEP**:
  1. Create a Redux store
  2. Subscribe to updates
  3. Inside the subscription callback: 
  
    - Get the current store state
    - Extract the data needed by this piece of UI
    - Update the UI with the data 
  4. If necessary, render the UI with initial state
Respond to UI inputs by dispatching Redux actions

## Provider component
The `<Provider>` component makes the Redux `store` available to any **nested components** that need to access the Redux store.

The `Hooks` and `connect` APIs can then access the provided store instance via *React's Context mechanism*.

**Props**
- **store** (Redux Store) The single Redux `store` in your application.


