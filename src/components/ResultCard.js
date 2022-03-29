import React from "react";

export const ResultCard = ({ movie }) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
    </div>
  );
};
