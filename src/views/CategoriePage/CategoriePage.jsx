import React from "react";
import { useParams } from "react-router-dom";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import { useState, useEffect } from "react";
import MovieCard from '../../components/MovieCard/MovieCard'

const CategoriePage = () => {
  const { cat } = useParams();
  let id = cat;
  console.log(id);

  const URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&?certification_country=US&certification=R&sort_by=vote_average.desc?&api_key=e73beb425fdbe57a77fd9ea5fcca05fc`;
  
  const [dataCategorie, setDataCategorie] = useState([]);
  
  useEffect(()=>(
    getDataForCategorie()
  ),[id])
  
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
      <MenuCategories />
      {dataCategorie.map((item)=>(
        <MovieCard title={item.original_title} img={item.poster_path}/>
      ))}
    </>
  );
};

export default CategoriePage;
