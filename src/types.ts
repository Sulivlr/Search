export interface Movie {
    id: string;
    show: {
        name: string;
        summary: string;
        image: {
            medium: string;
            original: string;
        };
    }
}

export interface ApiMovie {
    show: {
        name: string;
        summary: string;
        image: {
            medium: string;
            original: string;
        };
    }
}

export interface ApiMovies {
    [id: string]: ApiMovie;
}
