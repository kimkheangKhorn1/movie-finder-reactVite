import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Movie Finder</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/search" className="hover:underline">
            Search
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
