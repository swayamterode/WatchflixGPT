import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

/**
 * Renders a video background component with a YouTube trailer video for a given movie ID.
 *
 * @param {Object} props - The component props.
 * @param {number} props.movieId - The ID of the movie to display the trailer for.
 * @returns {JSX.Element} - The VideoBackground component.
 */
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1"
        }
        title={trailerVideo?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
