import React, { useState } from "react";

export const Add = () => {
  const [query, setQuery] = useState("");
  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${event.target.value}`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };
  //http://www.omdbapi.com/?apikey=[yourkey]&
  //http://www.omdbapi.com/?t=Iron+man
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
