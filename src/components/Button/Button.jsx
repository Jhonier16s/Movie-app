import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Button.module.css'
const Button = ({Id_categorie, categorie}) => {
  return (
    <div className={styles.button_container}>
        <Link className={styles.button} to={"/categories/"+Id_categorie}>{categorie}</Link>
    </div>
  )
}

export default Button