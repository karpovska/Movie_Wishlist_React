import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Wishlist = () => {
  const { wishlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Wishlist</h1>
        </div>
      </div>
    </div>
  );
};
