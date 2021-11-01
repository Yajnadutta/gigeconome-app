import React, { Component } from "react";
import Logo from '../../images/logo.png';
import About_us from '../../images/AboutUs/aboutus-05.png';
import About_usfour from '../../images/AboutUs/aboutus-04.png';
import About_usthree from '../../images/AboutUs/aboutus-03.png';
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Aboutus extends Component {
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
            src={About_us}
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
            ABOUT US : GIGECONOME
          </h1>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
              <br />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  .cnterbtn{\n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 4%;\n  }\n\n",
                }}
              />
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2 text-center aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row" style={{ marginTop: "4%" }}>
                    <div className="col-sm-12">
                      <h3 style={{ textAlign: "left", fontWeight: "bold" }}>
                        GigeconoMe
                      </h3>
                      <p style={{ textAlign: "justify" }}>
                        The lorem ipsum gets its name from the Latin phrase
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet. which translates to “Nor is there anyone who
                        loves or pursues or desires to obtain pain of itself,
                        because it is pain.The lorem ipsum gets its name from
                        the Latin phrase Neque porro quisquam est qui dolorem
                        ipsum quia dolor sit amet. which translates to “Nor is
                        there anyone who loves or pursues or desires to obtain
                        pain of itself, because it is pain.The lorem ipsum gets
                        its name from the Latin phrase Neque porro quisquam est
                        qui dolorem ipsum quia dolor sit amet. which translates
                        to “Nor is there anyone who loves or pursues or desires
                        to obtain pain of itself, because it is pain.
                      </p>
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
                          SIGN UP
                        </span>
                      </div>
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
                   <img src={About_usfour} id="aboutus_four"/>
                  </div>
                  {/* /.carousel */}
                </div>
              </div>
              <hr style={{ border: "1px solid #009345", opacity: "inherit" }} />
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
                      VALUES{" "}
                    </h2>
                    <h5 style={{ textAlign: "center" }}>
                      Lorem ipsum tempor non malesuada nec, congue in augue
                      elit.{" "}
                    </h5>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6">
                            <h3 style={{ color: "#009147" }}>Value - 1</h3>
                            <p
                              style={{
                                textAlign: "justify",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              Lorem ipsum tempor non malesuada nec, congue in
                              augue elit.Lorem ipsum tempor non malesuada nec,
                              congue in augue elit.Lorem ipsum tempor non
                              malesuada nec, congue in augue elit.
                            </p>
                          </div>
                          <div className="col-md-6">
                            <h3 style={{ color: "#009147" }}>Value - 2</h3>
                            <p
                              style={{
                                textAlign: "justify",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              Lorem ipsum tempor non malesuada nec, congue in
                              augue elit.Lorem ipsum tempor non malesuada nec,
                              congue in augue elit.Lorem ipsum tempor non
                              malesuada nec, congue in augue elit.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h3 style={{ color: "#009147" }}>Value - 3</h3>
                            <p
                              style={{
                                textAlign: "justify",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              Lorem ipsum tempor non malesuada nec, congue in
                              augue elit.Lorem ipsum tempor non malesuada nec,
                              congue in augue elit.Lorem ipsum tempor non
                              malesuada nec, congue in augue elit.
                            </p>
                          </div>
                          <div className="col-md-6">
                            <h3 style={{ color: "#009147" }}>Value - 4</h3>
                            <p
                              style={{
                                textAlign: "justify",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              Lorem ipsum tempor non malesuada nec, congue in
                              augue elit.Lorem ipsum tempor non malesuada nec,
                              congue in augue elit.Lorem ipsum tempor non
                              malesuada nec, congue in augue elit.
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
                            }}
                          >
                            SEE HOW WE WORK
                          </span>
                        </div>
                      </div>
                      <div className="col-md-3" id="about_two">
                        <img
                          style={{ width: "100%", marginTop: "-16%" }}
                          src={About_usfour} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ border: "1px solid #009345" }} />
            </div>
          </section>
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div
              className="container"
              data-aos="fade-up"
              style={{ marginTop: "-3%" }}
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .boxxlr{\n      border: 0px solid green;\n      background: #dcdedd;\n    /*  margin-right: 1%;*/\n    /*margin-bottom: 1%;*/\n    color: #000;\n    text-align: center;\n    }\n.boxxlr:hover {\n    border: 0px solid green;\n    background: green;\n    margin-right: 1%;\n    margin-bottom: 1%;\n     color: #fff;\n}\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}\n\n\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-stretch">
                  <div className="content">
                    
                    <h2
                      style={{
                        fontSize: "20px",
                        letterSpacing: "6px",
                        textAlign: "center",
                        color: "#000",
                        fontWeight: 600,
                      }}
                    >
                      <div id="text_two">
                      GIGECONOME:CREATING CLEARER PATHWAYS BY CONNECTING SCHOOLS
                      AND WORK
                      </div>
                    </h2>
                 
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
         {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
        
          
      </div>
    );
  }
}
export default Aboutus;
