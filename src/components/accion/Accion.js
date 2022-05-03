import React from 'react';
import MovieList from '../movie/MovieList';
import "./Accion.css";

const Accion = () => {
  return (
    <div className='container-accion'>
        <h1 className='title'>Películas de Acción</h1>
        <hr />
        <MovieList genre={"accion"}/>
    </div>
  )
}

export default Accion;