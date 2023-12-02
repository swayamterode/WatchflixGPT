import { IMG_CDN_URL } from "../utils/constants";

/**
 * A component that displays a movie poster.
 * @param {Object} props - The component props.
 * @param {string} props.posterPath - The path to the movie poster image.
 * @returns {JSX.Element|null} - The MovieCard component.
 */
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-24 md:w-60 flex pr-1 md:pr-0 px-0 md:px-4 mb-2 transition-transform transform-gpu group hover:scale-110 duration-300">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-xl w-full h-auto"
      />
    </div>
  );
};

export default MovieCard;
