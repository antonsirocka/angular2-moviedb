import { MovieVote } from './movie-vote';

export interface MovieRecord {
    id: string;
    title: string;
    year_released: string;
    rating: string;
    imdbUrl: string;
    coverUrl: string;
    description: string;
    watched: boolean;
    priority: number;
    votes: Array<MovieVote>
}