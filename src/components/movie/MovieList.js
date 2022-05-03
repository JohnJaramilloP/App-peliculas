import React, { useMemo } from "react";
import { getMovieByGenre } from "../helpers/getMovieByGenre";
import MovieCard from "./MovieCard";
import "./MovieList.css"

const MovieList = ({ genre }) => {
  const movies = useMemo(() => getMovieByGenre(genre), [genre]);

  return (
    <div className="container-list animate__animated animate__backInLeft">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
