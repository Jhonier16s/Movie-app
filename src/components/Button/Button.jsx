import React from 'react'
import {Link} from 'react-router-dom'
const Button = ({Id_categorie, categorie}) => {
  return (
    <div>
        <Link to={"/categories/"+Id_categorie}>{categorie}</Link>
    </div>
  )
}

export default Button