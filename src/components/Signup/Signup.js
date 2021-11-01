import React from "react";
import './signup.css';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Students from '../../images/students.png'
import Universities from '../../images/universites.png'
import Startup from '../../images/startup.png'
import Companies from '../../images/companies.png'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const SignUp = () => {
  return (
    <div>
      <h1>
        {" "}
        <div>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Gigeconome</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          <link
            href="assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link
            href="assets/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          {/* Template Main CSS File */}
          <link href="assets/css/style.css" rel="stylesheet" />
          {/* =======================================================
  * Template Name: Presento - v3.3.0
  * Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\n  /*.navbar .dropdown ul{\n      display: block;\n    position: absolute;\n    left: 0px;\n    top: calc(100% + 30px);\n    margin: 0;\n    padding: 0px 0;\n    z-index: 99;\n    opacity: 0;\n    visibility: hidden;\n    background: #fff;\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n    transition: 0.3s;\n    width: 20%;\n  }\n  \n.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {\n    color: green;\n}*/\n\n \nselect.sltoption{\n    \n    outline:0px !important;\n}\n\n\n\n\n.styled-select {\n  width: 10px;\n  overflow: hidden;\n  overflow: -moz-hidden-unscrollable;\n  background: url(https://neu1-api.asm.skype.com/v1/objects/0-neu-d9-c5d432419bff7e47675f0bcea28bb5ce/views/imgpsh_fullsize_anim) no-repeat right white;\n  \n  display: inline-block;\n  position: relative;\n}\n\n.styled-select select {\n  background: transparent;\n  -webkit-appearance: none;\n  width: 100px;\n  font-size: 11px;\n  border: 0;\n  height: 17px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.styled-select select {\n    -moz-appearance:none; /* Firefox */\n    -webkit-appearance:none; /* Safari and Chrome */\n    appearance:none;\n}\n\n\n\n    .stylm{\nmargin-left: 30%;\n    border: 1px solid #fff;\n    padding: 1%;\n    color: #fff;\n}\n\n .stylm:hover{\nmargin-left: 30%;\n    padding: 1%;\n    color: #fff;\n    background: green;\n}\n\n/* Slider Starts */\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  width: 100%;\n  margin: auto;\n}\n\n\n/*\nRemoves white gap between slides - chagnge to base color of slide images\n*/\n.carousel {\n  /*background:#007aeb;*/\n  margin-left: -4%;\n}\n\n.carousel-item {\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transition: transform .6s ease-in-out;\n}\n\n\n\n/*\nForces image to be 100% width and not max width of 100%\n*/\n.carousel-item .img-fluid {\n  width:100%;\n}\n\n/* \nanchors are inline so you need ot make them block to go full width\n*/\n\n\n.carousel-item a {\n  display: block;\n  width:100%;\n}\n\n\n.carousel-indicators {\n   position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 30%;\n    z-index: 2;\n    display: flex;\n    justify-content: left;\n    padding: 0;\n    /* margin-right: 15%; */\n    margin-bottom: 2rem;\n    /* margin-left: 6%; */\n    list-style: none;\n}\n\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    max-width: 12px;\n    height: 12px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255,255,255,.5);\n    border-radius: 7px;\n}\n\n\n\n.carousel-indicators li::before {\n    position: absolute;\n    top: -10px;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    height: 10px;\n    content: "";\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 0px;\n    left: 8%;\n    /* padding-top: 1.25rem; */\n    /* padding-bottom: 1.25rem; */\n    color: #fff;\n    text-align: left;\n    /* border: 1px solid red; */\n    width: 1%;\n    height: 500px;\n    background: transparent;\n}\n\n\n\n\n\n/* Slider ends */\n\nspan.btn.btn-primary.nav-link.active {\n \n /* background: green !important;*/\n}\n\n\n\n.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {\n    color: #009345;\n}\n\n#footer .footer-top .footer-links ul a:hover {\n    text-decoration: none;\n    color: #009345;\n}\n\n.tabs .nav-link:hover {\n    color: #009345;\n}\n\n   \n\n.item {\n    -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  }\n\n\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\nul.social-media-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    font-size: 0px; /* eliminate space between li */\n}\n\nul.social-media-list li {\n    display: inline-block;\n}\n.tabs .nav-link h4 {\n    font-size: 16px;\n    font-weight: 600;\n    margin: 0;\n}\n\n    #head-soc ul li {list-style :none; padding: 0 0 0 12px; float: left;}\n#head-soc ul li a {text-indent: -9999px; font-size: 0; line-height: 0; overflow: hidden ; height: 40px; width: 40px ;border: 0; background: url(https://www.maintec.com/gigeconome/assets/img/socitalicontranparent.png) no-repeat; display: block;}\n\n\n#head-soc li#li a {background-position: -180px 1px;}\n\n#head-soc li#fb a {background-position: -44px 2px;}\n\n#head-soc li#twit a {background-position: -135px 1px}\n\n\n\n#head-soc li#youtube a {background-position: 0px 2px;}\n\n#head-soc li#pint a {background-position: -90px 1px;}\n\n\n\n\n\n    #hero:before {\n    content: "";\n    background: none !important;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#footer .footer-top h4::after {\n    background: #009345;\n}\n\na.back-to-top.d-flex.align-items-center.justify-content-center.active {\n    background: #009345;\n}\n\n\n     txt1 {\nmargin: 0;\n    font-size: 48px;    \n    color: #fff;\n    font-weight: none !important;\n   } \n  \n#header {\n    background: #fff;\n    transition: all 0.5s;\n    z-index: 997;\n    padding: 10px 0;\n}\n#footer .footer-top .footer-links ul a {\n    color: #FFF;\n    transition: 0.3s;\n    display: inline-block;\n    line-height: 1;\n}\n\n.tabs .nav-link.active {\n    background: #009345 !important;\n\n    }\n\n\n.custom-badge {\n    background-color: #343a40 !important;\n    color: #fff;\n    font-size: 11px;\n    padding: 5px;\n    padding-left: 11px;\n    padding-right: 11px;\n    border-radius: 7px\n}\n\n.card {\n   /*border: none;*/\n    padding: 15px;\n    cursor: pointer;\n    background: #9acab1;\n    height: 380px;\n        border-radius: 34px;\n}\n\n.card1 {\n   border: 1px solid;\n    padding: 15px;\n    cursor: pointer;\n    background: #fff;\n    box-shadow: 1px 1px 4px 1px;\n       \n}\n.card-title {\n    margin-bottom: -0.5rem;\n}\n.time i {\n    color: #cacacaa3\n}\n\n\n\n\n#footer .social-links a {\n  margin-right: -11px !important;\n}\n\nspan.btn.btn-primary:hover {\n    background: #009345 !important;\n    color: #000 !important;\n}\n\n\n\n#hero{\n\n  width: 100%;\n    height: 100vh;\n    background: url(\'D:/download/Presento/Presento/gigecono/assets/img/student.png\') top center no-repeat !important;\n    background-size: cover;\n    position: relative;\n    padding-top: 82px;\n}\n\nsection#hero {\n    height: auto !important;\n}\n\n\n\n  ',
            }}
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n\n\n\n\n@media only screen and (max-width: 600px) {\n .carousel-caption {\n   width:90% !important;\n}\n\n.card {\n\n  padding: 0px;\n}\n\n\n}\n\n\n",
            }}
          />
           {/* ======= Header ======= */}
    <Header />
      {/* End Header */}
          <main id="main" style={{ background: "#303030", clear: "both" }}>
            <br />
            <br />
            {/* ======= About Section ======= */}
            <section id="clients" className="clients">
              <div className="container" data-aos="fade-up">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n    .boxxlr{\n    border: 0px solid green;\n    background: #edf8f2;\n    margin-right: -6.5%;\n    margin-bottom: 7%;\n    color: #000;\n    margin-left: 8%;\n    width: 20%;\n    }\n/*.boxxlr:hover {\n    border: 0px solid green;\n    background: green;\n    margin-right: 1%;\n    margin-bottom: 1%;\n     color: #fff;\n}*/\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n\n.boxclrtitle1 {\nfont-size: 18px;font-weight: bold;\n}\n/*.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}*/\n\n\n  ",
                  }}
                />
                <div className="row no-gutters">
                  <div className="content col-xl-12 d-flex align-items-stretch">
                    <div className="content">
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fff",
                          width: "70%",
                          marginLeft: "20%",
                          borderRadius: "20px",
                        }}
                      >
                        <h2
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: 600,
                            background: "green",
                            padding: "1%",
                            width: "82%",
                            margin: "6%",
                          }}
                        >
                          {" "}
                          Sign Up{" "}
                        </h2>
                        <div className="row">
                          <div className="col-md-5">
                            <h2
                              style={{
                                fontSize: "25px",
                                letterSpacing: "4px",
                                textAlign: "right",
                                marginRight: "0%",
                                color: "#000",
                              }}
                            >
                              GigeconoMe -{" "}
                            </h2>
                          </div>
                          <div className="col-md-6">
                            <p style={{ fontSize: "15px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris id lorem nec lorem sagittis congue.
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="row">
                          <div className="col-md-2 boxxlr">
                            <div
                              className="icon-box"
                              data-aos="fade-up"
                              data-aos-delay={100}
                              style={{ padding: "6%", textAlign: "center" }}
                            >
                               <img src={Students}  alt="logo" />
                              <h4 className="boxclrtitle1">STUDENTS</h4>
                              <p
                                className="boxclrtitle"
                                style={{ fontWeight: "normal" }}
                              >
                                Voluptatum deleniti atque corrupti quos dolores
                                et quas molestias{" "}
                              </p>
                            </div>
                            <h3
                              style={{
                                textAlign: "center",
                                color: "#fff",
                                background: "green",
                                fontSize: "16px",
                                padding: "5%",
                                margin: "-8%",
                              }}
                            >
                              <Link to="/studentsignup_one"
                                style={{ color: "#fff" }}
                                
                              >
                                <span>SIGN UP</span>
                              </Link>
                            </h3>
                          </div>
                          <div className="col-md-2 boxxlr">
                            <div
                              className="icon-box"
                              data-aos="fade-up"
                              data-aos-delay={100}
                              style={{ padding: "6%", textAlign: "center" }}
                            >
                              <img  src={Universities} alt="logo" />
                              <h4 className="boxclrtitle1">UNIVERSITIES</h4>
                              <p
                                className="boxclrtitle"
                                style={{ fontWeight: "normal" }}
                              >
                                Voluptatum deleniti atque corrupti quos dolores
                                et quas molestias{" "}
                              </p>
                            </div>
                            <h3
                              style={{
                                textAlign: "center",
                                color: "#fff",
                                background: "green",
                                fontSize: "16px",
                                padding: "5%",
                                margin: "-8%",
                              }}
                            >
                              <a href="#" style={{ color: "#fff" }}>
                                <span>SIGN UP</span>
                              </a>
                            </h3>
                          </div>
                          <div className="col-md-2 boxxlr">
                            <div
                              className="icon-box"
                              data-aos="fade-up"
                              data-aos-delay={100}
                              style={{ padding: "6%", textAlign: "center" }}
                            >
                              <img src={Startup}  alt="logo" />
                              <h4 className="boxclrtitle1">START UP</h4>
                              <p
                                className="boxclrtitle"
                                style={{ fontWeight: "normal" }}
                              >
                                Voluptatum deleniti atque corrupti quos dolores
                                et quas molestias{" "}
                              </p>
                            </div>
                            <h3
                              style={{
                                textAlign: "center",
                                color: "#fff",
                                background: "green",
                                fontSize: "16px",
                                padding: "5%",
                                margin: "-8%",
                              }}
                            >
                              <a
                                href="companylogin1.html"
                                style={{ color: "#fff" }}
                              >
                                <span>SIGN UP</span>
                              </a>
                            </h3>
                          </div>
                          <div className="col-md-2 boxxlr">
                            <div
                              className="icon-box"
                              data-aos="fade-up"
                              data-aos-delay={100}
                              style={{ padding: "6%", textAlign: "center" }}
                            >
                              <img src={Companies}  />
                              <h4 className="boxclrtitle1">COMPANIES</h4>
                              <p
                                className="boxclrtitle"
                                style={{ fontWeight: "normal" }}
                              >
                                Voluptatum deleniti atque corrupti quos dolores
                                et quas molestias{" "}
                              </p>
                            </div>
                            <h3
                              style={{
                                textAlign: "center",
                                color: "#fff",
                                background: "green",
                                fontSize: "16px",
                                padding: "5%",
                                margin: "-8%",
                              }}
                            >
                              <Link to ='/companysignup'
                               
                                style={{ color: "#fff" }}
                              >
                                <span>SIGN UP</span>
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}
         
           <Footer />
        </div>
      </h1>
    </div>
  );
};

export default SignUp;
