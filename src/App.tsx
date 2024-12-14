import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';

// Lazy load pages
const Home = React.lazy(() => import('./views/Home'));
const Search = React.lazy(() => import('./views/Search'));
const MovieDetailsPage = React.lazy(() => import('./views/MovieDetailsPage'));
const About = React.lazy(() => import('./views/About'));

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Lazy-loaded Home */}
          <Route path="/" element={<Home />} />

          {/* Lazy-loaded Search */}
          <Route path="/search" element={<Search />} />

          {/* Lazy-loaded MovieDetailsPage */}
          <Route path="/movie/:id" element={<MovieDetailsPage />} />

          {/* Lazy-loaded About */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

