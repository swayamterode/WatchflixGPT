import React from 'react'
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
/**
 * A component that displays the title and overview of a video along with play and more info buttons.
 * @param {Object} props - The props object that contains the title and overview of the video.
 * @param {string} props.title - The title of the video.
 * @param {string} props.overview - The overview of the video.
 * @returns {JSX.Element} - A JSX element that displays the video title and overview along with play and more info buttons.
 */
/**
 * Renders the title and overview of a video along with play and more info buttons.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the video.
 * @param {string} props.overview - The overview of the video.
 * @returns {JSX.Element} - The JSX element for the VideoTitle component.
 */
const VideoTitle = ({ title, overview }) => { // passing props ✨
  return (
    <div className="w-screen aspect-video pt-[18%] px-6 md:px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-6xl font-bold mb-2'>{title}</h1>
      <p className='text-xl text-gray-400 w-1/3 mb-6'>{overview}</p>
      <div className='flex gap-3'>
        <button className='bg-white w-36 h-12 rounded-md flex items-center justify-center font-extrabold text-xl text-black hover:bg-opacity-80'>
          <FaPlay className='mr-2' />
          Play
        </button>
        <button className='w-48 h-12 rounded-md flex items-center justify-center text-xl font-extrabold bg-gray-500 bg-opacity-30'>
          <AiOutlineInfoCircle className='text-white text-3xl mr-2' />
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle