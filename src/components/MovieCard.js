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
    <div className="w-36 md:w-48 pr-6 " >
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}  className="rounded-lg"/>
    </div>
  );
};
export default MovieCard;