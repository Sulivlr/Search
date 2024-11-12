export interface Movie {
    id: string;
    name: string;
    image: {
        medium: string;
        large: string;
    };
    description: string;
}

export interface ApiMovie {
    name: string;
    image: {
        medium: string;
        large: string;
    };
    description: string;
}

export interface ApiMovies {
    [id: string]: ApiMovie;
}