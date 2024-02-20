"use client"
import {useState} from 'react';
import NavLink from './NavLink';

const links= [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "TV Shows",
        path: "/tvshows",
    }
]

const Links = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
        <div className="links">
        {links.map((link) => {
            <NavLink key={link.title} item={link}/>
        })}
        </div>
    </div>
  )
}

export default Links