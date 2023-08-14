import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const Autoridades = () => {
  return (
    <section className={styles.membersContainer}>
    <h1 className={styles.membersTitle}>Miembros de la Escuela</h1>
    <div className={styles.members}>
      <Link href="/autoridades/horacio_santana" className={styles.member}>
        <span className={styles.title}>Horacio Santana</span>
      </Link>
      <Link href="/autoridades/jose_carrizo" className={styles.member}>
        <span className={styles.title}>José Carrizo</span>
      </Link>
      <Link href="/autoridades/peter_matheus" className={styles.member}>
        <span className={styles.title}>Peter Matheus</span>
      </Link>
      <Link href="/autoridades/julio_bazan" className={styles.member}>
        <span className={styles.title}>Julio Bazán</span>
      </Link>
    </div>
  </section>
  )
}

export default Autoridades
