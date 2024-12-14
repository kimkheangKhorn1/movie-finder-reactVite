import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../contexts/MovieContext';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
      <Link
        to={`/movie/${movie.id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
