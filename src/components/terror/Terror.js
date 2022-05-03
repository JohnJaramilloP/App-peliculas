import React from 'react';
import MovieList from '../movie/MovieList';
import "./Terror.css"

const Terror = () => {
  return (
    <div className='container-terror'>
        <h1>Películas de Terror</h1>
        <hr />
        <MovieList genre={"terror"}/>
    </div>
  )
}

export default Terror