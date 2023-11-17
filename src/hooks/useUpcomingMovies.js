import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/movieSlice';

/**
 * A custom React hook that fetches upcoming movies from the API and dispatches them to the Redux store.
 */
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));

    };

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;