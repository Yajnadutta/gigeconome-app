import React from "react";
import Logo from "../../images/logo.png";
import Login1 from "../../images/Login-28.png";
import Login2 from "../../images/Login-29.png";
import Login3 from "../../images/Login-30.png";
import Login4 from "../../images/Login-31.png";
import Login5 from "../../images/Login-36.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
class Reset extends React.Component {
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
                        width: "55%" /* marginLeft: '50%', */,
                        borderRadius: "20px",
                        margin: "auto",
                      }}
                    >
                      {/*     <h2 style="font-size: 20px;letter-spacing: 6px;text-align: center;color: #000;
    font-weight: 600; color: #fff;background: green; padding: 1%; width: 70%;margin: 6%;"> Create an Account </h2> */}
                      <div className="row h-100 row align-items-center">
                        <div className="col-md-10" style={{ margin: "auto" }}>
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
                              Reset Your Password
                            </h4>
                            <h6
                              style={{ fontSize: "12px", textAlign: "center" }}
                            >
                              Please enter your email and we will send you a
                              link
                            </h6>
                            <div
                              className="form-group"
                              style={{
                                paddingBottom: "2%",
                                borderRadius: "1px",
                              }}
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
                              className="row"
                              style={{
                                marginRight: "-14% !important",
                                marginBottom: "20%",
                              }}
                            >
                              <div
                                className="col-md-5"
                                style={{ marginRight: "15%" }}
                              >
                                <style
                                  type="text/css"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n    .rc-anchor-light.rc-anchor-normal{\n  border: 1px solid #fff !important;\n}\n\n\ndiv#rc-anchor-container{\n  border:none !important;\n}\n\n\n.rc-anchor-light.rc-anchor-normal {\n    border: 0px solid #d3d3d3;\n}\n\n.rc-anchor-normal-footer{\nmargin-left: -18%;\n}\n\ndiv#rc-anchor-container {\n    width: 80%;\n}\n\n\n  ",
                                  }}
                                />
                                <div className="wpcf7-form-control-wrap">
                                  <div
                                    data-sitekey="6LcHSOkUAAAAADTReP3s76AGpAWjC2f3wrZ43936"
                                    className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"
                                  >
                                    <div
                                      style={{ width: "304px", height: "78px" }}
                                    >
                                      <div>
                                        <iframe
                                          title="reCAPTCHA"
                                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcHSOkUAAAAADTReP3s76AGpAWjC2f3wrZ43936&co=aHR0cHM6Ly9tYWludGVjLmluOjQ0Mw..&hl=en&v=qljbK_DTcvY1PzbR7IG69z1r&size=normal&cb=a71nos5wzdr"
                                          width={304}
                                          height={78}
                                          role="presentation"
                                          name="a-7m0wn3xc111e"
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
                                          border:
                                            "1px solid rgb(193, 193, 193)",
                                          margin: "10px 25px",
                                          padding: "0px",
                                          resize: "none",
                                          display: "none",
                                        }}
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <noscript>
                                    &lt;div class="grecaptcha-noscript"&gt;
                                    &lt;iframe
                                    src="https://www.google.com/recaptcha/api/fallback?k=6LcHSOkUAAAAADTReP3s76AGpAWjC2f3wrZ43936"
                                    frameborder="0" scrolling="no" width="310"
                                    height="430"&gt; &lt;/iframe&gt;
                                    &lt;textarea name="g-recaptcha-response"
                                    rows="3" cols="40" placeholder="reCaptcha
                                    Response Here"&gt; &lt;/textarea&gt;
                                    &lt;/div&gt;
                                  </noscript>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <span
                                  className="btn btn-primary"
                                  style={{
                                    padding: "3%",
                                    float: "right",
                                    color: "#fff",
                                    background: "green" /* width: '26%', */,
                                    border: "none",
                                    borderRadius: "1px",
                                    marginTop: "12%",
                                  }}
                                >
                                  Reset the Password
                                </span>
                              </div>
                              <Link to='/'
                                style={{
                                  fontSize: "14px",
                                  textAlign: "center",
                                  color: "green",
                                  marginTop: "4%",
                                  cursor: "pointer",
                                }}
                              >
                                Return to the HomePage
                              </Link>
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
export default Reset;
