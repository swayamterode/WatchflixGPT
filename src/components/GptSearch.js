import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

/**
 * Renders the GptSearch component.
 * @returns {JSX.Element} GptSearch component UI.
 */
const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img
          className="object-cover w-screen min-h-screen bg-cover bg-center bg-no-repeat"
          src={BG_URL}
          alt="bgimage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  )
}

export default GptSearch;