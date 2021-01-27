import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              JumpStart
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/team"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/beatboi"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  BeatBoi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/credits"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Credits
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/download" className="btn-link">
                    <Button buttonStyle="btn--outline">DOWNLOAD NOW</Button>
                  </Link>
                ) : (
                  <Link
                    to="/download"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      DOWNLOAD NOW
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;