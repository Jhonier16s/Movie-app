import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './SeriePage.module.css'
const SeriePage = () => {
  const {id} = useParams()
  console.log(id);
  const URL= `https://api.themoviedb.org/3/tv/${id}?api_key=e73beb425fdbe57a77fd9ea5fcca05fc`

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
      <div className={styles.container}>
        <MovieCard 
        title={movie.name} 
        img={movie.backdrop_path} 
        urlView={movie.homepage}
        description={movie.overview}
        seasons={movie.number_of_seasons}
        episodes={movie.number_of_episodes}
        vote={movie.vote_average}
        />
      </div>
    </>
  )
}

export default SeriePage