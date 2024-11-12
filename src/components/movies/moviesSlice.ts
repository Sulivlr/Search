import {ApiMovie, Movie} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

interface MovieState {
    item: Movie[],
    fetchLoading: boolean,
    isSearching: boolean,
    selectMovie: ApiMovie | null
}

const initialState: MovieState = {
    item: [],
    fetchLoading: false,
    isSearching: false,
    selectMovie: null,
};

const movieSlice = createSlice({
   name: "movie",
   initialState,
   reducers: {},
   extraReducers: () => {}
});

export const movieReducer = movieSlice.reducer;