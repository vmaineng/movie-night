import React from "react";
import Image from "next/image";
import styles from "./tvshowCard.module.css";
import Link from "next/link";

const tvshowCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/tvshow.png" alt="tvshow" fill className={styles.img} />
        </div>
        <span className={styles.date}> date 1.1.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.description}>description</p>
        <Link href="/tvshow/shows">READ MORE</Link>
      </div>
    </div>
  );
};

export default tvshowCard;
