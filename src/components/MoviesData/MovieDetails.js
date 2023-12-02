import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setSelectedMovieDetails } from "../../utils/movieSlice";

const MovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    try {
      if (!movieId) {
        return;
      }
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', API_OPTIONS);
      const json = await data.json();

      dispatch(setSelectedMovieDetails(json));

    } catch (error) {
      // Handle fetch or other errors
      console.error("Error fetching movie details:", error);
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, []);
}

export default MovieDetails