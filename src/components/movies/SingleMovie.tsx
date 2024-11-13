import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOneMovie} from "./moviesSlice";
import {useEffect} from "react";
import {fetchOneMovie} from "./moviesThunks";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const SingleMovie = () => {
    const {id} = useParams() as { id: string };
    const movies = useAppSelector(selectOneMovie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOneMovie(id));
    }, [dispatch, id]);

    if (movies === null) {
        return <Spinner/>;
    }

    return (

        <div className="container">
            <div className="d-flex justify-content-between">
                <img src={movies.show.image.medium} alt={movies.show.name}/>
            </div>
            <div>
                <h3>{movies.show.name}</h3>
                <p>{movies.show.summary}</p>
            </div>
        </div>
    );
};

export default SingleMovie;