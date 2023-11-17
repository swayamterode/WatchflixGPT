import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'
/**
 * Renders a container component that displays different lists of movies.
 * @returns {JSX.Element} The JSX element that represents the SecondaryContainer.
 */
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className=" -mt-64 pl-8 relative z-20">
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer