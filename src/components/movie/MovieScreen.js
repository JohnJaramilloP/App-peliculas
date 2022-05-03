import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getMovieById } from "../helpers/getMovieById";
import "./MovieScreen.css";

const movieImages = require.context("../assets", true);

const MovieScreen = () => {
  const { movieId } = useParams();

  const movie = useMemo(() => getMovieById(movieId), [movieId]);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  if (!movie) return <Navigate to="/" />;

  const { id, name, genre, director, protagonist, producer } =
    movie;

  const imagePath = movieImages(`./${ id }.jpg`);

  return (
    <div className="movie-container animate__animated animate__backInLeft">
      <div className="container-img">
        <img src={imagePath} alt={name} className="img-thumbnail" />
      </div>

      <div className="Movie-text">
        <h3>{name} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Director: </b>{director}</li>
          <hr />
          <li className="list-group-item"><b>Género: </b>{genre}</li>
          <hr />
          <li className="list-group-item"><b>Protagonista: </b>{protagonist}</li>
        </ul>
        <hr />
        <h5 className="mt-3">Producida por:</h5>
        <p>{producer}</p>

        <button 
        className="btn-movie btn-outline-info"
        onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default MovieScreen;
