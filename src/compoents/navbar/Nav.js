import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Nav() {

  const [nav, setNav] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">KitchenStories</h3>
      <ul className={nav ? 'nav-links' : 'nav-link'} onClick={() => setNav(false)}>
        <Link to='/' className="home">
          <li>Home</li>
        </Link>
        <Link to='/about' className="about">
          <li>About</li>
        </Link>
        <Link to='/list' className="recipes">
          <li>Recipe list</li>
        </Link>
        <Link to='/new' className="new">
          <li>New Item</li>
        </Link>
        <Link to='/profile' className="profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;