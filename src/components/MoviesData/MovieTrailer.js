import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addDisplayMovieTrailer } from "../../utils/movieSlice";
import { useEffect } from "react";

const MovieTrailer = ({ movieId }) => {
    const dispatch = useDispatch();
    console.log("MovieTrailer rendering for Movie ID:", movieId);

    const getMovieVideos = async () => {
        try {
            if (!movieId) {
                console.error("Movie ID is undefined.");
                return;
            }
            const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
            const json = await data.json();

            const filterData = json.results.filter((video) => video.type === "Trailer")
            const trailer = filterData[0];
            dispatch(addDisplayMovieTrailer(trailer));
        } catch (error) {
            // Handle fetch or other errors
            console.error("Error fetching movie videos:", error);
        }
    };
    useEffect(() => {
        getMovieVideos();
    }, []);

    return null; // You can customize the return based on your needs
};

export default MovieTrailer;
