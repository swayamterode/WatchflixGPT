import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        displayMovieTrailer: null,
        selectedMovieId: null,
        selectedMovieDetails: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addDisplayMovieTrailer: (state, action) => {
            state.displayMovieTrailer = action.payload;
        },
        setSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        },
        setSelectedMovieDetails: (state, action) => {
            state.selectedMovieDetails = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addDisplayMovieTrailer, setSelectedMovieId, setSelectedMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;