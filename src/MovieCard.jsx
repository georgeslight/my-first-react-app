import React from 'react';

// Instead of:
// const MovieCard = (props) => {
// to not having to repeat the entire time with {props.(...)}
// we can destructure the props by using object destructuring
// For that, simply put a pair of curly braces followed by
// something we passed inside of those props { movie }
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https//via.placeholder.com/400'
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
