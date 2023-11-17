import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

/**
 * Custom hook to fetch popular movies from the API and dispatch them to the store.
 * @returns {void}
 */
const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopluarMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1&region=India',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getPopluarMovies()
    }, [])
}

export default usePopularMovies;