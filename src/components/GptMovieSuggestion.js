import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector(state => state.gpt);

  if (!movieNames || !movieResults) return null;
  return (
    <div className=" bg-black/50 backdrop-blur-lg transition transform m-4 p-2 md:m-28 rounded-3xl pb-16">
      {movieNames.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  )
}

export default GptMovieSuggestion