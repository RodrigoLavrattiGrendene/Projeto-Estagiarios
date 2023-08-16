import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  return (
    <div className="container">
      <nav className="navigation">
        <div className={(hiddenMenu ? "hidden" : " ") + " menu"}>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </div>
        <span onClick={() => setHiddenMenu(!hiddenMenu)}>
          {hiddenMenu ? "|||" : "X"}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
