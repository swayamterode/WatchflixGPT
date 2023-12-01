import MovieCard from './MovieCard';
import MovieTrailer from './MoviesData/MovieTrailer';
import MovieDetails from './MoviesData/MovieDetails';
import useMovieList from '../hooks/useMovieList';
import SelectedMovie from './SelectedMovie';
const MovieList = ({ title, movies }) => {
  const { isBlackScreenVisible, clickedMovieId, handleMovieID, handleBlackScreenClick, } = useMovieList();
  return (
    <div className='px-3.5 md:px-10'>
      <h1 className='text-md md:text-xl font-bold md:py-3 md:px-3 text-white pl-2 mt-3'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex cursor-pointer space-x-1 mt-3'>
          {movies?.map((movie) => (
            <div key={movie.id} onClick={() => handleMovieID(movie.id)}>
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
      {/* Conditional rendering for the black screen */}
      {isBlackScreenVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-black z-50'>
          <div className='absolute top-4 right-4 cursor-pointer text-white text-4xl md:text-6xl' onClick={handleBlackScreenClick}>
            <span>&times;</span>
          </div>
          {clickedMovieId && <MovieTrailer movieId={clickedMovieId} />}
          {clickedMovieId && <MovieDetails movieId={clickedMovieId} />}
          <SelectedMovie/>
        </div>
      )}
    </div>
  );
};

export default MovieList;
