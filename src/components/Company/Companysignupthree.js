import React from "react";
import { Link } from "react-router-dom";
import "./company.css";
import Logo from '../../images/logo.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Companysignupthree extends React.Component {
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
                        Company Details{" "}
                      </h2>
                      <div className="row h-100 row align-items-center">
                        <div className="col-md-10" style={{ margin: "auto" }}>
                          <form>
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
                                <option>Company Sector / Industry </option>
                                <option>1</option>
                                <option>2</option>
                              </select>
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
                                <option>Company Size</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div
                              className="form-group"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div
                                style={{ border: "1px solid", padding: "1%" }}
                              >
                                <label id="fileLabel">Company Logo</label>
                                <input
                                  type="file"
                                  title="Choose a video please"
                                  id="aa"
                                  onchange="pressed()"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <h6 style={{ textAlign: "center" }}>
                                Interested in Resources for
                              </h6>
                            </div>
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div className="col chkalgn">
                                <span chkspn>Internship</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Internship"
                                />
                              </div>
                              <div className="col chkalgn">
                                <span chkspn>Virtual Internship</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Virtual Internship"
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div className="col chkalgn">
                                <span chkspn>Work Experience"</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Work Experience"
                                />
                              </div>
                              <div className="col chkalgn">
                                <span chkspn>Work Placement</span>
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Work Placement"
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div className="col chkalgn">
                                <span chkspn>Part Time Roles</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Part Time Roles"
                                />
                              </div>
                              <div className="col chkalgn">
                                <span chkspn>Side Gig Oppurtunities</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Side Gig Oppurtunities"
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div className="col chkalgn">
                                <span chkspn>Course work Related</span>
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Course work Related"
                                />
                              </div>
                              <div className="col chkalgn">
                                <span chkspn>Portofolio Building</span>{" "}
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="Portofolio Building"
                                />
                              </div>
                            </div>
                            <div
                              className="row"
                              style={{ padding: "2%", borderRadius: "1px" }}
                            >
                              <div
                                className="col-md-6 chkalgn"
                                style={{ margin: "auto" }}
                              >
                                <span chkspn>other</span>
                                <input
                                  type="checkbox"
                                  className=" chkint"
                                  placeholder="other"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <span
                                className="btn btn-primary"
                                style={{
                                  padding: "0%",
                                  marginLeft: "20%",
                                  marginTop: "7%",
                                  color: "#fff",
                                  background: "#000",
                                  width: "26%",
                                  border: "none",
                                  borderRadius: "1px" /* marginTop: '-13%', */,
                                  height: "32px",
                                  paddingTop: "1%",
                                  marginBottom: "6%",
                                }}
                              >
                                <Link
                                  style={{ color: "#fff" }}
                                  to='/companysignuptwo'
                                >
                                  {" "}
                                  Back{" "}
                                </Link>{" "}
                              </span>
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
                                  borderRadius: "1px" /* marginTop: '-13%', */,
                                  height: "32px",
                                  paddingTop: "1%",
                                  marginBottom: "6%",
                                }}
                              >
                                <a
                                  style={{ color: "#fff" }}
                                  
                                >
                                  {" "}
                                  Next{" "}
                                </a>{" "}
                              </span>
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
    );
  }
}
export default Companysignupthree;
