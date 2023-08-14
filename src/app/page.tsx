import Image from 'next/image'
import styles from './page.module.css'
import {Button} from '../components/button/Button'



export default function Home() {

  return (
    <div className={styles.container__home}>
      <div className={styles.item}>
        <h1 className={styles.title}>ESCUELA ULJI</h1>
        <p className={styles.description}>Siempre en crecimiento</p>
        <Button url="/contacto" text="Contáctanos" ></Button>
      </div>
      <div className={styles.item}>
      <Image width={1000} height={500} src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691080540/ulji-home4_l0r6xd.jpg" alt='home ulji' className={styles.imgHome}></Image>
      </div> 
    </div>
  )
}
