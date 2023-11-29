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
      <div className='mt-[2%] m-16 absolute flex justify-center items-center'>
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
      <div className='mt-[15%] m-16 relative container flex flex-row justify-center items-center gap-10 mx-auto my-auto z-10'>
        <img className='w-80 rounded-3xl shadow-2xl transition-transform transform-gpu group hover:scale-110 duration-700 ' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='movie poster' />
        <div className='flex flex-col'>
          <div className=' text-white text-5xl font-bold'>
            {movie?.title} <span className='font-light'>({movie?.release_date?.slice(0, 4)})</span>
          </div>
          <div className='flex flex-row mt-2 ml-2'>
            <div className='text-white  font-semibold'>
              {movie?.release_date}
            </div>
            <GoDotFill className='text-white text-sm my-auto ml-2' />
            <div className='text-white mx-2 font-semibold'>
              {movie?.genres?.map((genre) => genre.name).join(', ')}
            </div>
            <GoDotFill className='text-white text-sm my-auto mr-2' />

            <div className='text-white font-semibold'>
              {movie?.runtime} min
            </div>
          </div>

          <div className='cursor-pointer mt-2 w-5 h-7 md:w-36 md:h-12 rounded-md flex items-center justify-center font-extrabold text-sm md:text-xl text-black'>
            <FaPlay className='mr-2 w-2 md:w-4 md:text-xl text-white' />
            <span className='text-sm md:text-xl text-white' onClick={() => trailerVideo(key)}>Play Trailer</span>
          </div>
          <div className='italic text-gray-100 text-2xl'> {movie?.tagline}</div>
          <div className='text-2xl text-white font-semibold my-3'>Overview</div>
          <div className=' text-white text-xl'>
            {movie?.overview}
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedMovie