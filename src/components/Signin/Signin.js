import React from "react";
import Logo from "../../images/logo.png";
import Login1 from '../../images/Login-28.png'
import Login2 from '../../images/Login-29.png';
import Login3 from '../../images/Login-30.png';
import Login4 from '../../images/Login-31.png';
import Login5 from '../../images/Login-36.png';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Signin extends React.Component {
  render() {
    return (
      <div>
         {/* ======= Header ======= */}
      <Header />
      {/* End Header */}
        <main id="main" style={{ background: "#303030", clear: "both" }}>
          <br />
          <br />
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div
              className="container col-md-5 col-xs-12 col-sm-12 col-lg-6"
              data-aos="fade-up"
            >
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
                        width: "100%" /* marginLeft: '50%', */,
                        borderRadius: "20px",
                        margin: "auto",
                      }}
                    >
                      {/*     <h2 style="font-size: 20px;letter-spacing: 6px;text-align: center;color: #000;
    font-weight: 600; color: #fff;background: green; padding: 1%; width: 70%;margin: 6%;"> Create an Account </h2> */}
                      <div className="row h-100 row align-items-center">
                        <div
                          className="col-md-10"
                          style={{ margin: "auto", marginBottom: "6%" }}
                        >
                          <form>
                            <img
                              src={Login5}
                              style={{
                                marginLeft: "40%",
                                marginBottom: "2%",
                                marginTop: "5%",
                              }}
                            />
                            <h4 style={{ textAlign: "center" }}>
                              Sign in to GigeconoMe
                            </h4>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <input
                                style={{ padding: "2%" }}
                                type="email"
                                className="form-control"
                                placeholder="Email id"
                                id="email"
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <input
                                style={{ padding: "2%" }}
                                type="password"
                                className="form-control"
                                placeholder="password"
                                id="password"
                              />
                            </div>
                            <Link
                              to='/reset'
                              className="text-body"
                              style={{
                                float: "right",
                                color: "#009345 !important",
                                fontSize: "14px",
                              }}
                            >
                              Forgot password?
                            </Link>
                            <span
                              className="btn btn-primary"
                              style={{
                                padding: "1%",
                                marginLeft: "23%",
                                marginBottom: "4%",
                                color: "#fff",
                                background: "green",
                                width: "50%",
                                border: "none",
                                borderRadius: "1px",
                                marginTop: "5%",
                                fontSize: "20px",
                              }}
                            >
                              Sign in with Email
                            </span>
                          </form>
                          <div
                            style={{
                              float: "left",
                              width: "45%",
                              marginRight: "3%",
                            }}
                          >
                            <hr />
                          </div>
                          <div style={{ float: "right", width: "44%" }}>
                            <hr />
                          </div>
                          Or
                          <h6 style={{ textAlign: "center", marginTop: "2%" }}>
                            With Your Social Network
                          </h6>
                          <div className="row" style={{ margin: "5%" }}>
                            <div className="box col">
                              <img
                                className="snalgn"
                                src={Login1}
                              />
                            </div>
                            <div className="box col">
                              <img
                                className="snalgn"
                                src={Login2}
                              />
                            </div>
                            <div className="box col">
                              <img
                                className="snalgn"
                                src={Login3}
                              />
                            </div>
                            <div className="box col">
                              <img
                                className="snalgn"
                                src={Login4}
                              />
                            </div>
                          </div>
                          <h5 style={{ textAlign: "center" }}>
                            Don't have an account?
                          </h5>
                          <h6 style={{ textAlign: "center", color: "#009345" }}>
                            Join as student
                            <span style={{ color: "transparent" }}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                          </h6>
                          <h6 style={{ textAlign: "center", color: "#009345" }}>
                            Join as a Employer or startup
                          </h6>
                          <h6 style={{ textAlign: "center", color: "#009345" }}>
                            Join as a University
                            <span style={{ color: "transparent" }}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                          </h6>
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
    );
  }
}
export default Signin;
