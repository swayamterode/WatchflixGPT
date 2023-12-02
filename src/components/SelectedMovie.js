import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { GoDotFill } from 'react-icons/go'
import { FaInfoCircle } from 'react-icons/fa';
import { TbBlockquote } from "react-icons/tb";
const SelectedMovie = () => {
  const movie = useSelector((store) => store.movies?.selectedMovieDetails);
  const trailer = useSelector((store) => store.movies?.displayMovieTrailer);
  const key = trailer?.key;
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
        <img className='w-52 md:w-72 rounded-3xl shadow-2xl transition-transform transform-gpu group hover:scale-110 duration-700 md:ml-20 ' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='movie poster' />
        <div className='flex flex-col mr-80'>

          {/* Title */}
          <div className=' text-white mx-auto md:mx-0 text-2xl md:text-5xl font-bold -mt-2'>
            {movie?.title} <span className='font-light'>({movie?.release_date?.slice(0, 4)})</span>
          </div>

          {/* Genre */}
          <div className='flex flex-row justify-center md:justify-start mt-2 md:mx-0 text-sm m-2 '>
            <div className='text-white text-md font-semibold ml-1'>
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

          {/* Play trailer */}
          <div className='cursor-pointer mt-2 w-15 h-7 sm:w-36 sm:h-12 rounded-md flex items-center justify-center font-extrabold text-sm sm:text-xl text-black'>
            <FaPlay className='mr-2 w-2 md:w-3 text-white' />
            <span className='text-sm md:text-xl text-white'>
        </span>
            <span className='text-sm md:text-xl text-white' onClick={() => trailerVideo(key)}>Play Trailer</span>
          </div>

          {/* Tagline */}
          <div className="flex flex-row items-center">
            <TbBlockquote className='text-white font-bold mt-2 ml-4 md:ml-1 text-sm md:text-lg' />
            <div className='italic text-gray-300 text-md md:text-xl md:mx-0 mt-2 font-light px-2 '> {movie?.tagline}</div>
          </div>


          <div className='flex flex-row items-start mt-1'>
            <div className='flex items-center justify-start text-xl sm:text-2xl text-white font-semibold my-2 px-3 sm:px-0'>
              <FaInfoCircle className='ml-1 text-white text-sm md:text-lg' />
            </div>
            <div className='text-white mt-1 md:mx-2 mr-30'>
              {movie?.overview}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default SelectedMovie