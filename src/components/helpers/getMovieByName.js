import { movies } from "../data/Movies";

export const getMovieByName = (name = "") => {

    if (name.length === 0) {
        return [];
    }

  name = name.toLowerCase();
  return movies.filter((movie) => movie.name.toLowerCase().includes(name));
};
