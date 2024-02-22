import React from "react";
import Image from "next/image";
import styles from "./tvshowCard.module.css";

const tvshowCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/tvshow.png" alt="tvshow" fill className={styles.img} />
        </div>
        <span className={styles.date}> date 1.1.24</span>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default tvshowCard;
