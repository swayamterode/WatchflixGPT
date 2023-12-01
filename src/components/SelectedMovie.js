import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { GoDotFill } from 'react-icons/go'
// Background image of Banner 
// Poster
// Title
// Overview
// Play Trailer Button

const SelectedMovie = () => {
  const movie = useSelector((store) => store.movies?.selectedMovieDetails);
  const trailer = useSelector((store) => store.movies?.displayMovieTrailer);
  const key = trailer?.key;
  console.log(key);
  console.log(movie)
  const trailerVideo = (key) => {
    window.open(`https://www.youtube.com/watch?v=${key}`, '_blank')
  }

  return (
    <>
      <div className='md:mt-[2%] md:m-16 hidden sm:flex absolute flex justify-center items-center'>
        <div
          className='bg-gradient-to-br from-black to-transparent rounded-3xl relative'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt='movie backdrop'
          className='bg-no-repeat rounded-3xl relative z-0'
        />
      </div>

      <div className='mt-[15%] m-16 relative container flex flex-col md:flex  md:flex-row justify-center items-center gap-10 mx-auto my-auto z-10'>
        <img className='w-44 md:w-64 rounded-3xl shadow-2xl transition-transform transform-gpu group hover:scale-110 duration-700 md:ml-20 ' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='movie poster' />
        <div className='flex flex-col'>
          <div className=' text-white mx-auto md:mx-0 text-2xl md:text-5xl font-bold '>
            {movie?.title} <span className='font-light'>({movie?.release_date?.slice(0, 4)})</span>
          </div>
          <div className='italic text-gray-300 text-md md:text-2xl mx-auto md:mx-0 mt-2 font-light'> {movie?.tagline}</div>
          <div className='flex flex-row justify-center md:justify-start mt-2 md:mx-0'>
            <div className='text-white text-md font-semibold '>
              {movie?.release_date}
            </div>
            <GoDotFill className='text-white text-sm my-auto ml-2 md' />
            <div className='text-white mx-2 font-semibold'>
              {movie?.genres?.map((genre) => genre.name).join(', ')}
            </div>
            <GoDotFill className='text-white text-sm my-auto mr-2' />

            <div className='text-white font-semibold'>
              {movie?.runtime} min
            </div>
          </div>

          <div className='cursor-pointer mt-2 w-15 h-7 md:w-36 md:h-12 rounded-md flex items-center justify-center font-extrabold text-sm md:text-xl text-black'>
            <FaPlay className='mr-2 w-2 md:w-4 md:text-xl text-white' />
            <span className='text-sm md:text-xl text-white' onClick={() => trailerVideo(key)}>Play Trailer</span>
          </div>
          <div className='text-xl md:text-2xl text-white font-semibold my-3 px-3 md:mx-0'>Overview</div>
          <div className=' text-white text:md md:text-xl mx-3 md:mx-0 md:pr-20 pr-0'>
            {movie?.overview}
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedMovie