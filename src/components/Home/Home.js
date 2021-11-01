import './style.css';
import './navbar.css';
import Logo from "../../images/logo.png";
import Aboutus from "../../images/aboutus.png";
import Students from "../../images/students.png";
import Universities from "../../images/universites.png";
import Startup from "../../images/startup.png";
import Companies from "../../images/companies.png";
import How2work from "../../images/how2work.png";
import Programming from "../../images/gigeconome25-13.png";
import Writing from "../../images/gigeconome25-14.png";
import Design from "../../images/gigeconome25-15.png";
import Adminstrative from "../../images/gigeconome25-16.png";
import Sales from "../../images/gigeconome25-17.png";
import Other from "../../images/gigeconome25-18.png";
import Getmatched from "../../images/getmatched.png";

import Button1 from "../../images/button101.png";
import Button2 from "../../images/button111.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Header from "../Header/Header";
import Navone from './Navone';
import Footer from "../Footer/Footer";
import Nav from "./Nav";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "150%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function myFunction() {
  var x = document.getElementById("myTopna");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Home() {
  
  return (
    <div>
     
      {/* ======= Hero Section ======= */}
     
      <Header />
        
      <section >
      
      <Nav />
        {/*}
        <nav
          className="navbar navbar-expand-sm navbar-light mt-3"
          data-toggle="affix"
          style={{
            paddingBottom: "0.2%",
            paddingTop: "0.3%",
            height: "50px",
            backgroundColor: "#565455",
          }}
        >
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap text-white ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse text-center "
              id="navbarsExample11"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      textDecoration: "None",
                    }}
                    href="#"
                  >
                    Programming &amp; Development &nbsp;&nbsp;&nbsp;
                    |&nbsp;&nbsp;{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#fff", fontSize: "12px" }}
                    href="#"
                  >
                    Writing &amp; Translation &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#fff", fontSize: "12px" }}
                    href="#"
                  >
                    Design &amp; Art &nbsp;&nbsp;&nbsp; |{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#fff", fontSize: "12px" }}
                    href="#"
                  >
                    Administrative &amp; Secretary &nbsp;&nbsp;&nbsp;
                    |&nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#fff", fontSize: "12px" }}
                    href="#"
                  >
                    Sales &amp; Marketing &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#fff", fontSize: "12px" }}
                    href="#"
                  >
                    Other
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </a>
                </li>
                <li className="nav-item" id="search">
                  <div className="input-group">
                    <div className="form-outline">
                      <input
                        class="searchbar"
                        type="text"
                        placeholder="Search.."
                        name=""
                      />
                      <button class="serch-button" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                  */}
      </section>
      {/* ======= Hero Section ======= */}
      {/* ======= Hero Section ======= */}
      <div >
        <img className="img-fluid" id="gige" style={{marginTop: '-4%', width: '100%'}} src="https://maintec.com/gigeconome/assets/img/hero-bg.jpg" alt="..." />
        {/* <h1 class="centered" style="text-align: center;font-weight: 900;letter-spacing: 4px;width: 100%;" >STUDENTS: WORK WITH OUR STUDENT TALENTS</h1>
 */}
        <div className="container centered">
          <div className="row">
            <div className="col-xl-6"  style={{marginTop:-500}} >
              <h1 style={{color: '#000 !important', fontWeight: '400 !important'}} id="oppo">  Providing further </h1>
              <h1 style={{color: '#009345', letterSpacing: '10px'}} id="oppn">OPPORTUNITIES</h1>
              <h1 style={{color: '#000 !important', fontWeight: '400 !important'}} id="oppe">for professionals</h1>
              <h1 style={{color: '#000 !important', fontWeight: '400 !important'}} id="oppt">through the reach of</h1>
              <h1 style={{color: '#009345', letterSpacing: '10px'}} id="oppi">TECHNOLOGY.</h1>
              <a href="#about" className="btn-get-started scrollto" id ="know" style={{padding: '0px 30px !important', background: '#fff', color: '#009345', border: '1px solid gray'}}> KNOW MORE</a><br /><br />
              <img src={Button1} id="btnone" style={{cursor: 'pointer'}} />
              <img src={Button2} id ="btntwo" style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* ======= About Section ======= */}
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-4">
              <span className="about-head">GigeconoMe - </span>
            </div>
            <div className="col-lg-8">
              <span className="about-content">
                Clearing Pathways to good first jobs by connecting school,
                students and employers.
              </span>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="content col-xl-6 d-flex align-items-stretch">
              <div className="content">
                <img width="100%" src={Aboutus} />
              </div>
            </div>
            <div className="col-xl-6 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <h4>Debiased Selection Process</h4>
                    <p>
                      Our non-conventional selection process fosters diversity
                      &amp; inclusion for all our students andensures that all
                      decisions are based purely on skills.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <h4>Smart Matching Technology</h4>
                    <p>
                      Intelligent matching and searching functionality to unlock
                      talents &amp; ensure that you match, screen and contact
                      right students in minutes to build lasting relationships.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <h4>Next Generation Talent pool</h4>
                    <p>
                      Pool of diverse talent ready to complete one-off tasks,
                      internships,gigs, short&amp; long-term projects, part time
                      or long-term opportunities or address skills shortages.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <h4>Fully VerifiedTalents</h4>
                    <p>
                      Thorough vetting process ensures all students have been
                      fully screened to maintain integrity and signedcode of
                      conduct ensures that all our students can be fully
                      trusted.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <h4>One-Stop Platform</h4>
                    <p>
                      Easy to use &amp; secure suite of cutting-edge tools in
                      one platformto manageeach step of the journey from
                      reviewing profiles, shortlisting, contracts, payments
                      &amp; review.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <h4>Clearing pathways to good first jobs </h4>
                    <p>
                      Aligning study &amp; work by providing students ability to
                      gain real life work experience, build portfolios and
                      develop employability skills for linear paths to good
                      first jobs.
                    </p>
                    <a href="#">
                      know more{" "}
                      <i
                        style={{ color: "green", fontSize: 15 }}
                        className="fa fa-arrow-right icon-css"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      
      <div id="clients" className="clients">
        <div className="container mt-5" data-aos="zoom-in">
          <hr style={{ border: "1px solid #009345" }} />
          <h2
            style={{
              fontSize: "54px",
              letterSpacing: "6px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {" "}
            How it Works{" "}
          </h2>
          <br />
          <div >
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3" >
              <img
                style={{ marginLeft: "44%" }}
                src={Students}
                alt=""
                className="img-fluid"
              />
              <h2
                style={{
                  letterSpacing: "2px",
                  textAlign: "center",
                  color: "#000",
                }}
                id="students"
              >
                STUDENTS
              </h2>
              <p style={{ textAlign: "center" }} id="knowmoree">
                <span
                  className="btn btn-primary nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-6"
                  style={{
                    background: "#fff",
                    color: "#009345",
                    cursor: "pointer",
                    fontSize: "12px",
                    borderRadius: "1px",
                    width: "32%",
                    padding: "0.5%",
                    border: "1px solid gray",
                    marginLeft: "34%",
                  }}
                >
                  knowMore
                </span>
              </p>
            </li>
            <li className="nav-item col-3">
              <img
                style={{ marginLeft: "45%" }}
                src={Universities}
                alt=""
                className="img-fluid"
              />
              <h2
                style={{
                  letterSpacing: "2px",
                  textAlign: "center",
                  color: "#000",
                }}
                id="students"
              >
                UNIVERSITIES
              </h2>
              <p style={{ textAlign: "center" }} id="knowmoree">
                <span
                  className="btn btn-primary nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-7"
                  style={{
                    background: "#fff",
                    color: "#009345",
                    cursor: "pointer",
                    fontSize: "12px",
                    borderRadius: "1px",
                    width: "32%",
                    padding: "0.5%",
                    border: "1px solid gray",
                    marginLeft: "34%",
                  }}
                >
                  knowMore
                </span>
              </p>
            </li>
            <li className="nav-item col-3">
              <img
                style={{ marginLeft: "41%" }}
                src={Startup}
                alt=""
                className="img-fluid"
              />
              <h2
                style={{
                  letterSpacing: "2px",
                  textAlign: "center",
                  color: "#000",
                }}
                id="students"
              >
                STARTUPS
              </h2>
              <p style={{ textAlign: "center" }} id="knowmoree">
                <span
                  className="btn btn-primary nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-8"
                  style={{
                    background: "#fff",
                    color: "#009345",
                    cursor: "pointer",
                    fontSize: "12px",
                    borderRadius: "1px",
                    width: "32%",
                    padding: "0.5%",
                    border: "1px solid gray",
                    marginLeft: "34%",
                  }}
                >
                  knowMore
                </span>
              </p>
            </li>
            
            <li className="nav-item col-3">
              <img
                style={{ marginLeft: "44%" }}
                src={Companies}
                alt=""
                className="img-fluid"
              />
              <h2
                style={{
                  letterSpacing: "2px",
                  textAlign: "center",
                  color: "#000",
                }}
                id="students"
              >
                COMPANIES
              </h2>
              <p style={{ textAlign: "center" }} id="knowmoree">
                <span 
                  className="btn btn-primary nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-9"
                  style={{
                    background: "#fff",
                    color: "#009345",
                    cursor: "pointer",
                    fontSize: "12px",
                    borderRadius: "1px",
                    width: "32%",
                    padding: "0.5%",
                    border: "1px solid gray",
                    marginLeft: "34%",
                  }}
                  
                >
                  knowMore
                </span>
              </p>
            </li>
            
          </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-6">
              <div className="row">
                <img
                  style={{ marginLeft: "7%", width: "90%", marginTop: "3%" }}
                  src={How2work}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 01
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "11%",
                    }}
                  >
                    Step 02
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "23%",
                    }}
                  >
                    Step 03
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "35%",
                    }}
                  >
                    Step 04
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-7">
              <div className="row">
                <img
                  style={{ marginLeft: "7%", width: "90%", marginTop: "3%" }}
                  src="assets/img/how2work.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 01
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "11%",
                    }}
                  >
                    Step 02
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "23%",
                    }}
                  >
                    Step 03
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "35%",
                    }}
                  >
                    Step 04
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-8">
              <div className="row">
                <img
                  style={{ marginLeft: "7%", width: "90%", marginTop: "3%" }}
                  src="assets/img/how2work.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 01
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "11%",
                    }}
                  >
                    Step 02
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "23%",
                    }}
                  >
                    Step 03
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "35%",
                    }}
                  >
                    Step 04
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-9">
              <div className="row">
                <img
                  style={{ marginLeft: "7%", width: "90%", marginTop: "3%" }}
                  src="assets/img/how2work.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 01
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "11%",
                    }}
                  >
                    Step 02
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "23%",
                    }}
                  >
                    Step 03
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "normal",
                      marginLeft: "35%",
                    }}
                  >
                    Step 04
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      marginLeft: "16%",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="clients">
        <div className="container mt-5" data-aos="zoom-in">
          <hr style={{ border: "1px solid #009345" }} />
          <h2
            style={{
              fontSize: "54px",
              letterSpacing: "4px",
              textAlign: "center",
              color: "#000",
            }}
          >
            Job Categories{" "}
          </h2>
          <br />
          <div className="row">
            <div
              className="col-md-3"
              style={{
                marginLeft: "4%",
                marginRight: "4%",
                marginBottom: "4%",
              }}
            >
              <div className="card">
                <div className="text-center">
                  {" "}
                  <img
                    src={Programming}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#000",
                      fontSize: "14px",
                      marginTop: "9%",
                    }}
                  >
                    PROGRAMMING &amp; DEVELOPMENT
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            >
              <div className="card" >
                <div className="text-center">
                  {" "}
                  <img
                    src={Writing}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 600, color: "#000", fontSize: "14px" }}
                  >
                    WRITING &amp; TRANSLATION
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            >
              <div className="card" id="card_two">
                <div className="text-center">
                  {" "}
                  <img
                    src={Design}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 600, color: "#000", fontSize: "14px" }}
                  >
                    DESIGN &amp; ART
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            >
              <div className="card" id="card_two">
                <div className="text-center">
                  {" "}
                  <img
                    src={Adminstrative}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 600, color: "#000", fontSize: "14px" }}
                  >
                    ADMINISTRATIVE &amp; SECRETRARY
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            >
              <div className="card" id="card_two">
                <div className="text-center">
                  {" "}
                  <img
                    src={Sales}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 600, color: "#000", fontSize: "14px" }}
                  >
                    SALES &amp; MARKETING
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              style={{ marginLeft: "4%", marginRight: "4%" }}
            >
              <div className="card" id="card_two">
                <div className="text-center">
                  {" "}
                  <img
                    src={Other}
                    style={{
                      height: "235px",
                      marginBottom: "10%",
                      width: "80%",
                    }}
                  />{" "}
                </div>
                <div className="text-center">
                  <span
                    style={{ fontWeight: 600, color: "#000", fontSize: "14px" }}
                  >
                    OTHER
                  </span>{" "}
                  <span className="text-success">
                    <br />
                    <span
                      className="btn btn-primary"
                      style={{
                        background: "#000",
                        color: "#fff",
                        marginTop: "8%",
                        border: "none",
                      }}
                    >
                      View
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12" style={{ marginTop: "2%" }} >
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                id="get"
                src={Getmatched}
              />
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
          <Card style={{ width: '18rem',height:100,backgroundColor:'white',border:'none' }}>
              <Card.Img variant="top" src={Students1} />
              <Card.Body>
                <Card.Title className="text-center"> <Button variant="primary">Go somewhere</Button></Card.Title>
                
               
              </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
            <Card style={{ width: '18rem',height:100,backgroundColor:'white',border:'none' }}>
              <Card.Img variant="top" src={Students1} />
              <Card.Body>
                <Card.Title className="text-center mt-0"> <Button variant="primary">Go somewhere</Button></Card.Title>
                
               
              </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
            <Card style={{ width: '18rem',height:100,backgroundColor:'white',border:'none' }}>
              <Card.Img variant="top" src={Students1} />
              <Card.Body>
                <Card.Title className="text-center mt-0"> <Button variant="primary">Go somewhere</Button></Card.Title>
                
               
              </Card.Body>
            </Card>
            </div>
            <div className="col-sm-3">
            <Card style={{ width: '18rem',height:100,backgroundColor:'white',border:'none' }}>
              <Card.Img variant="top" src={Students1} />
              <Card.Body>
                <Card.Title className="text-center mt-0"> <Button variant="primary">Go somewhere</Button></Card.Title>
                
               
              </Card.Body>
            </Card>
            </div>
        </div>
        </div>
      */}
     {/* ======= Tabs Section ======= */}
     <div id="tabs" className="tabs">
        <div className="container" data-aos="fade-up">
          <hr style={{border: '1px solid green', margin: '42px 0px'}} /> 
          <div style={{textAlign:'center'}}>
            <h1 >Selected Seller Profile</h1>
          </div>
          <ul className="nav nav-tabs row d-flex mobile-tab mt-5">
            <li className="nav-item col-3" id="mobile_tab">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" style={{border: 'none'}}>
                <h4 className="d-none d-lg-block" id="tab_text">Mobile App Developers</h4>
              </a>
            </li>
            <li className="nav-item col-2" id="mobile_tab">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" style={{border: 'none'}}>
                <h4 className="d-none d-lg-block" id="tab_text">Graphic Designers</h4>
              </a>
            </li>
            <li className="nav-item col-2" id="mobile_tab">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3" style={{border: 'none'}}>
                <h4 className="d-none d-lg-block" id="tab_text">Digital Marketing</h4>
              </a>
            </li>
            <li className="nav-item col-3" id="mobile_tab">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4" style={{border: 'none'}}>
                <h4 className="d-none d-lg-block" id="tab_text">Product Designers</h4>
              </a>
            </li>
            <li className="nav-item col-2"  id="mobile_tab" >
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5" style={{border: 'none'}}>
                <h4 className="d-none d-lg-block" id="tab_text">Legal Researchers</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">          
              {/* Grid row */}
              <div className="row">
                <div className="container mt-5" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-26.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Amanda Gabriel</a>
                          </h4>
                          <small>Java Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Amanda Gabriel dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius .</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Amanda</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1 h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-27.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Justin Michela</a>
                          </h4><small>Python Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Justin Michela dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Justin</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1  h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-28.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Adrien Valesa</a>
                          </h4><small>PHP Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Adrien Valesa dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                            odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Adrien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Grid row */}
            </div>
            <div className="tab-pane" id="tab-2">
              {/* Grid row */}
              <div className="row">
                <div className="container mt-5" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-26.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Harshit Nema</a>
                          </h4>
                          <small>Java Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Amanda Gabriel dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius .</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Amanda</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1 h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-27.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Justin Michela</a>
                          </h4><small>Python Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Justin Michela dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Justin</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1  h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-28.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Adrien Valesa</a>
                          </h4><small>PHP Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Adrien Valesa dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                            odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Adrien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              {/* Grid row */}
              <div className="row">
                <div className="container mt-5" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-26.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Amanda Gabriel</a>
                          </h4>
                          <small>Java Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Amanda Gabriel dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius .</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Amanda</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1 h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-27.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Justin Michela</a>
                          </h4><small>Python Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Justin Michela dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Justin</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1  h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-28.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Adrien Valesa</a>
                          </h4><small>PHP Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Adrien Valesa dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                            odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Adrien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              {/* Grid row */}
              <div className="row">
                <div className="container mt-5" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-26.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Amanda Gabriel</a>
                          </h4>
                          <small>Java Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Amanda Gabriel dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius .</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Amanda</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1 h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-27.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Justin Michela</a>
                          </h4><small>Python Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Justin Michela dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Justin</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                      <div className="card1  h-80">
                        <a href="#"><img className="card-img-top" src="assets/image/gigeconome25-28.jpg" alt="" /></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#" style={{color: '#009345'}}>Adrien Valesa</a>
                          </h4><small>PHP Developer</small>
                          <p className="card-text" style={{fontSize: '12px', marginTop: '2%'}}>Adrien Valesa dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
                            odio, gravida pellentesque urna varius vitae.</p>
                          <p>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>      <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>HTML </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Wordpress </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>PHP </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Java </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Python </span>
                            <span style={{background: '#f2f2f2', color: '#009345', fontSize: '10px', padding: '1%', marginRight: '4%'}}>Javascript </span>
                          </p>  
                        </div>
                      </div>
                      <div style={{background: '#009345', textAlign: 'center', fontSize: '18px', padding: '2%', fontFamily: '"Raleway"', boxShadow: '1px 1px 4px 1px'}}>
                        <span style={{color: '#fff', cursor: 'pointer'}}>View Adrien</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="assets/image/SECTION4.png" />
            </div>
          </div>
          {/* End Tabs Section */}
        </div>
        
      </div>
      <hr
        className="about-bb"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      />
      <div className="container">
        <h2 className="section-heading">Future of Work</h2>
        <div className="row" style={{ display: "flex" }}>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{
                padding: "6%",
                marginBottom: "35px",
                paddingBottom: "42px",
              }}
              id="box"
            >
              <i className="fa fa-briefcase fa-5x" id="fa"/>
              <h4 className="boxclrtitle" id="text">Internship</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                In an ever-competitive marketplace, secure the best internship
                opportunities and gain real industry and valuable hands-on
                experienceacross all sectors and geographical locations.
              </p>
              {/*  <p  class="palgnbx" style="color: green"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></p> */}
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" 
              data-aos="fade-up"
              data-aos-delay={100}
              style={{
                padding: "6%",
                marginBottom: "35px",
                paddingBottom: "39px",
              }}
              id="box"
            >
              <i
                style={{ marginBottom: "4px" }}
                className="fa fa-id-card-o fa-5x" id="fa"
              />
              <h4 className="boxclrtitle" id="text">Work Experience</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                <div id="work">
                Access to bothnewly formed Startupsand Large enterprises,
                provides the perfect opportunity to acquire new skills and build
                experience eitherthroughvoluntary orpaid positions.
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" 
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ padding: "6%", marginBottom: "35px" }}
              id="box"
            >
              <i className="fa fa-american-sign-language-interpreting fa-5x" id="fa" />
              <h4 className="boxclrtitle" id="work" id="text">Work Placement</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                <div id="work_one">
                Gain significant on-the-job experience as well as apply your
                knowledge and skills in a work setting of your chosen line of
                study or industry and increase competencies sought after by
                employers.
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{
                padding: "6%",
                marginBottom: "35px",
                paddingBottom: "38px",
              }}
              id="box"
            >
              <i
                style={{ marginBottom: "4px" }}
                className="fa fa-envelope-open fa-5x" id="fa"
              />
              <h4 className="boxclrtitle" id="text">Gig Opportunities</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                Wide range of flexible Gig opportunities to make the most of
                spare times, earn money and gain valuable real-life experiences
                by securing freelance works or short-term day-rate contracts.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" id="fa"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ padding: "6%", marginBottom: "35px" }}
              id="box"
            >
              <i className="fa fa-clock-o fa-5x" id="fa" />
              <h4 className="boxclrtitle" id="text">Part Time Roles</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                GigeconoMe provides you the opportunity to not only gain
                financial protection during your studies but also gain a variety
                of employability find part-time opportunities directly relevant
                to definite career plans.
              </p>
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" id="fa"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ padding: "6%", marginBottom: "35px" }}
              id="box"
            >
              <i className="fa fa-cog fa-5x"id="fa" />
              <h4 className="boxclrtitle" id="text">Course Work Related Projects</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                <div id="course">
                Interested in inspiring real-life projects than those in current
                curriculum? Use GigeconoMe to find specific work-related
                activities and develop an understanding of work and develop
                skills employers want.
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" id="fa"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ padding: "6%", marginBottom: "35px" }}
              id="box"
            >
              <i className="fa fa-folder-open fa-5x" id="fa"/>
              <h4 className="boxclrtitle" id="text">Portfolio Building</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                Interested in inspiring real-life projects than those in current
                curriculum? Use GigeconoMe to find specific work-related
                activities and develop an understanding of work and develop
                skills employers want.
              </p>
            </div>
          </div>
          <div className="col-md-3 boxxlr">
            <div
              className="icon-box aos-init aos-animate downsec" 
              data-aos="fade-up"
              data-aos-delay={100}
              style={{
                padding: "6%",
                marginBottom: "35px",
                paddingBottom: "39px",
              }}
              id="box"
            >
              <i className="fa fa-laptop fa-5x" id="fa" />
              <h4 className="boxclrtitle" id="text">Virtual Internship</h4>
              <p className="boxclrtitle" id="text" style={{ fontWeight: "normal" }}>
                <div id="virtual">
                Access to bothnewly formed Startupsand Large enterprises,
                provides the perfect opportunity to acquire new skills and build
                experience eitherthroughvoluntary orpaid positions.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
     <Footer />
     <div>
        {/* Onload popup */}
        <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="onload">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title"><i className="fa fa-exclamation-circle" />Your title goes here</h4>
              </div>
              <div className="modal-body">
                Your content goes here
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/* popup end */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>
    </div>
  );
}

export default Home;
