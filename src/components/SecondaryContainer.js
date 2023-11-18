import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
/**
 * Renders a container component that displays different lists of movies.
 * @returns {JSX.Element} The JSX element that represents the SecondaryContainer.
 */
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className=" -mt-20 md:-mt-64  md:pt-5  relative pb-20">
          <MovieList title={lang[langKey].nowPlayingMovies} movies={movies.nowPlayingMovies} />
          <MovieList title={lang[langKey].popularMovies} movies={movies.popularMovies} />
          <MovieList title={lang[langKey].topRatedMovies} movies={movies.topRatedMovies} />
          <MovieList title={lang[langKey].upcomingMovies} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer