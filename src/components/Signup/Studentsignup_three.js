import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Studentsignup_three ()  {
 
  const [user, setUser] = useState({
    name: "",
   
    email: "",
  
    password: ""
  });
 
    //  Object Destructuring 
    const { name,email,password} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    // Insert Student Records 
    const submitStudentRecord = async (e) => {
      e.preventDefault();
      
      await axios.post("http://localhost:8080/register",user);
      alert('Data Inserted');
      
     
  };

  return (
    <div>
      <div>
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
              '\n\n\n\nselect.sltoption{\n    \n    outline:0px !important;\n}\n\n\n\n\n.styled-select {\n  width: 10px;\n  overflow: hidden;\n  overflow: -moz-hidden-unscrollable;\n  background: url(https://neu1-api.asm.skype.com/v1/objects/0-neu-d9-c5d432419bff7e47675f0bcea28bb5ce/views/imgpsh_fullsize_anim) no-repeat right white;\n  \n  display: inline-block;\n  position: relative;\n}\n\n.styled-select select {\n  background: transparent;\n  -webkit-appearance: none;\n  width: 100px;\n  font-size: 11px;\n  border: 0;\n  height: 17px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.styled-select select {\n    -moz-appearance:none; /* Firefox */\n    -webkit-appearance:none; /* Safari and Chrome */\n    appearance:none;\n}\n\n\n\n    .stylm{\nmargin-left: 30%;\n    border: 1px solid #fff;\n    padding: 1%;\n    color: #fff;\n}\n\n .stylm:hover{\nmargin-left: 30%;\n    padding: 1%;\n    color: #fff;\n    background: green;\n}\n\n/* Slider Starts */\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  width: 100%;\n  margin: auto;\n}\n\n\n/*\nRemoves white gap between slides - chagnge to base color of slide images\n*/\n.carousel {\n  /*background:#007aeb;*/\n  margin-left: -4%;\n}\n\n.carousel-item {\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transition: transform .6s ease-in-out;\n}\n\n\n\n/*\nForces image to be 100% width and not max width of 100%\n*/\n.carousel-item .img-fluid {\n  width:100%;\n}\n\n/* \nanchors are inline so you need ot make them block to go full width\n*/\n\n\n.carousel-item a {\n  display: block;\n  width:100%;\n}\n\n\n.carousel-indicators {\n   position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 30%;\n    z-index: 2;\n    display: flex;\n    justify-content: left;\n    padding: 0;\n    /* margin-right: 15%; */\n    margin-bottom: 2rem;\n    /* margin-left: 6%; */\n    list-style: none;\n}\n\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    max-width: 12px;\n    height: 12px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255,255,255,.5);\n    border-radius: 7px;\n}\n\n\n\n.carousel-indicators li::before {\n    position: absolute;\n    top: -10px;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    height: 10px;\n    content: "";\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 0px;\n    left: 8%;\n    /* padding-top: 1.25rem; */\n    /* padding-bottom: 1.25rem; */\n    color: #fff;\n    text-align: left;\n    /* border: 1px solid red; */\n    width: 1%;\n    height: 500px;\n    background: transparent;\n}\n\n\n\n\n\n/* Slider ends */\n\nspan.btn.btn-primary.nav-link.active {\n \n /* background: green !important;*/\n}\n\n\n\n.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {\n    color: #009345;\n}\n\n#footer .footer-top .footer-links ul a:hover {\n    text-decoration: none;\n    color: #009345;\n}\n\n.tabs .nav-link:hover {\n    color: #009345;\n}\n\n   \n\n.item {\n    -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  }\n\n\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\na.btn-get-started.scrollto:hover {\n    background: #009345 !important;\n    color: #fff !important;\n}\n\nul.social-media-list {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    font-size: 0px; /* eliminate space between li */\n}\n\nul.social-media-list li {\n    display: inline-block;\n}\n.tabs .nav-link h4 {\n    font-size: 16px;\n    font-weight: 600;\n    margin: 0;\n}\n\n    #head-soc ul li {list-style :none; padding: 0 0 0 12px; float: left;}\n#head-soc ul li a {text-indent: -9999px; font-size: 0; line-height: 0; overflow: hidden ; height: 40px; width: 40px ;border: 0; background: url(https://www.maintec.com/gigeconome/assets/img/socitalicontranparent.png) no-repeat; display: block;}\n\n\n#head-soc li#li a {background-position: -180px 1px;}\n\n#head-soc li#fb a {background-position: -44px 2px;}\n\n#head-soc li#twit a {background-position: -135px 1px}\n\n\n\n#head-soc li#youtube a {background-position: 0px 2px;}\n\n#head-soc li#pint a {background-position: -90px 1px;}\n\n\n\n\n\n    #hero:before {\n    content: "";\n    background: none !important;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#footer .footer-top h4::after {\n    background: #009345;\n}\n\na.back-to-top.d-flex.align-items-center.justify-content-center.active {\n    background: #009345;\n}\n\n\n     txt1 {\nmargin: 0;\n    font-size: 48px;    \n    color: #fff;\n    font-weight: none !important;\n   } \n  \n#header {\n    background: #fff;\n    transition: all 0.5s;\n    z-index: 997;\n    padding: 10px 0;\n}\n#footer .footer-top .footer-links ul a {\n    color: #FFF;\n    transition: 0.3s;\n    display: inline-block;\n    line-height: 1;\n}\n\n.tabs .nav-link.active {\n    background: #009345 !important;\n\n    }\n\n\n.custom-badge {\n    background-color: #343a40 !important;\n    color: #fff;\n    font-size: 11px;\n    padding: 5px;\n    padding-left: 11px;\n    padding-right: 11px;\n    border-radius: 7px\n}\n\n.card {\n   /*border: none;*/\n    padding: 15px;\n    cursor: pointer;\n    background: #9acab1;\n    height: 380px;\n        border-radius: 34px;\n}\n\n.card1 {\n   border: 1px solid;\n    padding: 15px;\n    cursor: pointer;\n    background: #fff;\n    box-shadow: 1px 1px 4px 1px;\n       \n}\n.card-title {\n    margin-bottom: -0.5rem;\n}\n.time i {\n    color: #cacacaa3\n}\n\n\n\n\n#footer .social-links a {\n  margin-right: -11px !important;\n}\n\nspan.btn.btn-primary:hover {\n    background: #009345 !important;\n    color: #000 !important;\n}\n\n\n\n#hero{\n\n  width: 100%;\n    height: 100vh;\n    background: url(\'D:/download/Presento/Presento/gigecono/assets/img/student.png\') top center no-repeat !important;\n    background-size: cover;\n    position: relative;\n    padding-top: 82px;\n}\n\nsection#hero {\n    height: auto !important;\n}\n\n\n\n  ',
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
                        justifyContent: "center",
                        borderRadius: "25px" /* alignItems: 'center', */,
                        background: "#fff",
                        /* marginLeft: '50%', */
                        borderRadius: "20px",
                        margin: "auto",
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
                          width: "74%",
                          marginTop: "10%",
                        }}
                      >
                        {" "}
                        Basic Information{" "}
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
                        Please Tell Us More about You
                      </h6>
                      <div className="row h-100 row align-items-center">
                        <div className="col-md-10" style={{ margin: "auto" }}>
                          <form  >
                            {/*                 <div class="form-group" style="padding: 2%;border-radius: 1px;">

                <input style="padding: 2%;" type="text" class="form-control" placeholder="Company Name" id="email">
                </div> */}
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div className="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="First Name"
                                  value={name}
                                  onChange={e => onInputChange(e)}
                                />
                               
                              </div>
                              <div className="col">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Last name"
                                  name="email"
                                  value={email}
                                  onChange={e => onInputChange(e)}
                                
                                />
                                
                              </div>
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                                />
                              </div>
                            
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                id="pwd"
                                required
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="Date"
                                className="form-control"
                                placeholder="Date of birth"
                                id="Date"
                                required
                              />
                            </div>
                            {/* <div class="row" style="padding: 2%;">
    <div class="col-md-8 chkalgn" style="margin: auto;border: 0px solid !important" >
      <h3 chkspn style="text-align: left;
    color: green;
    font-size: 18px"><input style="margin-right: 6%;" type="checkbox"  placeholder="other"> I Agree Terms & Coditions </h3>
    </div>
  
  </div> */}
                            {/* 
  <div style="margin-left: 26%" data-sitekey="6Le3_6QZAAAAAP86e8FG561eE5ttRDZMoZ94h5nI" class="wpcf7-form-control g-recaptcha wpcf7-recaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le3_6QZAAAAAP86e8FG561eE5ttRDZMoZ94h5nI&amp;co=aHR0cHM6Ly93d3cubWFpbnRlYy5jb206NDQz&amp;hl=en&amp;v=wxAi4AKLXL2kBAvXqI4XLSWS&amp;size=normal&amp;cb=o26xoid66ic3" width="304" height="78" role="presentation" name="a-ul7873cr4o5f" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div> */}
                            <div
                              className="container"
                              style={{ marginBottom: "2%" }}
                            >
                              <Link
                                style={{ color: "#fff" }}
                                to='/studentsignup_two'
                              >
                                <span
                                  className="btn btn-primary"
                                  style={{
                                    padding: "0%",
                                    marginLeft: "24%",
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
                                  Back
                                </span>{" "}
                              </Link>
                              <a
                                style={{ color: "#fff" }}
                               
                              >
                                <span
                                  className="btn btn-primary"
                                  type="submit"
                                  onClick={submitStudentRecord}
                                  style={{
                                    padding: "0%",
                                    marginLeft: "12%",
                                    marginTop: "7%",
                                    color: "#fff",
                                    background: "green",
                                    width: "26%",
                                    border: "none",
                                    borderRadius:
                                      "1px" /* marginTop: '-13%', */,
                                    height: "40px",
                                    paddingTop: "1%",
                                    marginBottom: "6%",
                                  }}
                                >
                                  Next
                                </span>{" "}
                              </a>
                            </div>
                          </form>
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
    </div>
  );
};


export default Studentsignup_three;
