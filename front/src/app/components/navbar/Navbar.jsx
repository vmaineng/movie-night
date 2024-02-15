import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
    <div>Logo</div>
    <div>
      <Link href="/tvshows">TV Shows</Link>
    </div>
    </div>
  )
}

export default Navbar