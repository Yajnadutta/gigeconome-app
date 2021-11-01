import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
class Inclusion extends Component{
    render(){
        return(
            <div>
                  {/* ======= Header ======= */}
                    <Header />
        <main id="main" style={{background: '#303030', clear: 'both', height: '175px'}}>
          <section id="clients" className="clients">
            <h3 style={{color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2.5%'}}>Diversity and Inclusion</h3>
          </section>
        </main>
        <main id="main" id="main_one">
          <br /><br />
          {/* ======= About Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="fade-up" style={{marginTop: '-4%'}}>
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .boxxlr{\n     border: 0px solid green;\n    background: #edf8f2;\n    margin-right: 2.5%;\n    margin-bottom: 7%;\n    color: #000;\n    margin-left: 9%;\n    width: 100%;\n    }\n/*.boxxlr:hover {\n    border: 0px solid green;\n    background: green;\n    margin-right: 1%;\n    margin-bottom: 1%;\n     color: #fff;\n}*/\n\n.boxclrtitle {\nfont-size: 12px;font-weight: bold;\n}\n\n.boxclrtitle1 {\nfont-size: 18px;font-weight: bold;\n}\n/*.boxxlr .boxclrtitle:hover {\nfont-size: 12px;font-weight: bold;\n}*/\n\n\n  " }} />
              <div className="row no-gutters">
                <div className="content col-xl-12 d-flex align-items-center">
                  <div className="content col-xl-12 d-flex align-items-center">
                    <div className="row" style={{display: 'flex', justifyContent: 'center', background: '#fff', margin: 'auto', padding: '5%'}}>
                      <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorehen an unknown printer took a galley of type and scramblm Ipsum has been the industry's standard dummy text ever since the 1500s, wed it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was www.gigeconome.com  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.(Address, Country)</strong>
                      </p>
                      <p>
                      </p><ol style={{listStyle: 'disc'}}>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                      </ol>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>     
        </main>{/* End #main */}
        <Footer />
            </div>
        )
    }
}
export default Inclusion;