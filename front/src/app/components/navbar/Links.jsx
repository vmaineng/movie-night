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

  const isUser = true;
  const session = true;

  return (
    //if a user already, can watch else need to login
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}

      {session ? (
        <>
          {isUser}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink link={{ title: "Login", path: "/login" }} />
      )}
    </div>
    <button>Menu</button>
    {
      open && (<div className={styles.mobileLinks}> 
      {links.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
      </div>
    )}
    </div>
  );
};

export default Links;
