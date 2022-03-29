import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWishlist, wishlist } = useContext(GlobalContext);

  let storedMovies = wishlist.find((object) => object.imdbID === movie.imdbID);

  const wishlistDisabled = storedMovies ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">{movie.Year ? movie.Year : "-"}</h4>
        </div>

        <div className="constrols">
          <button
            className="btn"
            disabled={wishlistDisabled}
            onClick={() => addMovieToWishlist(movie)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
