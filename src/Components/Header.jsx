import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="Navcontainer">
          <nav>
            <ul id="Navlist">
              <li>
                <p id="Mylogo">Lucky's Portfolio</p>
              </li>
              <li>
                <a href="#icon">
                  <i class="bx bx-menu" id="menu-icon"></i>
                </a>
              </li>
              <li>
                <div class="Navsections">
                  <a href="#home">Home</a>
                  <a href="#About">About Me</a>
                  <a href="#skills">Skills</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>
              </li>
              <li id="Mode">
                <i class="bx bx-moon"></i>
                <i class="bx bx-sun"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
