import { createContext, useReducer } from "react";
import * as actions from "./actions";

export const Store = createContext();

const initialState = {
  device: "sm",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DEVICE:
      return { ...state, device: action.payload };
    default:
      return state;
  }
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
