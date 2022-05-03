import { movies } from "../data/Movies"


export const getMovieByGenre = ( genre )=> {

    const validgenres = [ "accion", "terror"]

    if ( !validgenres.includes( genre ) ) {
        throw new Error( `${ genre } is not valid genre` );
    }

    return movies.filter( movie => movie.genre === genre);
}