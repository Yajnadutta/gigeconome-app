import React, { Component } from "react";
import "./style.css";
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import About_usfour from '../../images/AboutUs/aboutus-04.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class StudentHowitswork extends Component {
  render() {
    return (
      <div>
        {/* ======= Header ======= */}
    <Header />
      {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section
          className="d-flex align-items-center"
          style={{ clear: "both" }}
        >
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n  .centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n",
            }}
          />
          <img
            className="img-fluid"
            src="https://maintec.com/gigeconome/assets/img/student.png"
            alt="..."
          />
          <h1
            className="centered"
            style={{
              textAlign: "center",
              fontWeight: 900,
              letterSpacing: "4px",
              width: "100%",
            }}
          >
            STUDENTS: WORK WITH OUR STUDENT TALENTS
          </h1>
        </section>
        {/* End Hero */}
        <main id="main">
          <div id="clients" className="clients">
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n  .cnterbtn{\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 4%;\n  }\n\n",
              }}
            />
            <div className="container mt-5" data-aos="zoom-in">
              <h2
                style={{
                  fontSize: "54px",
                  letterSpacing: "6px",
                  textAlign: "center",
                  color: "#000",
                }}
               
              >
                <div  id="how">
                {" "}
                How it Works{" "}
                </div>
              </h2>
              <br />
              <img
                style={{ marginLeft: "7%", width: "86%", marginTop: "3%" }}
                src="assets/img/how2work.png"
                alt=""
                className="img-fluid"
              />
              <div id="how_one">
              <div className="row" >
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 01
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 02
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 03
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Lorem ipsum tempor non malesuada nec, congue in augue
                    elit.Lorem ipsum tempor non malesuada nec...
                  </p>
                </div>
                <div className="col-md-3">
                  <h3 style={{ textAlign: "center", fontFamily: "normal" }}>
                    Step 04
                  </h3>{" "}
                  <p
                    style={{
                      textAlign: "justify",
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
              <div className="cnterbtn">
                <span
                  className="btn btn-primary"
                  style={{
                    background: "#009345",
                    border: "none",
                    borderRadius: "1px",
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "fantasy",
                  }}
                >
                  CREATE AN ACCOUNT
                </span>
              </div>
              <hr style={{ border: "1px solid #009345", opacity: "inherit" }} />
            </div>
          </div>
          {/* ======= Clients Section ======= */}
          <div id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-md-5">
                  <h2
                    style={{
                      /*fontSize: '54px', */ letterSpacing: "4px",
                      textAlign: "right",
                      marginRight: "9%",
                      color: "#000",
                    }}
                  >
                    GigeconoMe -{" "}
                  </h2>
                </div>
                <div className="col-md-7">
                  <p style={{ fontSize: "25px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris id lorem nec lorem sagittis congue.
                  </p>
                </div>
                <br />
              </div>
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2 text-center aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 1
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit ametconsectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 2
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 3
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 4
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 5
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h3 style={{ fontFamily: "none", color: "#000" }}>
                        USP - 6
                      </h3>
                      <p
                        style={{
                          textAlign: "justify",
                          marginLeft: "10%",
                          marginRight: "6%",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.sed diam nonummy nibh..
                        <br />
                        <span style={{ color: "#009345", cursor: "pointer" }}>
                          KNOW MORE
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  {/* <img src="assets/img/section2imgdemo.png" alt="" class="img-fluid" style="height: 412px"> */}
                  {/*
    ####################################################
    C A R O U S E L
    ####################################################
    */}
                    
                  
                 <img src={About_usfour} id="student_three"/>
                </div>
              </div>
              <div className="cnterbtn">
                <span
                  className="btn btn-primary"
                  style={{
                    background: "#009345",
                    border: "none",
                    borderRadius: "1px",
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "fantasy",
                  }}
                  id="start"
                >
                  START EARNING
                </span>
              </div>
              <hr style={{ border: "1px solid #009345", opacity: "inherit" }} />
            </div>
          </div>
          {/* End Clients Section */}
          {/* ======= About Section ======= */}
          <div id="clients" className="clients">
            <div className="container" data-aos="fade-up">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .boxxlr{\n      border: 0px solid green;\n      background: #dcdedd;\n      margin-right: 4%;\n    margin-bottom: 4%;\n    color: #000;\n    }\n.boxxlr:hover {\n    border: 0px solid green;\n    background: green;\n    margin-right: 4%;\n    margin-bottom: 4%;\n     color: #fff;\n}\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}\n\n\n\n/*.boxalgn  { color: green;float: right; }\n.boxalgn1  { color: #fff;float: right; }\n*/\n/*.boxalgn:hover  { color: #fff;float: right; }*/\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-stretch">
                  <div className="content">
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "6px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      EXPLORE HOW TO USE GIGECONOME{" "}
                    </h2>
                    <h4
                      style={{
                        fontSize: "16px",
                        letterSpacing: "2px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      To Gain Experience, Build Network and still Get Paid{" "}
                    </h4>
                    <br />
                    
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-briefcase fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">Internship</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr" id="vir">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-laptop fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">Virtual Internship</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }} id="vir"
                        >
                          <i
                            style={{ fontSize: "40px", marginBottom: "4px" }}
                            className="fa fa-id-card-o fa-3x"
                          />
                          <h4 className="boxclrtitle" id="work_text" >Work Experience</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-american-sign-language-interpreting fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">Work Placement</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-clock-o fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">Part Time Roles</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr" id="side">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-envelope-open fa-3x" />
                          <h4  className="boxclrtitle" id="work_text" >Side Gig Opportunities</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr" id="side">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-cog fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">
                            Course Work Related Projects
                          </h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr" id="vir">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i className="fa fa-folder-open fa-3x" />
                          <h4 className="boxclrtitle" id="work_text">Portfolio Building</h4>
                          <p
                            className="boxclrtitle"
                            style={{ fontWeight: "normal" }}
                          >
                            Voluptatum deleniti atque corrupti quos dolores et
                            quas molestias{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cnterbtn">
                <span
                  className="btn btn-primary"
                  style={{
                    background: "#009345",
                    border: "none",
                    borderRadius: "1px",
                    fontSize: "22px",
                    letterSpacing: "1px",
                    fontFamily: "fantasy",
                    marginLeft: "-2%",
                    marginBottom: "2%",
                  }}
                >
                  GET STARTED
                </span>
              </div>
            </div>
          </div>
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
       <Footer />
      </div>
    );
  }
}
export default StudentHowitswork;
