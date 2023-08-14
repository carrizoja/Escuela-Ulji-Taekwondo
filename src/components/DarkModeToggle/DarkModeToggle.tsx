import React from 'react'
import styles from './darkModeToggle.module.css'

const DarkModeToggle = () => {
/*   const mode = "dark"; */
  const mode = "light";
  return (
    <div className={styles.container}>
      <div className={styles.icon}> :crescent_moon: </div>
      <div className={styles.icon}> :sun: </div>
      <div className={styles.ball} style={mode === "light" ? {left:"2px"} : {right:"2px"} }/>
    </div>
  )
}

export default DarkModeToggle