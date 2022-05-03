import { Link } from "react-router-dom";
import "./MovieCard.css"

const movieImages = require.context("../assets", true);

export const MovieCard = ({
  id,
  name,
  genre,
  director,
  protagonist,
  producer,
}) => {
  const imagePath = movieImages(`./${ id }.jpg`);;

  return (
    <div className="container-card animate__animated animate__backInLeft">
      <div className="card">
        <div className="row">
          <div className="img">
            <img src={imagePath} className="card-img" alt={name} />
          </div>
          <div className="container-text">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <hr />
              <p className="card-text">Director: {director}</p>
              <hr />
              <p className="card-text">
                <small className="text-muted">{protagonist}</small>
              </p>
              <hr />
              <Link to={`/movie/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
