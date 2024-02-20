"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  const isUser = true;

  return (
    <div class="nav-container">
    <Link href={item.path} className={`${pathName === item.path}`}>
      {item.title}
    </Link>
    </div>
  );
};

export default NavLink;
