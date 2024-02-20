import React from 'react'
import Link from 'next/link';
import Links from './Links';
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div class={styles.container}>
    <Link href="/" class={styles.logo}>Logo</Link>
    <div>
      <Links />
    </div>
    </div>
  )
}

export default Navbar