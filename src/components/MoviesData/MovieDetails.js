import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setSelectedMovieDetails } from "../../utils/movieSlice";

const MovieDetails = ({ movieId }) => {
  const dispatch = useDispatch();
  console.log("MovieTrailer rendering for Movie ID:", movieId);
  const getMovieDetails = async () => {
    try {
      if (!movieId) {
        console.error("Movie ID is undefined.");
        return;
      }
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', API_OPTIONS);
      const json = await data.json();
      console.log("Movie Details:", json);
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