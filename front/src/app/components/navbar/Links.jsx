"use client"
import {useState} from 'react';
import NavLink from './NavLink';

const links= [
    {
        title: "Homepage",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Blog",
        path: "/blog",
      },
    ];
    

const Links = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
        <div className="links">
        {links.map((link) => {
            <NavLink key={link.title} link={link}/>
        })}
        </div>
    </div>
  )
}

export default Links