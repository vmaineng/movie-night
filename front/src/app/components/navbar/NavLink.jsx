"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  const isUser = true;

  return (
    <div class="nav-container">
      <Link
        href={link.path}
        className={`${styles.container} ${
          pathName === link.path && styles.active
        }`}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavLink;
