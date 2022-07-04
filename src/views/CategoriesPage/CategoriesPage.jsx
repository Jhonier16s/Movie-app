import React from "react";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import styles from './CategoriesPage.module.css'


const CategoriesPage = () => {
  return (
    <>
      <div className={styles.container}>
      
        <MenuCategories />
      </div>
    </>
  );
};

export default CategoriesPage;
