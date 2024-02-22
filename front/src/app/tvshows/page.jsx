import React from "react";
import Image from "next/image";
import styles from "./tvshows.module.css";
import TvshowCard from "../components/tvShowCard/TvshowCard";

const TvshowPage = () => {
  return (
    <div className={styles.showContainer}>
      <div className={styles.post}>
        <TvshowCard />
      </div>
      <div className={styles.post}>
        <TvshowCard />
      </div>
    </div>
  );
};

export default TvshowPage;
