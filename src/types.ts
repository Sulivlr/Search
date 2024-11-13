export interface SearchedMovie {
    show: Movie;

}

export interface Movie {
    id: string;
    name: string;
    summary: string;
    image: {
        medium: string;
        original: string;
    };
}


