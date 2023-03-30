import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav"

function Nav() {
    return (
      <>
        
            <Link className="img-nav" to="/animalList">
              FIND PET
            </Link>
            {/* Link to organization list page */}
            <Link className="img-nav" to="/organizationList">
              <span>ORGANISATIONS </span>
            </Link>
            {/* Link to sign up page */}
            <Link className="img-nav" to="/login">
              SIGN UP
            </Link>
      </>
    );
  }
  
  export default Nav;