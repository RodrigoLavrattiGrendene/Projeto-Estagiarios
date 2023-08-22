import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFieldTime, AiOutlineMenu } from "react-icons/ai";
import { FcDataConfiguration } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <input type="checkbox" id="check" />
      <div className="container">
        <label htmlFor="check">
          <span className="bars">
            <LiaTimesSolid />
          </span>
          <span className="times">
            <AiOutlineMenu />
          </span>
        </label>
        <nav className="navigation">
          <div className="menu">
            <Link to="/" onClick={() => setShowMenu(true)}>
              Menu
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/countdown" onClick={() => setShowMenu(false)}>
                <AiOutlineFieldTime /> Countdown
              </Link>
            </li>
            <li>
              <Link to="/configuration" onClick={() => setShowMenu(false)}>
                <FcDataConfiguration /> Configuration
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setShowMenu(false)}>
                <CiLogin /> Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {showMenu && (
        <div>
          <section></section>
        </div>
      )}
    </>
  );
};

export default Navbar;
