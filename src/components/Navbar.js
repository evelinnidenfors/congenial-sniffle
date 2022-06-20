import React from "react";
import "./Navbar.css";

// import favicon from './public'

export default function Navbar() {
  const navBarHeight = document.getElementById("navbar");

  console.log(navBarHeight);

  return (
    <nav id="navbar">
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
