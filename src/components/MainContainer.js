import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

/**
 * Renders the main container component.
 * @returns {JSX.Element} The main container component.
 */
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return; // early return

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
        <div className='pt-[20%] md:pt-0 bg-black'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer