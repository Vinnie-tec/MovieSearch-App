import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=914b50ae";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, SetSearch] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&S=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Christian");
  }, []);

  return (
    <Fragment>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
          />
          <img src={searchIcon} alt="" onClick={() => searchMovies(search)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
