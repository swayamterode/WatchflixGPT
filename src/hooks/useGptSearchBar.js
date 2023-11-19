import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const useGptSearch = () => {

    const [loadingGrid, setloadingGrid] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        setloadingGrid(true);
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        try {
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: "user", content: gptQuery }],
                model: "gpt-3.5-turbo",
            });

            if (!gptResults.choices) {
                // Handle error
            }

            const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
            const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
        } catch (error) {
            navigate("/error");
        } finally {
            setloadingGrid(false);
        }
    };

    return { searchText, handleGptSearchClick, langKey, loadingGrid };
};

export default useGptSearch;
