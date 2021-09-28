import { createSlice } from "@reduxjs/toolkit";

// Accepts an initial state, an object full of reducer functions, and a "slice name"
// It uses createAction and createReducer -> use Immer to write "mutating" immutable updates:
const messageReducer = createSlice({
  // A name, used in action types
  name: "message",
  // The initial state for the reducer
  initialState: {
    open: false,
    message: "",
    type: "",
    loading: false,
  },
  // An object of "case reducers". Key names will be used to generate actions.
  // Passed to createReducer, so the reducers may safely "mutate" the state they are given.
  reducers: {
    // type: message/setMessage
    setMessage(state, { payload }) {
      return { ...state, open: true, ...payload };
    },

    setLoading(state, {payload}) {
      state.loading = payload;
    },

    closeMessage(state) {
      state.open = false;
    },
  },
});

// Return values
// {
//   name : string,
//   reducer : ReducerFunction,
//   actions : Record<string, ActionCreator>,
//   caseReducers: Record<string, CaseReducer>
// }
const { reducer, actions } = messageReducer;
export const { setMessage, closeMessage, setLoading } = actions;
export default reducer;
