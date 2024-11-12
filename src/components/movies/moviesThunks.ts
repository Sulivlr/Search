import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiMovies, Movie} from "../../types";

export const fetchMovies = createAsyncThunk<Movie[], string>(
    'movies/fetchMovies',
    async (id) => {
        const {data: movies} = await axiosApi.get<ApiMovies | null>(`q=${id}`);
        if (movies === null) {
            return [];
        }

        return Object.keys(movies).map((id) => ({
            id,
            ...movies[id],
        }));
    },
);