import React from "react";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Studentsignup_five = () => {
  return (
    <div>
      <div>
        {/* Hello world */}
        <div className="awesome" style={{ border: "1px solid red" }}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
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
              '\n\n\n  .chkalgn{\n  \n    border: 1px solid;\n    border-radius: 7px;\n    padding: 1%;\n    margin-left: 3%;\n    font-size: 12px;\n    margin-right: 3%;\n\n\n  }\n  .chkspn{\n        font-size: 18px;\n  }\n   .chkint{\n       float: right;\n   }\n\n \n\nselect.sltoption{\n    \n    outline:0px !important;\n}\n\n\n\n\n.styled-select {\n  width: 10px;\n  overflow: hidden;\n  overflow: -moz-hidden-unscrollable;\n  background: url(https://neu1-api.asm.skype.com/v1/objects/0-neu-d9-c5d432419bff7e47675f0bcea28bb5ce/views/imgpsh_fullsize_anim) no-repeat right white;\n  \n  display: inline-block;\n  position: relative;\n}\n\n.styled-select select {\n  background: transparent;\n  -webkit-appearance: none;\n  width: 100px;\n  font-size: 11px;\n  border: 0;\n  height: 17px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.styled-select select {\n    -moz-appearance:none; /* Firefox */\n    -webkit-appearance:none; /* Safari and Chrome */\n    appearance:none;\n}\n\n\n\n    .stylm{\nmargin-left: 30%;\n    border: 1px solid #fff;\n    padding: 1%;\n    color: #fff;\n}\n\n .stylm:hover{\nmargin-left: 30%;\n    padding: 1%;\n    color: #fff;\n    background: green;\n}\n\n/* Slider Starts */\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  width: 100%;\n  margin: auto;\n}\n\n\n/*\nRemoves white gap between slides - chagnge to base color of slide images\n*/\n.carousel {\n  /*background:#007aeb;*/\n  margin-left: -4%;\n}\n\n.carousel-item {\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transition: transform .6s ease-in-out;\n}\n\n\n\n/*\nForces image to be 100% width and not max width of 100%\n*/\n.carousel-item .img-fluid {\n  width:100%;\n}\n\n/* \nanchors are inline so you need ot make them block to go full width\n*/\n\n\n.carousel-item a {\n  display: block;\n  width:100%;\n}\n\n\n.carousel-indicators {\n   position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 30%;\n    z-index: 2;\n    display: flex;\n    justify-content: left;\n    padding: 0;\n    /* margin-right: 15%; */\n    margin-bottom: 2rem;\n    /* margin-left: 6%; */\n    list-style: none;\n}\n\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    max-width: 12px;\n    height: 12px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255,255,255,.5);\n    border-radius: 7px;\n}\n\n\n\n.carousel-indicators li::before {\n    position: absolute;\n    top: -10px;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    height: 10px;\n    content: "";\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 0px;\n    left: 8%;\n    /* padding-top: 1.25rem; */\n    /* padding-bottom: 1.25rem; */\n    color: #fff;\n    text-align: left;\n    /* border: 1px solid red; */\n    width: 1%;\n    height: 500px;\n    background: transparent;\n}\n\n\n\n\n\n/* Slider ends */\n\nspan.btn.btn-primary.nav-link.active {\n \n /* background: green !important;*/\n}\n\n\n\n.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {\n    color: #009345;\n}\n\n#footer .footer-top .footer-links ul a:hover {\n    text-decoration: none;\n    color: #009345;\n}\n\n.tabs .nav-link:hover {\n    color: #009345;\n}\n\n   \n\n.item {\n    -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  }\n\n\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\nul.social-media-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    font-size: 0px; /* eliminate space between li */\n}\n\nul.social-media-list li {\n    display: inline-block;\n}\n.tabs .nav-link h4 {\n    font-size: 16px;\n    font-weight: 600;\n    margin: 0;\n}\n\n    #head-soc ul li {list-style :none; padding: 0 0 0 12px; float: left;}\n#head-soc ul li a {text-indent: -9999px; font-size: 0; line-height: 0; overflow: hidden ; height: 40px; width: 40px ;border: 0; background: url(https://www.maintec.com/gigeconome/assets/img/socitalicontranparent.png) no-repeat; display: block;}\n\n\n#head-soc li#li a {background-position: -180px 1px;}\n\n#head-soc li#fb a {background-position: -44px 2px;}\n\n#head-soc li#twit a {background-position: -135px 1px}\n\n\n\n#head-soc li#youtube a {background-position: 0px 2px;}\n\n#head-soc li#pint a {background-position: -90px 1px;}\n\n\n\n\n\n    #hero:before {\n    content: "";\n    background: none !important;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#footer .footer-top h4::after {\n    background: #009345;\n}\n\na.back-to-top.d-flex.align-items-center.justify-content-center.active {\n    background: #009345;\n}\n\n\n     txt1 {\nmargin: 0;\n    font-size: 48px;    \n    color: #fff;\n    font-weight: none !important;\n   } \n  \n#header {\n    background: #fff;\n    transition: all 0.5s;\n    z-index: 997;\n    padding: 10px 0;\n}\n#footer .footer-top .footer-links ul a {\n    color: #FFF;\n    transition: 0.3s;\n    display: inline-block;\n    line-height: 1;\n}\n\n.tabs .nav-link.active {\n    background: #009345 !important;\n\n    }\n\n\n.custom-badge {\n    background-color: #343a40 !important;\n    color: #fff;\n    font-size: 11px;\n    padding: 5px;\n    padding-left: 11px;\n    padding-right: 11px;\n    border-radius: 7px\n}\n\n.card {\n   /*border: none;*/\n    padding: 15px;\n    cursor: pointer;\n    background: #9acab1;\n    height: 380px;\n        border-radius: 34px;\n}\n\n.card1 {\n   border: 1px solid;\n    padding: 15px;\n    cursor: pointer;\n    background: #fff;\n    box-shadow: 1px 1px 4px 1px;\n       \n}\n.card-title {\n    margin-bottom: -0.5rem;\n}\n.time i {\n    color: #cacacaa3\n}\n\n\n\n\n#footer .social-links a {\n  margin-right: -11px !important;\n}\n\nspan.btn.btn-primary:hover {\n    background: #009345 !important;\n    color: #000 !important;\n}\n\n\n\n#hero{\n\n  width: 100%;\n    height: 100vh;\n    background: url(\'D:/download/Presento/Presento/gigecono/assets/img/student.png\') top center no-repeat !important;\n    background-size: cover;\n    position: relative;\n    padding-top: 82px;\n}\n\nsection#hero {\n    height: auto !important;\n}\n\nlabel{\n    margin-bottom: 2%;\n     margin-top: 2%;\n}\n\n  ',
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
                    "\n    .boxxlr{\n     border: 0px solid green;\n    background: #edf8f2;\n    margin-right: 2.5%;\n    margin-bottom: 7%;\n    color: #000;\n    margin-left: 9%;\n    width: 100%;\n    }\n/*.boxxlr:hover {\n    border: 0px solid green;\n    background: green;\n    margin-right: 1%;\n    margin-bottom: 1%;\n     color: #fff;\n}*/\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n\n.boxclrtitle1 {\nfont-size: 18px;font-weight: bold;\n}\n/*.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}*/\n\n\n  ",
                }}
              />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-center">
                  <div className="content col-xl-12 d-flex align-items-center">
                    <div
                      className="row"
                      style={{
                        display: "flex",
                        justifyContent: "center" /* alignItems: 'center', */,
                        background: "#fff",
                        width: "50%" /* marginLeft: '50%', */,
                        borderRadius: "20px",
                        margin: "auto",
                      }}
                    >
                      <div className="col-md-9">
                        <form>
                          {/*   <h2 style="font-size: 20px;letter-spacing: 6px;text-align: center;color: #000;
    font-weight: 600; color: #fff;background: green; padding: 1%; width: 70%;margin: 6%;"> Select Project Type </h2>
 */}
                          <div className="row h-100 row align-items-center">
                            <h2
                              style={{
                                fontSize: "25px",
                                textAlign: "center",
                                color: "#fff",
                                fontWeight: 600,
                                background: "green",
                                padding: "1%",
                                marginTop: "10%",
                              }}
                            >
                              {" "}
                              Equal Opportunities and inclusion
                            </h2>
                            <h6
                              style={{
                                textAlign: "center",
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginTop: "2%",
                                marginBottom: "2%",
                              }}
                            >
                              At GigeconoMe, We are committed to driving
                              Diversity and Inclusion. Please complete details
                              below to continue our goal inclusion and diversity
                            </h6>
                            <div
                              className="row"
                              style={{ marginTop: "4%", marginBottom: "4%" }}
                            >
                              <div
                                className="col-md-1"
                                style={{ marginLeft: "30%" }}
                              >
                                src={require("../../images/studenticon4.png")}
                              </div>
                              <div
                                className="col-md-5"
                                style={{ marginLeft: "18%" }}
                              >
                                <label>User ID: ###</label>
                                <span
                                  className="btn btn-primary"
                                  style={{ background: "green", color: "#fff" }}
                                >
                                  Select Avator
                                </span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="usr">Nationality:</label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">City:</label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="usr">Religion:</label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">Gender:</label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="usr">Free School Meal:</label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">
                                Have a Disability or Learning Difficulties:
                              </label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">
                                Name of Secondary School:
                              </label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Select </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <input type="checkbox" /> School outside of UK
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">
                                Did any of your parents attend University?{" "}
                              </label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Yes </option>
                                <option>No</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">
                                Occupation of your main household earner when
                                aged about 14?
                              </label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>
                                  Clerical and intermediate occupations{" "}
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="pwd">
                                Type of school attended between the ages tof 11
                                and 16?
                              </label>
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  marginBottom: "2%",
                                }}
                              >
                                <option>Prefer not to say </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div className="row" style={{ padding: "2%" }}>
                              <div
                                className="col-md-11 chkalgn"
                                style={{
                                  margin: "auto",
                                  border: "0px solid !important",
                                }}
                              >
                                <h6
                                  chkspn
                                  style={{
                                    textAlign: "left",
                                    fontSize: "12px",
                                  }}
                                >
                                  <input
                                    style={{ marginRight: "2%" }}
                                    type="checkbox"
                                    placeholder="other"
                                  />
                                  I agree to GigeconoMe
                                  <span style={{ color: "green" }}>
                                    {" "}
                                    Terms &amp; Conditions, Code of Conduct{" "}
                                  </span>{" "}
                                  and{" "}
                                  <span
                                    style={{ color: "green", marginLeft: "5%" }}
                                  >
                                    GigeconoMe Inclusion
                                  </span>{" "}
                                  &amp;{" "}
                                  <span style={{ color: "green" }}>
                                    {" "}
                                    Diversity Policy{" "}
                                  </span>{" "}
                                </h6>
                              </div>
                            </div>
                            <div
                              style={{ marginLeft: "16%" }}
                              data-sitekey="6Le3_6QZAAAAAP86e8FG561eE5ttRDZMoZ94h5nI"
                              className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"
                            >
                              <div style={{ width: "304px", height: "78px" }}>
                                <div>
                                  <iframe
                                    title="reCAPTCHA"
                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le3_6QZAAAAAP86e8FG561eE5ttRDZMoZ94h5nI&co=aHR0cHM6Ly93d3cubWFpbnRlYy5jb206NDQz&hl=en&v=wxAi4AKLXL2kBAvXqI4XLSWS&size=normal&cb=o26xoid66ic3"
                                    width={304}
                                    height={78}
                                    role="presentation"
                                    name="a-ul7873cr4o5f"
                                    frameBorder={0}
                                    scrolling="no"
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                  />
                                </div>
                                <textarea
                                  id="g-recaptcha-response"
                                  name="g-recaptcha-response"
                                  className="g-recaptcha-response"
                                  style={{
                                    width: "250px",
                                    height: "40px",
                                    border: "1px solid rgb(193, 193, 193)",
                                    margin: "10px 25px",
                                    padding: "0px",
                                    resize: "none",
                                    display: "none",
                                  }}
                                  defaultValue={""}
                                />
                              </div>
                              <iframe style={{ display: "none" }} />
                            </div>
                            <div
                              className="container"
                              style={{ marginBottom: "4%" }}
                            >
                              <a
                                style={{ color: "#fff" }}
                                href="studentlogin4.html"
                              >
                                <span
                                  className="btn btn-primary"
                                  style={{
                                    padding: "2%",
                                    marginLeft: "20%",
                                    marginTop: "7%",
                                    color: "#fff",
                                    background: "#000",
                                    width: "26%",
                                    border: "none",
                                    borderRadius:
                                      "1px" /* marginTop: '-13%', */,
                                    height: "40px",
                                    paddingTop: "1%",
                                    marginBottom: "6%",
                                  }}
                                >
                                  {" "}
                                  Back{" "}
                                </span>{" "}
                              </a>
                              <span
                                className="btn btn-primary"
                                style={{
                                  padding: "2%",
                                  marginLeft: "12%",
                                  marginTop: "7%",
                                  color: "#fff",
                                  background: "green",
                                  width: "26%",
                                  border: "none",
                                  borderRadius: "1px" /* marginTop: '-13%', */,
                                  height: "40px",
                                  paddingTop: "1%",
                                  marginBottom: "6%",
                                }}
                              >
                                Submit{" "}
                              </span>
                            </div>
                          </div>
                        </form>
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
        {/* End Footer */}
        
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    </div>
  );
};

export default Studentsignup_five;
