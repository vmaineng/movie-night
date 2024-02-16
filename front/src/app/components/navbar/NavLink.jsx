"use client"
import {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NavLink = ({link}) => {
  const pathName = usePathname();
  
    const isUser = true;

  return (
    <div>
       <Link 
       href={link.path}
       className={`${
        pathName === item.path
      }`}> 
       {link.title}
       </Link>
       </div>
  )
}

export default NavLink