import React from "react";
import './Footer.css';
import Logo from "../../images/logo.png";
import Footerimg from "../../images/footer.PNG";
import { Link } from "react-router-dom";
class Footer extends React.Component{
    render(){
        return(
            <div>
                     {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row footer-logo">
              <div className="col-lg-3 col-sm-12">
                <img src={Logo} />
              </div>
              <div className="col-lg-9 newsletter col-sm-12">
                <span style={{ fontSize: "25px" }}>
                  Sign up to our Newsletter
                </span>{" "}
                <input
                  type="text"
                  className="email-news"
                  placeholder="email@email.com"
                  name
                />
                <input
                  className="news-submit"
                  type="submit"
                  defaultValue="submit"
                  name
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Students</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Who’s hiring</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Carrer tips</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Companies</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Employers</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Who’s hiring</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Carrer tips</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Companies</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Educators</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Who’s hiring</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Carrer tips</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Companies</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Who’s hiring</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Carrer tips</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Companies</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/code">Code of Conduct</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/inclusion">
                      Inclusion &amp; Diversity Policy
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/termsandcondition">Terms of Conditions</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to="/cookiepolicy">Cookies Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-newsletter">
                <h4>Follow Us On</h4>
                <div className="social-links text-center text-md-end pt-3 pt-md-0">
                  <img src={Footerimg} style={{'cursor':'pointer'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4 text-center">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright text-center">
              © Copyright{" "}
              <strong>
                <span> 2021. </span>
              </strong>{" "}
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
            </div>
        )
    }
}
export default Footer;