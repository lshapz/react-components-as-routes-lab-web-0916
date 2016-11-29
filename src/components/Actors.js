import React from 'react'
import { actors } from '../data'


  var show = actors.map((actor, index)=>{
    return( <div key={index}>  {actor.name}
    <ul>{actor.movies.map((movie, index)=>{return (<li key={index}>{movie}</li>)})}
    </ul></div>)})

  
const Actors = () => {
  
    return (
        <div>
        <h1>Actors Page</h1>
            {show}
        </div>
    )
}

module.exports = Actors

