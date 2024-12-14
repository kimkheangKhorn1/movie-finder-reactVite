import React, { useEffect, useState } from 'react';
import axiosInstance from '../api';
import { Movie } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axiosInstance.get('/trending/movie/week'); 
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies(); 
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
