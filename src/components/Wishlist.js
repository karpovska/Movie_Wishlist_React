import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Wishlist = () => {
  const { wishlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Wishlist</h1>
        </div>

        {wishlist.length > 0 ? (
          <div className="movie-grid">
            {wishlist.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            There are no movies in your wishlist. You may add some
          </h2>
        )}
      </div>
    </div>
  );
};
