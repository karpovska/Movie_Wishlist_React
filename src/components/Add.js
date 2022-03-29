import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${event.target.value}`
    )
      .then((result) => result.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setResults(data);
        } else {
          setResults({});
        }
      });
  };
  //http://www.omdbapi.com/?apikey=[yourkey]&
  //http://www.omdbapi.com/?t=Iron+man
  //const { Title } = results;

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

          {results !== undefined && (
            <ul className="results">
              <li key={results.imdbID}>
                <ResultCard movie={results} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
