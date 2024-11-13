import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchMovies } from "./moviesThunks";
import { selectMovieItems } from "./moviesSlice";

const MovieForm = () => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectMovieItems);

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearch(value);

        if (value.length > 2) {
            dispatch(fetchMovies(value));
        }
    };

    useEffect(() => {
        if (search.length >= 2) {
            dispatch(fetchMovies(search));
        }
    }, [search, dispatch]);

    return (
        <div className="container mt-3">
            <form className="input-group">
                <input
                    className="form-control"
                    type="text"
                    value={search}
                    name="name"
                    onChange={onFieldChange}
                    placeholder="Search for a movie..."
                />
                {search.length >= 2 && (
                    <div className="position-absolute mt-5">
                        <ul>
                            {movies.map((movie) => (
                                <li key={movie.id}>
                                    <h5>{movie.show.name}</h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MovieForm;
