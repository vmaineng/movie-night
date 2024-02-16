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
    <div>
        {links.map((link) => {
            <NavLink key={link.title} link={link}/>
        })}
    </div>
  )
}

export default Links