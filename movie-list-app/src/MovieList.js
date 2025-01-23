import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  
  const movies = [
    { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    if (genre === 'All Genres') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === genre);
      setFilteredMovies(filtered);
    }
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>


      <ul className="movie-items">
        {filteredMovies.map((movie, index) => (
          <li
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p> {/* Removed the "Genre:" label */}
            <p>Released: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
