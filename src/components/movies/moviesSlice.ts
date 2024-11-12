import {ApiMovie, Movie} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

interface MoviesState {
    item: Movie[],
    fetchLoading: boolean,
    isSearching: boolean,
    selectMovie: ApiMovie | null
}

const initialState: MoviesState = {
    item: [],
    fetchLoading: false,
    isSearching: false,
    selectMovie: null,
};

const movieSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers: () => {}
});

export const movieReducer = movieSlice.reducer;