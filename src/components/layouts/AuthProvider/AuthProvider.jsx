"use client";

import React, { useReducer, useContext } from "react";
import { reducer } from "@/context/reducer";
import appInitialState from "@/context/appState";

export const StateContext = React.createContext();
export const StateDispatch = React.createContext();

export const useStateProvider = () => useContext(StateContext);
export const useStateDispatcher = () => useContext(StateDispatch);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appInitialState);

  return (
    <StateContext.Provider value={state}>
      <StateDispatch.Provider value={dispatch}>
        {children}
      </StateDispatch.Provider>
    </StateContext.Provider>
  );
};

export default AuthProvider;
