import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchMovies} from "./moviesThunks";
import {selectMovieIsSearching, selectMovieItems} from "./moviesSlice";
import Spinner from "../Spinner/Spinner";
import {useNavigate} from "react-router-dom";

const MovieForm = () => {
    const [search, setSearch] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSearching = useAppSelector(selectMovieIsSearching);
    const movies = useAppSelector(selectMovieItems);

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearch(value);

        if (value.length >= 2) {
            dispatch(fetchMovies(value));
        }
    };

    const onClick = (id: string) => {
        navigate(`/shows/${id}`);
    };


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
                {search.length >= 2 && isSearching ? (
                    <Spinner/>
                ) : (
                    <div className="position-absolute mt-5">
                        <ul>

                            {movies.map((movie) => (
                                <li
                                    style={{cursor: "pointer"}}
                                    onClick={() => onClick(movie.show.id)}
                                    key={movie.show.id}>
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
