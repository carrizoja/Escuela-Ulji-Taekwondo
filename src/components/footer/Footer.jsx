import React from 'react'
import styles from './footer.module.css'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
/* import Image from 'next/image' */
const Footer = () => {
  return (
    <div className={styles.container}>    
      <div>
        <div className={styles.social}>
        <BsFacebook className={styles.facebook} />
        <BiLogoInstagramAlt className={styles.icon} />
        </div>
      </div>
      <div> ©2023 José Carrizo. All rights reserved.</div>
    </div>
  )
}

export default Footer