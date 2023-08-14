import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Institucional = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          width={1000}
          height={300}
          src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1691080540/ulji-home4_l0r6xd.jpg"
          alt="home ulji"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Nuestra Institución</h1>
          <h2 className={styles.imgDescription}>Acerca de nosotros</h2>
        </div>
      </div>
      <section className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>¿Quiénes somos?</h1>
          <p className={styles.desc}>
            Somos una institución educativa que ofrece servicios de educación
            formal y no formal, con el fin de contribuir al desarrollo integral
            de la comunidad, mediante la formación de personas con valores,
            competencias y habilidades para la vida, que les permitan ser
            agentes de cambio en su entorno. capacitadas para cumplir los
            objetivos del país. Nuestro principal objetivo es brindar a nuestros
            estudiantes un servicio educativo de calidad, que les permita
            desarrollar sus habilidades y competencias para que sean capaces de
            enfrentar los retos que les presenta la vida.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>¿Quiénes somos?</h1>
          <p className={styles.desc}>
            Somos una institución educativa que ofrece servicios de educación
            formal y no formal, con el fin de contribuir al desarrollo integral
            de la comunidad, mediante la formación de personas con valores,
            competencias y habilidades para la vida, que les permitan ser
            agentes de cambio en su entorno. capacitadas para cumplir los
            objetivos del país. Nuestro principal objetivo es brindar a nuestros
            estudiantes un servicio educativo de calidad, que les permita
            desarrollar sus habilidades y competencias para que sean capaces de
            enfrentar los retos que les presenta la vida.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Institucional;
