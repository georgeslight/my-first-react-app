import React from 'react';

// Instead of:
// const MovieCard = (props) => {
// to not having to repeat the entire time with {props.(...)}
// we can destructure the props by using object destructuring
// For that, simply put a pair of curly braces followed by
// something we passed inside of those props { movie1 }
const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img
          src={
            movie1.Poster !== 'N/A'
              ? movie1.Poster
              : 'https//via.placeholder.com/400'
          }
          alt={movie1.Title}
        />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
