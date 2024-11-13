import Appbar from "./components/AppBar/Appbar";
import MovieForm from "./components/movies/MovieForm";
import {Route, Routes} from "react-router-dom";
import SingleMovie from "./components/movies/SingleMovie";

const App = () => {

    return (
        <>
            <header>
                <Appbar/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<MovieForm/>}/>
                    <Route path="/shows/:id" element={<SingleMovie/>}/>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </main>
        </>
    );
};

export default App;
