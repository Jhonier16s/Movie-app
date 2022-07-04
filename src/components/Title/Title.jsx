import React from 'react'
import styles from './Title.module.css'
const Title = ({text}) => {
  return (
    <>
        <div className={styles.container}>
            <h1>{text}</h1>
        </div>
    </>
  )
}

export default Title