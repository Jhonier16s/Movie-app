import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard';

const MoviePage = () => {
  const {id} = useParams()
  console.log(id);
  const URL= `https://api.themoviedb.org/3/movie/${id}?api_key=e73beb425fdbe57a77fd9ea5fcca05fc`

  const [movie, setMovie] = useState([])

  useEffect(()=>(
    getMovie()
  ),[])

  const getMovie = ()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      setMovie(data)
      console.log(data);
    })

  } 
  return (
    <>
      <div>
        <h2>Movie</h2>
        <MovieCard title={movie.original_title} img={movie.poster_path}/>
      </div>
    </>
  )
}

export default MoviePage