import React from "react";
import Button from "../Button/Button";
import styles from './MenuCategories.module.css'
const MenuCategories = () => {
  return (
    <>
      <div className={styles.container}>
        <Button Id_categorie={28} categorie={"Action"} />
        <Button Id_categorie={12} categorie={"Adventure"} />
        <Button Id_categorie={16} categorie={"Animation"} />
        <Button Id_categorie={35} categorie={"Comedy"} />
        <Button Id_categorie={80} categorie={"Crime"} />
        <Button Id_categorie={99} categorie={"Documentary"} />
        <Button Id_categorie={10751} categorie={"Family"} />
        <Button Id_categorie={14} categorie={"Fantasy"} />
        <Button Id_categorie={36} categorie={"History"} />
        <Button Id_categorie={27} categorie={"Horror"} />
        <Button Id_categorie={10402} categorie={"Music"} />
        <Button Id_categorie={9648} categorie={"Mystery"} />
        <Button Id_categorie={10749} categorie={"Romance"} />
        <Button Id_categorie={878} categorie={"Science Fiction"} />
        <Button Id_categorie={53} categorie={"Thriller"} />
      </div>
    </>
  );
};

export default MenuCategories;
