import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Blog Post
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sit vitae libero suscipit ut sint, neque qui laborum repellat eaque, illo sequi nostrum aliquam voluptatum exercitationem voluptate id hic ipsum? Ullam?
          </p>
          <div className={styles.author}>
            <Image
              src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691965812/img/ul%20ji/jose_carrizo_avatar_vlc66u.jpg"
              alt="Picture of the author"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <span className={styles.username}>José Carrizo</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691971610/img/ul%20ji/blog1_co5ncs.jpg"
            alt="Picture of the author"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <section className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Magni, maiores. At sequi consequatur cumque odio reprehenderit doloribus, quis facere esse, excepturi sunt nostrum ea blanditiis eaque impedit, dolores nisi explicabo?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Magni, maiores. At sequi consequatur cumque odio reprehenderit doloribus, quis facere esse, excepturi sunt nostrum ea blanditiis eaque impedit, dolores nisi explicabo?
        </p>
        <br/>
      </section>
    </div>
  )
}
export default BlogPost