import MovieCard from "./MovieCard";
import MovieTrailer from "./MoviesData/MovieTrailer";
import MovieDetails from "./MoviesData/MovieDetails";
import useMovieList from "../hooks/useMovieList";
import SelectedMovie from "./SelectedMovie";
import Slider from "react-slick";
import { AiFillCloseCircle } from "react-icons/ai";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const {
    isBlackScreenVisible,
    clickedMovieId,
    handleMovieID,
    handleBlackScreenClick,
  } = useMovieList();
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 7, // Number of slides to show
    slidesToScroll: 7, // Number of slides to scroll
    initialSlide: 0,
  };
  return (
    <div className="px-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-md md:text-xl font-bold md:py-3 md:px-3 text-white pl-2 mt-3">
          {title}
        </h1>
      </div>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <div key={movie.id} className="flex my-2 md:my-5">
            <div
              onClick={() => handleMovieID(movie.id)}
              className="cursor-pointer"
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          </div>
        ))}
      </Slider>
      {/* Conditional rendering for the black screen */}
      {isBlackScreenVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50">
          <div
            className="absolute top-4 right-4 cursor-pointer text-whit z-10 text-3xl md:text-4xl text-slate-300"
            onClick={handleBlackScreenClick}
          >
            <AiFillCloseCircle />
          </div>
          {clickedMovieId && <MovieTrailer movieId={clickedMovieId} />}
          {clickedMovieId && <MovieDetails movieId={clickedMovieId} />}
          <SelectedMovie />
        </div>
      )}
    </div>
  );
};

export default MovieList;
