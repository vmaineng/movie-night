import React from 'react'
import Image from 'next/image'
import styles from "./tvshows.module.css"

const TvshowPage = () => {
  return (
    <div className={styles.showContainer}>
      TvshowPage
      <Image src="/about.png" alt="" fill />
      </div>
  )
}

export default TvshowPage