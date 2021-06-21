import React from 'react';

const SearchBox = (props) => {
    return (
    
        <div className="col col-sm-4">
            <input className="form-control" 
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            id="movie"
            placeholder="Type to search...."></input>
        </div>
      
    )
}

export default SearchBox;

{/* <div id="movieForm" autocomplete="off">
        <div className="form-group col col-sm-4">
            <input className="form-control" 
            value={props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            id="movie"
            placeholder="Type to search...."></input>
        </div>
        <div class="form-group">
            <button class="btn btn-danger btn-block">
                Search Movie
            </button>

        </div>
    </div> */}