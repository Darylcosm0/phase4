import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <li>
          <Link to="/home">Sign-up</Link>
        </li>
        </nav>
    );
}

export default Nav;