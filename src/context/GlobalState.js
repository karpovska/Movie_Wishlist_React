import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// create initial state
const initialState = {
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : []
};

// create context
export const GlobalContext = createContext(initialState);

// create provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  // create actions
  const addMovieToWishlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WISHLIST", payload: movie });
  };

  const removeMovieFromWishlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WISHLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        wishlist: state.wishlist,
        addMovieToWishlist,
        removeMovieFromWishlist
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
