import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

/**
 * A custom React hook that fetches the top rated movies from the API and dispatches them to the Redux store.
 */
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1&region=India', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
    }, [])
}

export default useTopRatedMovies;