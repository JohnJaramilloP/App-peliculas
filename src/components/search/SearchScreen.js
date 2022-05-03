import React, { useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { getMovieByName } from "../helpers/getMovieByName";
import MovieCard from "../movie/MovieCard";
import { useForm } from "../hooks/useForm";
import "./SearchScreen.css"

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const moviesFiltered = useMemo(() => getMovieByName(q), [q]) ;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container-search">
      <h1 className="title-search">Búsqueda</h1>
      <hr />

      <div className="search-text">
        <h4>Buscar películas:</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar un héroe"
            className="form"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          ></input>

          <button className="btn-search" type="submit">
            Buscar...
          </button>
        </form>
      </div>

      <div className="search-result">
        <h4>Resultados</h4>
        <hr />

        {q === "" ? (
          <div className="alert alert-info">Buscar un heroe</div>
        ) : (
          moviesFiltered.length === 0 && (
            <div className="alert alert-danger"> No hay resultados { q }</div>
          )
        )}

        {moviesFiltered.map((hero) => (
          <MovieCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
