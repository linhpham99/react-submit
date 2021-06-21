 import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const FEATURED_API = " http://www.omdbapi.com/?i=tt3896198&apikey=327386bc";

var apikey = "327386bc";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue) => {
  // const url = "http://www.omdbapi.com/?apikey="+apikey+"&s="+{searchValue};
  const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=327386bc`;
  // const url=`http://www.omdbapi.com/?i=tt3896198&apikey=327386bc&t=${searchValue}`;


  const response = await fetch(url);
  const responsJson = await response.json();

  console.log(responsJson);
  if(responsJson.Search) {
    setMovies(responsJson.Search);
  }
  
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
  <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
  </div>
  );
};


export default App;


