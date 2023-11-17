import { useEffect } from 'react'
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

/**
 * Custom hook to fetch and add trailer video for a movie to the Redux store.
 * @param {number} movieId - The ID of the movie for which to fetch the trailer video.
 */
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS) //dynamic trailer ✅
        const json = await data.json(); //log data if needed

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, [])
}

export default useMovieTrailer