import React from "react";
import "./Companysignuptwo";
import "./company.css";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";
class Companysignuptwo extends React.Component {
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
                        background: "#fff" /* width: '80%', */,
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
                          width: "70%",
                          margin: "6%",
                        }}
                      >
                        {" "}
                        Basic Information{" "}
                      </h2>
                      <div className="row h-100 row align-items-center">
                        <div className="col-md-10" style={{ margin: "auto" }}>
                          <form>
                            {/*             <div class="form-group" style="padding: 2%;border-radius: 1px;">

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
                                  placeholder="First name"
                                />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last name"
                                />
                              </div>
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <input
                                style={{ padding: "2%" }}
                                type="tel"
                                className="form-control"
                                placeholder="Telephone Number"
                                id="email"
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <input
                                style={{ padding: "2%" }}
                                type="text"
                                className="form-control"
                                placeholder="Job Title"
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
                                <option>Job Department </option>
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
                                type="text"
                                className="form-control"
                                placeholder="Company Website"
                                id="email"
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="text"
                                className="form-control"
                                placeholder="Location"
                                id="email"
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%" }}
                            >
                              <input
                                style={{ padding: "2%", borderRadius: "1px" }}
                                type="text"
                                className="form-control"
                                placeholder="Country"
                                id="pwd"
                              />
                            </div>
                            <div
                              className="container"
                              style={{ marginBottom: "2%" }}
                            >
                              <Link to='/companysignup'
                                style={{ color: "#fff" }}
                               
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
                                </span>
                              </Link>
                              <Link to='/companysignupthree'
                                style={{ color: "#fff" }}
                                href="companylogin3.html"
                              >
                                <span
                                  className="btn btn-primary"
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
                                  Next{" "}
                                </span>
                              </Link>
                            </div>
                          </form>
                          {/*         <div style="float: left;width: 45%; margin-right: 3%;"><hr/></div>
<div style="float:right; width: 44%;"><hr/></div>
Or

<h6 style="text-align: center;">With Your Social Network</h6>

<div style="margin-top: 4%;margin-bottom: 10%">
  <span class="btn btn-primary" style="background: #fff;
    border: 1px solid gray;border-radius: 1px; font-size: 22px; letter-spacing: 1px;
    margin-right: 4%;  width: 40%;padding: 0%;margin-left: 10%"> <img src="assets/img/google.png"> </span>
    <span class="btn btn-primary" style="background: #fff;
    border: 1px solid gray;border-radius: 1px; font-size: 22px; letter-spacing: 1px;width: 40%;padding: 0%;"><img src="assets/img/linkedin.png"></span>

</div> */}
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
export default Companysignuptwo;
