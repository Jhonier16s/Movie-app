import React from "react";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import styles from './CategoriesPage.module.css'


const CategoriesPage = () => {
  return (
    <>
      <div className={styles.container}>
      <h2>Categorias</h2>
        <MenuCategories />
      </div>
    </>
  );
};

export default CategoriesPage;
