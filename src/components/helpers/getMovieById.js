import { movies } from "../data/Movies"

export const getMovieById = ( id = "" ) => {

        return movies.find( movie => movie.id === id)
}

