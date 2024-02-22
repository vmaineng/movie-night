import React from "react";
import Image from "next/image";
import styles from "./home.module.css";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Happiness</h1>
        <p className={styles.desc}> Lorem ipsum</p>
        <div className={styles.buttons}>
          <button>Learn more</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.png" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
    
  );
};

export default Home;
