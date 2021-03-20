import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';
import SearchBox from './components/SearchBox';
import ListHeading from './components/ListHeading';
import AddFavourites from "./components/AddToFavourites";
import RemoveFavourites from './components/RemoveFavourites';


console.log(process.env.REACT_APP_MOVIE_KEY);

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  // Making a request to OMDB api
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=dbddef57`;
    const res = await fetch(url);
    const resJson = await res.json();

  // codition for search
    if (resJson.Search) {
      setMovies(resJson.Search);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => { 
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }


  return (
    <div className="container-fluid movie-app">

      <div className="row d-flex align-items-center mt-4 mb-4">
        <ListHeading heading='Movies'/>
      </div>

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <div className="row mt-4">
        <MovieList movies={movies} 
                   favouriteComponent={AddFavourites}
                   handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <ListHeading heading='Favourites' />
      </div>
        <div className="row">
          <MovieList movies={favourites} 
                     handleFavouritesClick={removeFavouriteMovie} 
                     favouriteComponent={RemoveFavourites} 
          />
        </div>
    </div>
  );
}

export default App;