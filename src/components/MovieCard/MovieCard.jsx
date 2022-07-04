import React from 'react'
import {Link} from 'react-router-dom'
const MovieCard = ({title, img}) => {

    let img_path = "https://image.tmdb.org/t/p/w300";

  return (
    <>
        <h2>{title}</h2>
        <img src={img_path + img} alt="" />
        <Link to={"/"}>Go back</Link>
    </>
  )
}

export default MovieCard