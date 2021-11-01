import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./Navone.css";

function Navone() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar_one">
        <div className="nav-container">
        <h1 className="logo me-auto">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </h1>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
                <Link to="/aboutus" className="nav-link scrollto">
                  About Us
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Students</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    {" "}
                    <Link style={{ color: "#009345" }} to="/studentHowitswork">
                      How it Works
                    </Link>
                  </li>
                </ul>
              </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            e
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navone;