import React from 'react'
import Link from 'next/link';
import Links from './Links';

const Navbar = () => {
  return (
    <div class="nav-container">
    <Link href="/" class="logo">Logo</Link>
    <div>
      <Links />
    </div>
    </div>
  )
}

export default Navbar