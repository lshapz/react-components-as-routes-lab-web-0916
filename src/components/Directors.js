import React from 'react'
import { directors } from '../data'

const Directors = () => {
  var show = directors.map((director, index)=>{
 return( <div key={index}>  
    {director.name}
    <ul>{director.movies.map((movie, index)=>{return (<li key={index}>{movie}</li>)})}
    </ul></div>)
    })
    return (
        <div>
        <h1>Directors Page</h1>
            {show}
        </div>
    )
}

module.exports = Directors


