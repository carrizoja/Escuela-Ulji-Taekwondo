import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.mainContainer}><h1>Blog</h1>
     <Link href="blog/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691971610/img/ul%20ji/blog1_co5ncs.jpg"
        alt="Picture of the author"
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Examen 24-5-2023</h1>
        <p className={styles.desc}>Descripción del examen</p>
      </div>
     </Link>
     <Link href="/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691971610/img/ul%20ji/blog1_co5ncs.jpg"
        alt="Picture of the author"
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Examen 24-5-2023</h1>
        <p className={styles.desc}>Descripción del examen</p>
      </div>
     </Link>
    </div>
   
  )
}

export default Blog