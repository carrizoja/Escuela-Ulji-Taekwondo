import React from 'react'
import styles from './page.module.css'
import {items} from './data.js'
import {notFound} from 'next/navigation'
import Image from 'next/image'


console.log(items)
const getData = (cat) => {
  const data = items[cat];
  console.log(data)
  if(data){
    return data
  }
  return notFound()
}
const Category  = ({params}) => {
  /* split params in two strings */
  const category = params.category.split('_')
  /* add a blank space between two strings  */
  category.splice(1, 0, ' ')
  /* Capitalize the first character of each string */
  category[0] = category[0].charAt(0).toUpperCase() + category[0].slice(1)
  category[2] = category[2].charAt(0).toUpperCase() + category[2].slice(1)

  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) =>(
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {item.title}
            </h1>
            <p className={styles.desc}>
              {item.desc}
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.img}
              alt="Picture of the author"
              fill={true}     
            />
          </div>
        </div>
      ))}

      <section className={styles.descriptionContainer}>
        <div className={styles.content}></div>
        <div className={styles.image}></div>
      </section>
    </div>
  )
}

export default Category
