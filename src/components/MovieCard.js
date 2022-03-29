import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.Poster ? (
        <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
      ) : (
        <div className="filler-poster"></div>
      )}
    </div>
  );
};
