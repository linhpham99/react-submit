import React, { useState, useEffect }  from 'react';

var value = "Title";
const MovieList = (props) =>  {
    const [values] = useState([]);
    const [value] = useState('');

    const getMovie = async(value) => {
        const url=`http://www.omdbapi.com/?i=tt3896198&apikey=327386bc&t=${value}`;
        const res = await fetch(url);
        const resJson = await res.json();
        // console.log(resJson.Genre);
        return resJson;
    };
    
    useEffect(() => {
        const keys = getMovie(value);
        return keys;
      }, [value]);
      {props.movies.map((movie, index) =>  
        console.log(getMovie(movie.Title).Genre))};

        
    
    return (
        <>
            {props.movies.map((movie, index) => 
            
            
            <div className='image-container d-flex justify-content-start m-2'>
                <img src={movie.Poster} alt='movie'></img>
                <h4>Title: {movie.Title}  <br /> Year: {movie.Year} <br />  </h4>
   
                <div className='overlay d-flex align-items-center justify-content'></div>
            </div>
            
            )}
        </>
    )
}

export default MovieList;
