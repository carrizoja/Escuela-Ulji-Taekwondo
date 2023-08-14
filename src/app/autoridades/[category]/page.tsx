import React from 'react'
import styles from './page.module.css'

const Category  = ({params}) => {

  /* split params in two strings */
  const category = params.category.split('_')
  /* add a blank space between two strings  */
  category.splice(1, 0, ' ')
  /* Capitalize the first character of each string */
  category[0] = category[0].charAt(0).toUpperCase() + category[0].slice(1)
  category[2] = category[2].charAt(0).toUpperCase() + category[2].slice(1)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      <section className={styles.descriptionContainer}>
        <div className={styles.content}></div>
        <div className={styles.img}></div>
      </section>
    </div>
  )
}

export default Category
