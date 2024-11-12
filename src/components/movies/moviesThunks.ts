import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiMovie, ApiMovies, Movie} from "../../types";

export const fetchMovies = createAsyncThunk<Movie[], string>(
    'movies/fetchMovies',
    async (id) => {
        const {data: movies} = await axiosApi.get<ApiMovies | null>(`/q=${id}`);
        if (movies === null) {
            return [];
        }

        return Object.keys(movies).map((id) => ({
            id,
            ...movies[id],
        }));
    },
);

export const fetchOneMovie = createAsyncThunk<ApiMovie, string>(
    'movies/fetchOneMovie',
    async (id) => {
        const {data: movie} = await axiosApi.get<ApiMovie | null>(`/${id}`);
         if (movie === null) {
             throw new Error('Movie Not Found!');
         }
         return movie;
    }
);
