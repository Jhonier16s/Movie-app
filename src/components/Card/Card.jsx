import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
const Card = (movie) => {
  
  let img_path = "https://image.tmdb.org/t/p/w300";
  return (
    <>
      <div className={styles.card_container}>
        <img
          className={styles.img}
          src={img_path + movie.info.poster_path}
          alt={movie.info.title || movie.info.name}
        />
        <div className={styles.container_details}>
          <h4>{movie.info.title || movie.info.name}</h4>
          <h3>{movie.info.vote_average}</h3>
          <Link className={styles.button} to={`/MoviePage/${movie.info.id}`}>View more</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
