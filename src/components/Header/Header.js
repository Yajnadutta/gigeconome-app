// import React from "react";
// import './Header.css';
// import Logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
//  class Header extends React.Component{
//     render(){
//         return(
//             <div>
//      {/* ======= Header ======= */}
//       <header id="header" className="fixed-top d-flex align-items-center">
//         <div className="container d-flex align-items-center">
//           <h1 className="logo me-auto">
//             <Link to="/">
//               <img src={Logo} />
//             </Link>
//           </h1>

//           {/* Uncomment below if you prefer to use an image logo */}
//           {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>*/}
//           <nav id="navbar" className="navbar order-last order-lg-0">
//             <ul>
//               <li>
//                 <Link to="/aboutus" className="nav-link scrollto">
//                   About Us
//                 </Link>
//               </li>
//               <li className="dropdown">
//                 <a href="#">
//                   <span>Students</span> <i className="bi bi-chevron-down" />
//                 </a>
//                 <ul>
//                   <li>
//                     {" "}
//                     <Link style={{ color: "#009345" }} to="/studentHowitswork">
//                       How it Works
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a href="#">
//                   <span>Companies</span> <i className="bi bi-chevron-down" />
//                 </a>
//                 <ul>
//                   <li>
//                     {" "}
//                     <Link to="/company" style={{ color: "#009345" }}>
//                       How it Works
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a href="#">
//                   <span>Universities</span> <i className="bi bi-chevron-down" />
//                 </a>
//                 <ul>
//                   <li>
//                     {" "}
//                     <Link to="/universites" style={{ color: "#009345" }}>
//                       How it Works
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a href="#">
//                   <span>Startups</span> <i className="bi bi-chevron-down" />
//                 </a>
//                 <ul>
//                   <li>
//                     {" "}
//                     <Link style={{ color: "#009345" }} to="/company">
//                       How it Works
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <i className="bi bi-list mobile-nav-toggle" />
//           </nav>
//           {/* .navbar */}
//           <a
//             href="#about"
//             className="get-started-btn scrollto"
//             style={{
//               /* padding: '8px 25px', */
//               /* height: '7px', */
//               marginLeft: "30px",
//               background: "#009345",
//               color: "#fff",
//               borderRadius: "4px",
//               padding: "5px 25px",
//               whiteSpace: "nowrap",
//               transition: "0.3s",
//               fontSize: "14px",
//               fontWeight: 600,
//               display: "inline-block",
//               cursor: "pointer",
//             }}
//           >
//             Post a Project
//           </a>
//           <Link
//             to="/signup"
//             className="get-started-btn scrollto"
//             style={{
//               /* padding: '8px 25px', */
//               /* height: '7px', */
//               marginLeft: "30px",
//               background: "gray",
//               color: "#fff",
//               borderRadius: "4px",
//               padding: "5px 25px",
//               whiteSpace: "nowrap",
//               transition: "0.3s",
//               fontSize: "14px",
//               fontWeight: 600,
//               display: "inline-block",
//               cursor: "pointer",
//             }}
//           >
//             Sign Up
//           </Link>
//           <Link
//             to="/signin"
//             className="get-started-btn scrollto"
//             style={{
//               /* padding: '8px 25px', */
//               /* height: '7px', */
//               marginLeft: "30px",
//               background: "#009345",
//               color: "#fff",
//               borderRadius: "4px",
//               padding: "5px 25px",
//               whiteSpace: "nowrap",
//               transition: "0.3s",
//               fontSize: "14px",
//               fontWeight: 600,
//               display: "inline-block",
//               cursor: "pointer",
//             }}
//           >
//             Sign In
//           </Link>
//           {/*<span style="padding-left: 2%;*/}
//           {/*    color: green;*/}
//           {/*    font-size: 28px;">*/}
//           {/* <i class="fa fa-user-circle-o" aria-hidden="true"></i></span>*/}
//         </div>
//       </header>
//       {/* End Header */}
//             </div>
//         )
//     }
// }
// export default Header;


import React, { useState } from "react";
// import './Header.css';
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="my-4" style={{ marginLeft: 0 }}>
      <nav className="navbar navbar-expand-xl navbar-light bg-white fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-left">
          <a className="navbar-brand logo me-auto">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </a>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>*/}
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse1"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarCollapse1"
          >
            <div className="navbar-nav">
              <div className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:110}}>
              <Link to="/aboutus" className="nav-link scrollto">
                   About Us
                   </Link>
                <li className="nav-item dropdown" style={{marginLeft:10}}>
               
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Students
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        style={{ color: "#009345" }}
                        to="studentHowitswork"
                      >
                        How it Works
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown" style={{marginLeft:10}}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Companies
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="company" style={{ color: "#009345" }}>
                        How it Works
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown" style={{marginLeft:10}}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Universities
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      {" "}
                      <Link to="/universites" style={{ color: "#009345" }}>
                        How it Works
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown" style={{marginLeft:10}}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Startups
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      {" "}
                      <Link to="/company" style={{ color: "#009345" }}>
                        How it Works
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <a
            href="#about"
            className="get-started-btn scrollto"
            className="btn mt-2"
            id="project"
            style={{
              /* padding: '8px 25px', */
              /* height: '7px', */
              marginLeft: "30px",
              background: "#009345",
              color: "#fff",
              borderRadius: "4px",
              padding: "5px 25px",
              whiteSpace: "nowrap",
              transition: "0.3s",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            Post a Project
          </a>
          
          <Link
            to="/signup"
            className="get-started-btn scrollto"
            className="btn mt-2"
          
            style={{
              /* padding: '8px 25px', */
              /* height: '7px', */
              marginLeft: "30px",
              background: "gray",
              color: "#fff",
              borderRadius: "4px",
              padding: "5px 25px",
              whiteSpace: "nowrap",
              transition: "0.3s",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            Sign Up
          </Link>
          
          <Link
            to="/signin"
            className="get-started-btn scrollto"
            className="btn mt-2"
           
            style={{
              /* padding: '8px 25px', */
              /* height: '7px', */
              marginLeft: "30px",
              background: "#009345",
              color: "#fff",
              borderRadius: "4px",
              padding: "5px 25px",
              whiteSpace: "nowrap",
              transition: "0.3s",
              fontSize: "14px",
              fontWeight: 600,
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            Sign In
          </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
