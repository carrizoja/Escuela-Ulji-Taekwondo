"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo_png.png'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
const links = [
  {
    id:1,
    title: "Home",
    url: "/",
  },
  {
    id:2,
    title: "Institucional",
    url: "/institucional",
  },
  {
    id:3,
    title: "Actividades",
    url: "/actividades",
  },
  {
    id:4,
    title: "Historia TKD",
    url: "/historia",
  },
  {
    id:5,
    title: "Blog",
    url: "/blog",
  },
  {
    id:6,
    title: "Contacto",
    url: "/contacto",
  },
  {
    id:7,
    title: "Autoridades",
    url: "/autoridades",
  }
]
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" >
        <Image className={styles.logo} width={100} height={100} src={logo} alt="logo" />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => {
          return (
            <Link href={link.url} className={styles.link} key={link.id}>
              {link.title}
            </Link>
          )
        })}
        <button
          className={styles.logout}
          onClick={() => {
            console.log('logged out');
          }}
        >Logout</button>
      </div>
    </div>
  )
}

export default Navbar