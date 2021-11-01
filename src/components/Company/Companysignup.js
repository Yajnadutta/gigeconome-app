import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login1 from '../../images/Login-28.png'
import Login2 from '../../images/Login-29.png';
class Companysignup extends React.Component {
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
                      <h2
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                          color: "#fff",
                          fontWeight: 600,
                          background: "green",
                          padding: "1%",
                          width: "70%",
                          margin: "6%",
                        }}
                      >
                        {" "}
                        Create an Account{" "}
                      </h2>
                      <div className="row h-100 row align-items-center">
                        <div className="col-md-10" style={{ margin: "auto" }}>
                          <form>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <input
                                style={{ padding: "2%" }}
                                type="text"
                                className="form-control"
                                placeholder="Company Name"
                                id="email"
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <select
                                className="sltoption"
                                style={{
                                  width: "100%",
                                  height: "38px",
                                  border: "1px solid gray",
                                  color: "#009345",
                                }}
                              >
                                <option style={{ color: "#009345" }}>
                                  Company Status{" "}
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="email"
                                className="form-control"
                                placeholder="Email Id"
                                id="email"
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
                                placeholder="Password"
                                id="pwd"
                              />
                            </div>
                            <Link to='/companysignuptwo'>
                              {" "}
                              <span
                                className="btn btn-primary"
                                style={{
                                  padding: "2%",
                                  marginLeft: "38%",
                                  marginBottom: "4%",
                                  color: "#fff",
                                  background: "green",
                                  width: "26%",
                                  border: "none",
                                  borderRadius: "1px",
                                  marginTop: "4%",
                                }}
                              >
                                Create
                              </span>
                            </Link>
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
                          <div style={{ float: "right", width: "46%" }}>
                            <hr />
                          </div>
                          Or
                          <h6 style={{ textAlign: "center" }}>
                            With Your Social Network
                          </h6>
                          <div style={{ marginTop: "4%", marginBottom: "10%" }}>
                            <span
                              className="btn btn-primary"
                              style={{
                                background: "#fff",
                                border: "1px solid gray",
                                borderRadius: "1px",
                                fontSize: "22px",
                                letterSpacing: "1px",
                                marginRight: "4%",
                                width: "40%",
                                padding: "0%",
                                marginLeft: "10%",
                              }}
                            >
                              {" "}
                              <img src={Login1} />{" "}
                            </span>
                            <span
                              className="btn btn-primary"
                              style={{
                                background: "#fff",
                                border: "1px solid gray",
                                borderRadius: "1px",
                                fontSize: "22px",
                                letterSpacing: "1px",
                                width: "40%",
                                padding: "0%",
                              }}
                            >
                              <img src={Login2} />
                            </span>
                          </div>
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
export default Companysignup;
