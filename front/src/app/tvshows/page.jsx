import React from 'react'
import Image from 'next/image'
import styles from "./tvshows.module.css"
import tvshowCard from '../components/tvShowCard/tvshowCard'

const TvshowPage = () => {
  return (
    <div className={styles.showContainer}>
      TvshowPage
     <div className={styles.post}>
      <tvshowCard />
       </div>
      </div>
  )
}

export default TvshowPage