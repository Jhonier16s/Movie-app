import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styles from "./Populars.module.css";
const PopularsPage = () => {
  const ApiKey = "&api_key=e73beb425fdbe57a77fd9ea5fcca05fc";
  const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc" +
    ApiKey;

  const [dataMovie, setDataMovie] = useState([]);
  const [search, setSearch] = useState()
  useEffect(() => getDataApi(), []);

  const getDataApi = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDataMovie(data.results);
      });
  };

  
  const handleSubmit = (event)=>{
    event.preventDefault()
    /* console.log(search) */
    const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=e73beb425fdbe57a77fd9ea5fcca05fc&query=${search}`
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setDataMovie(data.results);
      });
  
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.movies_container}>
          {dataMovie.map((res, pos) => (
            <Card info={res} key={pos} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularsPage;