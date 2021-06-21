// import logo from './logo.svg';

//useEffect, 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
// import MovieList from './components/MovieList';



const FEATURED_API = " http://www.omdbapi.com/?i=tt3896198&apikey=327386bc";

// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React ! !
//   //       </a>
//   //     </header>
//   //   </div>
//   // );

//   const [movies, setMovies] = useState([]);

//   // useEffect(async() => {
//   //   const moviesResp = await fetch(FEATURE_API);
//   //   const moviesName = await moviesResp.json();

//   //   setMovies(moviesName);
//   // }, [])

//   useEffect(() => {fetch(FEATURED_API).then((res) => res.json()).then((data) => {
//         console.log(data);
//         setMovies(data.results);});

//   }, []);

//   return (
//     <div>
//         {(movies.length > 0) && movies.map((movie) => 
//         <Movie key={movie.id} data={movie} />)} 
//     </div>
//   );
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue) => {
  const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=327386bc`;

  const response = await fetch(url);
  const responsJson = await response.json();

  // console.log(responsJson);
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

//movie-app
export default App;

// {movies.map(movie => (<Movie />))}


// import React from 'react';
// import reactDom from 'react-dom';
// // import './App.css';


// const FEATURED_API = " http://www.omdbapi.com/?i=tt3896198&apikey=327386bc";

// class Main extends React.Component {
//   render(){
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// }


// // export default App;
// ReactDOM.render(<Main />, document.getElementById('root'));


// {/* <h4>Year: {movie.Year}</h4> */}
// <link rel="stylesheet" href="App.css"/>
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"/>



