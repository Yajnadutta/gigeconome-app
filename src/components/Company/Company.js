import React from "react";
import "./company.css";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import How2work from '../../images/how2work.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About_usfour from '../../images/AboutUs/aboutus-04.png';
class Company extends React.Component {
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
            <div id="company_text">
            COMPANIES: WORK WITH OUR STUDENT TALENTS
            </div>
          </h1>
        </section>
        {/* End Hero */}
        <main id="main">
          <section
            id="clients"
            className="clients"
            style={{ marginTop: "-1%" }}
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n  .cnterbtn{\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 4%;\n  }\n\n  .btnalgnhtw{\n     display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 4%;\n  }\n\n\n",
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
                {" "}
                How it Works{" "}
              </h2>
              <br />
              <img
                style={{ marginLeft: "7%", width: "86%", marginTop: "3%" }}
                src={How2work}
                alt=""
                className="img-fluid"
              />
              <div className="row">
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
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <span
                    className="btn btn-primary mt-5"
                    style={{
                      background: "#009345",
                      border: "none",
                      borderRadius: "1px",
                      fontSize: "22px",
                      letterSpacing: "1px" /* fontFamily: 'fantasy', */,

                      marginRight: "4%",
                      paddingLeft: "2%",
                      paddingRight: "2%",
                    }}
                  >
                    
                    GET MATCHED TO TALENT
                  </span>
                </div>
                <div className="col-md-5">
                <div id="explore">
                  <span
                    className="btn btn-primary mt-5"
                    style={{
                      background: "#009345",
                      border: "none",
                      borderRadius: "1px",
                      fontSize: "22px",
                      letterSpacing: "1px",
                      paddingLeft: "2%",
                      paddingRight: "2%",
                    }}
                  >
                    
                    EXPLORE OUR TALENT POOL
                    
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
              <hr style={{ border: "0px solid #009345", opacity: "inherit" }} />
              <div className="row">
                <div className="col-md-5" >
                  <h2
                    style={{
                      fontSize: "45px",
                      letterSpacing: "4px",
                      textAlign: "right",
                      marginRight: "9%",
                      color: "#000",
                    }}
                    
                  >
                    <div id="gigecono">
                    GigeconoMe -{" "}
                    </div>
                  </h2>
                </div>
                <div className="col-md-7">
                  <p style={{ fontSize: "25px" }}>
                  <div id="gigecono">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris id lorem nec lorem sagittis congue.
                    </div>
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
                  <div
                    id="carousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                    data-interval={5000}
                  >
                   <img src={About_usfour} id="student_three"/>
                   
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
                    paddingLeft: "2%",
                    paddingRight: "2%",
                  }}
                >
                  SIGN UP
                </span>
              </div>
              <hr style={{ border: "0px solid #009345", opacity: "inherit" }} />
            </div>
          </section>
          {/* End Clients Section */}
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="fade-up">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .boxxlr{\n      border: 0px solid green;\n      /*background: #dcdedd;*/\n      margin-right: 3%;\n    margin-bottom: 3%;\n    color: #000;\n    }\n\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;margin-left: 12%\n}\n.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;cursor: pointer;\n}\n\n\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-stretch">
                  <div className="content" style={{ marginTop: "-5%" }}>
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "6px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: 600,
                        marginLeft: "22%",
                      }}
                    >
                      {" "}
                      <div id="exp">
                      EXPLORE OUR INCLUSIVE AND DIVERSE POOL OF TALENTS{" "}
                    </div>
                    </h2>
                    <br />
                    <div id="icons">
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "16%",
                      }}
                    >
                      <div className="col-md-2 boxxlr">
                      <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{ padding: "8%", color: "green" }}
                            class="fa fa-briefcase fa-5x"
                          />
                          <h4 className="boxclrtitle">Ecommerce</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                           <i
                            style={{ padding: "8%", color: "green" }}
                            class="fa fa-laptop fa-5x"
                          />
                          <h4 className="boxclrtitle">Developers</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                           <div id="barr">
                         <i
                            style={{ padding: "8%", color: "green" }}
                            class="fa fa-id-card-o fa-5x"
                          />
                          
                          <h4 className="boxclrtitle">Barristers</h4>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{ padding: "8%", color: "green" }}
                            className="fa fa-american-sign-language-interpreting fa-5x"
                          />
                          <h4 className="boxclrtitle">Graphic Designer</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <div id="finance">
                          <i
                            style={{
                              padding: "8%",
                              color: "green",
                              marginLeft: "-9%",
                              
                            }}
                            
                            className="fa fa-line-chart fa-5x"
                          />
                          </div>
                          <h4 className="boxclrtitle">Finance</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "16%",
                      }}
                    >
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{ padding: "8%", color: "green" }}
                            className="fa fa-clock-o fa-5x"
                          />
                          <h4 className="boxclrtitle">Data Design</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{
                              padding: "8%",
                              color: "green",
                              marginLeft: "4%",
                            }}
                            className="fa fa-envelope-open fa-5x"
                          />
                          <h4 className="boxclrtitle">Cyber Security</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{ padding: "8%", color: "green" }}
                            className="fa fa-cog fa-5x"
                          />
                          <h4 className="boxclrtitle">Developers</h4>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div id="#barr_two">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                           <div id="barris">
                          <i
                            style={{
                              padding: "8%",
                              color: "green",
                              marginLeft: "-7%",
                            }}
                            className="fa fa-id-card-o fa-5x"
                          />
                          </div>
                         
                          <h4 className="boxclrtitle">Barristers</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 boxxlr">
                        <div
                          className="icon-box"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          style={{ padding: "6%" }}
                        >
                          <i
                            style={{ padding: "8%", color: "green" }}
                            className="fa fa-folder-open fa-5x"
                          />
                          <h4 className="boxclrtitle">Ecommerce</h4>
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
                  }}
                >
                  GET STARTED
                </span>
              </div>
              </div>
            </div>
          </section>
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
      <Footer />
      </div>
    );
  }
}
export default Company;
