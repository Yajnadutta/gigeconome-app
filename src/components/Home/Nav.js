import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';
function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div class="my-0" style={{ marginLeft: -15 }}>
      <nav
        class="navbar navbar-expand-xl navbar-dark"
        style={{ backgroundColor: "#565455" }}
      >
        <div className="container d-flex align-items-left">
          <a href="#" class="navbar-brand"></a>
          <button
            class="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse1"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarCollapse1"
          >
            <div class="navbar-nav" id="programming">
              <a href="#" class="nav-item nav-link active">
                Programming & Development
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                style={{ marginLeft: 7 }}
              >
                Writing & Translation
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                style={{ marginLeft: 7 }}
              >
                Design & Art
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                style={{ marginLeft: 7 }}
              >
                Administrative & Secretary
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                style={{ marginLeft: 7 }}
              >
                Sales & Marketing
              </a>
              <a
                href="#"
                class="nav-item nav-link active"
                style={{ marginLeft: 7 }}
              >
                Other
              </a>
            </div>
            <form class="d-flex " id="search">
              <a href="#" class="searchbaral">
                <input
                  class="searchbar"
                  type="text"
                  placeholder="Search.."
                  name=""
                />
                <button class="serch-button" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
