export interface Movie {
    id: string;
    name: string;
    image: string;
    description: string;
}

export interface ApiMovie {
    name: string;
    image: string;
    description: string;
}

export interface ApiMovies {
    [id: string]: ApiMovie;
}