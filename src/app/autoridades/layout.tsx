import React from 'react'
import styles from './page.module.css'

export const Layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Miembros de la Escuela</h1>
      {children}
    </div>
  )
}

export default Layout