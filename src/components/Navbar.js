import React from "react";
import "./Navbar.css";

// import favicon from './public'

export default function Navbar() {
  return (
    <nav>
      <div>
        <ul className="navbar-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Food & Drinks</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
