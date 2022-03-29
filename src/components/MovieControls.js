import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie }) => {
  const { removeMovieFromWishlist } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      <button
        className="ctrl-btn"
        onClick={() => removeMovieFromWishlist(movie.imdbID)}
      >
        x
      </button>
    </div>
  );
};
