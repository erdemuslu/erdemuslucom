import { createContext, useReducer } from "react";

const initialState = {
  theme: 'dark',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
