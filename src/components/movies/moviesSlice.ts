import {Movie, SearchedMovie} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMovies, fetchOneMovie} from "./moviesThunks";

interface MoviesState {
    items: SearchedMovie[],
    oneMovie: Movie | null,
    fetchLoading: boolean,
    isSearching: boolean,
}

const initialState: MoviesState = {
    items: [],
    oneMovie: null,
    fetchLoading: false,
    isSearching: false,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.isSearching = true;
        }).addCase(fetchMovies.fulfilled, (state, {payload: movies}) => {
            state.isSearching = false;
            state.items = movies;
        }).addCase(fetchMovies.rejected, (state) => {
            state.isSearching = false;
        });

        builder.addCase(fetchOneMovie.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchOneMovie.fulfilled, (state, {payload: oneMovie}) => {
            state.oneMovie = oneMovie;
            state.fetchLoading = false;
        }).addCase(fetchOneMovie.rejected, (state) => {
            state.fetchLoading = false;
        });
    },
    selectors: {
        selectMovieIsSearching: (state) => state.isSearching,
        selectMovieIsFetching: (state) => state.fetchLoading,
        selectMovieItems: (state) => state.items,
        selectOneMovie: (state) => state.oneMovie,
    }
});

export const movieReducer = movieSlice.reducer;
export const {
    selectMovieIsSearching,
    selectMovieIsFetching,
    selectMovieItems,
    selectOneMovie,
} = movieSlice.selectors;