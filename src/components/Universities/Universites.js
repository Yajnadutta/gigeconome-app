import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import About_usfour from '../../images/AboutUs/aboutus-04.png';
import How2work from '../../images/how2work.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './universites.css';
class Universites extends React.Component {
  render() {
    return (
      <div>
         {/* ======= Header ======= */}
     <Header />
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
            <div id="university">
            UNIVERSITY : WORK WITH OUR STUDENT TALENTS
            </div>
          </h1>
        </section>
        {/* End Hero */}
        <main id="main">
          <section
            id="clients"
            className="clients"
            style={{ marginTop: "-5%" }}
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
                style={{ marginLeft: "7%", width: "90%", marginTop: "3%" }}
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
                  REQUEST ADDITIONAL INFO
                </span>
              </div>
              <hr style={{ border: "1px solid #009345" }} />
            </div>
          </section>
          {/* ======= Clients Section ======= */}
          <section
            id="clients"
            className="clients"
            style={{ marginTop: "-6%" }}
          >
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-md-5">
                  <h2
                    style={{
                      fontSize: "54px",
                      letterSpacing: "4px",
                      textAlign: "right",
                      marginRight: "9%",
                      color: "#000",
                    }}
                  >
                    <div id ="gige">
                    GigeconoMe -{" "}
                    </div>
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
                  <div
                    id="carousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                    data-interval={5000}
                  >
                   <img src={About_usfour}  id="aboutus_four"/>
                  </div>
                  {/* /.carousel */}
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
                  JOIN OUR UNIVERSITY NETWORK
                </span>
              </div>
              <hr style={{ border: "1px solid #009345" }} />
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
                    "\n    .boxxlr{\n      border: 0px solid green;\n      /*background: #dcdedd;*/\n      margin-right: 1%;\n    margin-bottom: 1%;\n    color: #000;\n    }\n\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}\n\n\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-stretch">
                  <div className="content" style={{ marginTop: "-5%" }}>
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "2px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "normal",
                      }}
                    >
                      {" "}
                      EXPLORE THE VARIOUS WAYS GIGECONOME CAN SUPPORT
                    </h2>
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "2px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "normal",
                      }}
                    >
                      {" "}
                      YOUR STUDENTS AND MAKE THEM READY FOR THE
                    </h2>
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "2px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "normal",
                      }}
                    >
                      {" "}
                      WORKFORCE MARKET{" "}
                    </h2>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
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
                        {" "}
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
                        {" "}
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
                  EXPLORE
                </span>
              </div>
              <hr style={{ border: "1px solid #009345" }} />
            </div>
          </section>
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="fade-up">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .boxxlr{\n      border: 0px solid green;\n      /*background: #dcdedd;*/\n      margin-right: 1%;\n    margin-bottom: 1%;\n    color: #000;\n    }\n\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}\n\n\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-stretch">
                  <div className="content" style={{ marginTop: "-5%" }}>
                    <h2
                      style={{
                        fontSize: "30px",
                        letterSpacing: "2px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: "normal",
                      }}
                    >
                      {" "}
                      FAQ{" "}
                    </h2>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <h3>Lorem ipsum dolor?</h3>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec. malesuada nec, congue
                          in augue elit.Lorem ipsum tempor non malesuada nec.
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec.
                        </p>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec..
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h3>Lorem ipsum dolor?</h3>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec. malesuada nec, congue
                          in augue elit.Lorem ipsum tempor non malesuada nec.
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec.
                        </p>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec..
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h3>Lorem ipsum dolor?</h3>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec. malesuada nec, congue
                          in augue elit.Lorem ipsum tempor non malesuada nec.
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec.
                        </p>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec..
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h3>Lorem ipsum dolor?</h3>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec. malesuada nec, congue
                          in augue elit.Lorem ipsum tempor non malesuada nec.
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec.
                        </p>
                        <p style={{ textAlign: "justify", fontSize: "13px" }}>
                          Lorem ipsum tempor non malesuada nec, congue in augue
                          elit.Lorem ipsum tempor non malesuada nec. Lorem ipsum
                          tempor non malesuada nec, congue in augue elit.Lorem
                          ipsum tempor non malesuada nec..
                        </p>
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
                  MORE FAQs
                </span>
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
export default Universites;
