import Appbar from "./components/AppBar/Appbar";
import MovieForm from "./components/movies/MovieForm";

const App = () => {

    return (
        <>
            <header>
                <Appbar/>
            </header>
            <main>
                <MovieForm/>
            </main>
        </>
    );
};

export default App;
