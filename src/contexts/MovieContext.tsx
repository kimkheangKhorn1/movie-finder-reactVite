import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface MovieContextType {
  searchResults: Movie[];
  setSearchResults: Dispatch<SetStateAction<Movie[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <MovieContext.Provider value={{ searchResults, setSearchResults, loading, setLoading }}>
      {children}
    </MovieContext.Provider>
  );
};
