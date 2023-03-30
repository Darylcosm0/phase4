import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/recipe-list">Recipe List</Link>
          </li>
          <li>
            <Link to="/new-item">New Item</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;