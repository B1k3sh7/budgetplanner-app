import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 10000,
  expenses: [
    { id: 1, name: "Shopping", cost: 500 },
    { id: 2, name: "Holiday", cost: 700 },
    { id: 3, name: "Library", cost: 300 },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
