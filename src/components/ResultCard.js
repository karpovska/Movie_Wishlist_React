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

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">{movie.Year ? movie.Year : "-"}</h4>
        </div>

        <div className="constrols">
          <button className="btn">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
