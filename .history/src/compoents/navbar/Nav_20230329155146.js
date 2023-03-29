import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/About">about</a>
        </li>
        <li>
          <a href="/Recipe list">Recipe list</a>
        </li>
        <li>
          <a href="/New item">New item</a>
        </li>
        <li>
          <a href="/Profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;