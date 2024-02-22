import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logo}> Logo</div>
    <div className={styles.text}>
    Fri-Yay &copy;{new Date().getFullYear()}. All rights reserved
    </div>
      </div>
  )
}

export default Footer