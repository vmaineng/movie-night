import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div class="nav-container">
    <div class="logo">Logo</div>
    <div>
      <Link href="/tvshows">TV Shows</Link>
    </div>
    </div>
  )
}

export default Navbar