import React from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
import { TbBlockquote } from "react-icons/tb";
import { IoCloseCircle } from "react-icons/io5";

const SelectedMovie = () => {
  const movie = useSelector((store) => store.movies?.selectedMovieDetails);
  const trailer = useSelector((store) => store.movies?.displayMovieTrailer);
  const [showTrailer, setShowTrailer] = useState(false);

  const key = trailer?.key;
  const movieName = movie?.title;

  const closeTrailer = () => {
    setShowTrailer(false);
  };
  const trailerVideo = () => {
    setShowTrailer(true);
  };

  return (
    <div className="h-screen flex items-center max-h-screen z-50">
      <div className=" sm:flex absolute flex justify-center items-center">
        <div
          className="bg-gradient-to-br from-black to-transparent relative"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="bg-no-repeat z-0 w-screen h-screen object-cover"
        />
      </div>

      <div className="relative container flex flex-col md:flex xl:flex-row mx-auto my-auto justify-center items-center gap-10 z-10">
        <img
          className="w-52 md:w-72 xl:w-96 rounded-3xl shadow-2xl transition-transform transform-gpu group hover:scale-110 duration-700"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="flex flex-col gap-3 items-center xl:items-start">
          <div className=" text-white mx-auto md:mx-0 text-2xl md:text-3xl xl:text-6xl font-bold">
            {movie?.title}{" "}
            <span className="font-light">
              ({movie?.release_date?.slice(0, 4)})
            </span>
          </div>

          <div className="flex flex-row justify-center md:justify-start md:mx-0 text-sm">
            <div className="text-white text-md font-semibold">
              {movie?.release_date}
            </div>
            <GoDotFill className="text-white text-sm my-auto" />
            <div className="text-white font-semibold">
              {movie?.genres
                ?.slice(0, 2)
                .map((genre) => genre.name)
                .join(", ")}
            </div>
            <GoDotFill className="text-white text-sm my-auto " />

            <div className="text-white font-semibold">{movie?.runtime} min</div>
          </div>

          <div
            className="cursor-pointer w-15 h-7 sm:w-36 sm:h-12 border rounded-md flex items-center justify-center font-bold bg-[#3c3c3c7d] border-[#3c3c3c]"
            onClick={() => trailerVideo(key)}
          >
            <FaPlay className="mr-2 w-2 md:w-3 text-white" />
            <span className="text-sm md:text-xl text-white"></span>
            <span className="text-sm md:text-xl text-white">Play Trailer</span>
          </div>
          {showTrailer && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black" />
              <div className="relative z-50">
                <button
                  className="absolute top-16 right-16 text-white"
                  onClick={closeTrailer}
                >
                  <IoCloseCircle className="text-4xl z-[200px]" />
                </button>
                <iframe
                  className="w-screen h-screen"
                  src={
                    "https://www.youtube-nocookie.com/embed/" +
                    key +
                    "?autoplay=1&mute=0&controls=0&showinfo=0&modestbranding=1&loop=1&vq=hd720"
                  }
                  title={movieName}
                  allow="accelerometer; autoplay;"
                />
              </div>
            </div>
          )}
          <div className="flex flex-row items-center gap-3">
            <TbBlockquote className="text-white font-bold  text-sm md:text-lg" />
            <div className="italic text-gray-300 text-md md:text-xl md:mx-0 font-light">
              {movie?.tagline}
            </div>
          </div>

          <div className="flex flex-row items-start w-3/4 gap-3">
            <div className="flex items-center justify-start text-xl text-white font-semibold my-2 px-3 sm:px-0">
              <FaInfoCircle className=" text-white text-sm md:text-lg" />
            </div>
            <div className="text-white 2xl:text-2xl font-light">
              {movie?.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
