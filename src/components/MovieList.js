import MovieCard from './MovieCard';

/**
 * Renders a list of movies with their poster images.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the movie list.
 * @param {Array<Object>} props.movies - An array of movie objects.
 * @returns {JSX.Element} - The MovieList component.
 */
const MovieList = ({ title, movies }) => {
  return (
    <div className='px-3.5 md:px-10'>
      <h1 className='text-md md:text-xl font-bold py-3 px-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex cursor-pointer space-x-3 mt-5'>
          {movies?.map((movie) => (
            <div key={movie.id}>
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
