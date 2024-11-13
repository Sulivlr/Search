import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Movie, SearchedMovie} from "../../types";

export const fetchMovies = createAsyncThunk<SearchedMovie[], string>(
    'movies/fetchMovies',
    async (id) => {
        const {data: movies} = await axiosApi.get<SearchedMovie[] | null>(`/search/shows?q=${id}`);
        if (movies === null) {
            return [];
        }
        return movies;
    },
);


export const fetchOneMovie = createAsyncThunk<Movie, string>(
    'movies/fetchOneMovie',
    async (id, thunkAPI) => {
        const { data: movie} = await axiosApi.get<Movie | null>(
            `/shows/${id}`
        );

        if (movie === null) {
            return thunkAPI.rejectWithValue({message: 'Not Found'});
        }
        return movie;
    }
);
