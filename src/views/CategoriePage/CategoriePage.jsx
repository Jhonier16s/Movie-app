import React from "react";
import { useParams } from "react-router-dom";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styles from './CategoriePage.module.css'

const CategoriePage = () => {
  const { cat } = useParams();
  let id = cat;
  console.log(id);

  const URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&?certification_country=US&certification=R&sort_by=vote_average.desc?&api_key=e73beb425fdbe57a77fd9ea5fcca05fc`;

  const [dataCategorie, setDataCategorie] = useState([]);

  useEffect(() => getDataForCategorie(), [id]);

  const getDataForCategorie = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDataCategorie(data.results);
      });
    console.log(dataCategorie);
  };

  return (
    <>
      <div  className={styles.container}>
        <MenuCategories />
        <div className={styles.movie_container}>
        {dataCategorie.map((res, pos) => (
          <Card info={res} key={pos} />
        ))}

        </div>
        
      </div>
    </>
  );
};

export default CategoriePage;
