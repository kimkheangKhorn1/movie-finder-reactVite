import React, { useState, useContext } from 'react';
import axiosInstance from '../api';
import { MovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Search: React.FC = () => {
  const { searchResults, setSearchResults, setLoading } = useContext(MovieContext)!;
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/search/movie', { 
        params: { query },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="p-2 border rounded-lg w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies} className="mt-2 p-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;

