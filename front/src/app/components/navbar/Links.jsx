"use client";
import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
 import styles from "./links.module.css";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "TV Shows",
    path: "/tvshows",
  },
  {
    title: "Contact",
    path: "/contact",
  },
 
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.links}>
      {links.map((link => (
        <Link key={link.title} href={link.path}>
          {link.title}
          </Link>
      )))}
    </div>
  );
};

export default Links;
