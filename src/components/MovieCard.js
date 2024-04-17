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
    <div className="relative overflow-hidden group mx-1">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
    </div>
  );
};

export default MovieCard;
