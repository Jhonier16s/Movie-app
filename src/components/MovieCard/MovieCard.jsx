import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({
  title,
  img,
  urlView,
  description,
  seasons,
  episodes,
  vote,
}) => {
  let img_path = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.banner}
          style={{ backgroundImage: `Url(${img_path}${img})` }}
        >
          <div className={styles.container_text}>
            <h2>{title}</h2>
            <p>{description}</p>
            {urlView ? (
              <a target="_blank" rel="noreferrer" href={urlView}>
                View
              </a>
            ) : (
              <h1></h1>
            )}
          </div>
        </div>
        {vote ? (
          <div className={styles.container_info}>
            <div className={styles.info}>
              <h2>Calification</h2>
              <h1>{vote}</h1>
            </div>
            {seasons ? (
              <>
                <div className={styles.info}>
                  <h2>Seasons</h2>
                  <h1>{seasons}</h1>
                </div>
                <div className={styles.info}>
                  <h2>Episodes</h2>
                  <h1>{episodes}</h1>
                </div>
              </>
            ) : (
              <p></p>
            )}
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
};

export default MovieCard;
