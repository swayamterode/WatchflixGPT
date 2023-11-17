import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

/**
 * Custom hook to fetch popular movies from the API and dispatch them to the store.
 * @returns {void}
 */
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((state) => state.movies.popularMovies);
    const getPopluarMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1&region=India',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !popularMovies && getPopluarMovies()
    }, [])
}

export default usePopularMovies;