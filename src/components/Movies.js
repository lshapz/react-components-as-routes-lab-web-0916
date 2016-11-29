import React from 'react'
import { movies } from '../data'

const Movies = () => {

    var show = movies.map((movie, index)=>{
      return (<div key={index}>
        {movie.title}, {movie.time} minutes long
        <ul>{movie.genres.map((genre, index)=>{return (<li key={index}>{genre}</li>)})}</ul>
        </div>)})

    return (
        <div>
           <h1>Movies Page</h1>
            {show}
            
        </div>
    )
}

module.exports = Movies
