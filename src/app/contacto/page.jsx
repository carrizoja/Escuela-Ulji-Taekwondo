import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {Button} from '../../components/button/Button'

export const metadata = {
  title: "Escuela Ulji Taekwondo Contacto Información",
  description: "Esta es la página de contacto de la Escuela Ulji. ",
};

const Contacto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contacto</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1691366628~exp=1691367228~hmac=99f09a516ae60731155a35839433cbe2b8482e405a2766ed1b8f0ebf97514606"
            alt="Picture of the author"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='nombre' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textarea} placeholder='mensaje' cols="30" rows="10"></textarea>
          <Button url="#" text="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default Contacto