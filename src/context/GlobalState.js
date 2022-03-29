import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// create initial state
const initialState = {
  wishlist: []
};

// create context
export const GlobalContext = createContext(initialState);

// create provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // create actions
  const addMovieToWishlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WISHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ wishlist: state.wishlist, addMovieToWishlist }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
