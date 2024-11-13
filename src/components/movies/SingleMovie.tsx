import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectMovieIsFetching, selectOneMovie} from "./moviesSlice";
import {useEffect} from "react";
import {fetchOneMovie} from "./moviesThunks";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const SingleMovie = () => {
    const {id} = useParams() as { id: string };
    const movies = useAppSelector(selectOneMovie);
    const isMovieFetching = useAppSelector(selectMovieIsFetching);
    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            dispatch(fetchOneMovie(id));
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, id]);

    if (movies === undefined || movies === null) {
        return <Spinner/>;
    }

    return (
        isMovieFetching ? (<Spinner/>) : (
            <div className="container d-flex justify-content-between mt-3">
                <div>
                    <img src={movies.image.medium} alt="movie image"/>
                </div>
                <div className="ms-3">
                    <h3>{movies.name}</h3>
                    <p>{movies.summary.replace(/<\/?[^>]+(>|$)/g, '')}</p>
                </div>
            </div>
        )


    );
};

export default SingleMovie;