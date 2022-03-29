import React from "react";

export const MovieControls = ({ movie }) => {
  return (
    <div className="inner-card-controls">
      <>
        <button className="ctrl-btn">
          <i className="fa-fw far fa-eye"></i>
        </button>

        <button className="ctrl-btn">
          <i className="fa-fw far fa-times"></i>
        </button>
      </>
    </div>
  );
};
