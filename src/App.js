import { React, useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=31d39c1b';

const movie1 = {
  Title: 'Amazing Spiderman Syndrome',
  Year: '2012',
  imdbID: 'tt2586634',
  Type: 'movie',
  Poster: 'N/A',
};

const App = () => {
  // This is going to give us access to the set movies setter function
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // This is going to allow us to populate the movies
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* Instead of showing only one single card like this:
          <MovieCard movie1={movie1} />
          we can open a dynamic block of code en then map over movies by
          saying:  */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
