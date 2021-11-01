import React from "react";
import "./style.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Code extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main
          id="main"
          style={{ background: "#303030", clear: "both", height: "175px" }}
        >
          <section id="clients" className="clients">
            <h3
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2.5%",
              }}
            >
              Code of Conduct
            </h3>
          </section>
        </main>
        <main
          id="main"
          id="main_one"
        >
          <br />
          <br />
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div
              className="container"
              data-aos="fade-up"
              style={{ marginTop: "-4%" }}
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
                        justifyContent: "center",
                        background: "#fff",
                        margin: "auto",
                        padding: "5%",
                      }}
                    >
                      <p style={{ textAlign: "center" }}>
                        GigeconoMe Code of Conduct
                      </p>
                      <p>
                        <strong>
                          The following Conduct of Conduct, govern your access
                          to and use of the GigeconoMe web and mobile
                          application, including any content, functionality and
                          services offered on or through www.gigeconome.com by
                          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX. (Address, Country).{" "}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          GigeconoMe referred hereto as "GigeconoMe" "we" or
                          "us" and “you” or “user” means you as a user of the
                          Site.{" "}
                        </strong>
                      </p>
                      <p></p>
                      <ol style={{ listStyle: "disc" }}>
                        <li>
                          You will act ethically and with integrity and comply
                          with all of GigeconoMe 's policies
                        </li>
                        <li>
                          {" "}
                          You will respect the rights of all Users and not abuse
                          confidential information or participate in any illegal
                          practice
                        </li>
                        <li>
                          You will have regard for all Users' interests, rights
                          and safety and not harass bully or discriminate
                        </li>
                        <li>
                          {" "}
                          You will have regard for all Users' interests, rights
                          and safety and not harass bully or discriminate
                        </li>
                        <li>
                          You will not seek to communicate or receive or try to
                          initiate payments off platform or underbid to avoid
                          Platform fees.{" "}
                        </li>
                        <li>
                          {" "}
                          You will not post content that infringes upon any
                          copyright or other intellectual property rights across
                          any jurisdictions in which GigeconoMe operates
                        </li>
                        <li>
                          You will not post content that contains any viruses or
                          programming routines intended to damage our platform
                          or our users XXXXXXXXXXXXXXXXXX
                        </li>
                        <li>
                          {" "}
                          You will always comply with all obligations after the
                          all projects or work has been completed
                        </li>
                        <li>
                          You will respect all confidentiality and Privacy
                          agreement and not disclose information or documents
                          acquired, other than as required by law or where
                          authorization is given.
                        </li>
                        <li>
                          {" "}
                          You will not post any content that would create
                          liability for GigeconoMe or cause reputational damage
                          to its business operations
                        </li>
                        <li>
                          You will not participate in projects involving illegal
                          behaviour or chose to take on projects that you plan
                          to complete.
                        </li>
                        <li>
                          When on GigeconoMe, you will avoid exaggeration,
                          derogatory remarks, and inappropriate references.
                        </li>
                        <li>
                          When on GigeconoMe, you will not engage in personal
                          attacks, negative, unfair or unprofessional conduct.
                        </li>
                        <li>
                          {" "}
                          You will not use GigeconoMe to generate false feedback
                          about any person, company or services
                        </li>
                        <li>
                          When on GigeconoMe, you will not post content that
                          violates any law or regulation across any
                          jurisdictions in which GigeconoMe operates.
                        </li>
                      </ol>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* End #main */}
        {/* ======= 

      {/* ======= Footer ======= */}
    <Footer />
        </div>
    );
  }
}
export default Code;
