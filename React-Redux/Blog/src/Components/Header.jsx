import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='Header'>
        <h1 className="logo">Redux Blog</h1>
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">AddPost</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header