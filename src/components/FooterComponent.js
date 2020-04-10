import React from 'react';
import { Link } from 'react-router-dom';
// get our fontawesome imports
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
 Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


function Footer(props) {
    return(
        <footer className="site-footer">
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="container">
                    <div className="row">             
                        <hr className="m-0"/>
                            <h2 className="mb-5 ">Education</h2>

                            <div className="row resume-item d-flex flex-column flex-md-row  mb-5">
                                <div className="row resume-content ">
                                    <h3 className="row ml-5">West Texas A&M</h3>
                                    <h4 className="row ml-5">Bachelor of Business Administration</h4>
                                    <h3 className="row ml-5">Computer Information Systems</h3>
                                    <h3 className="row ml-5">Dec 1990</h3>
                                </div>
                            </div>

                                <div className="row resume-item d-flex flex-column flex-md-row mb-5">
                                    <div className="row resume-content">
                                        <h3 className="row ml-5">University of Phoenix</h3>
                                        <h4 className="row ml-5">Certificate of Advanced Software Development</h4>
                                        <h3 className="row ml-5">Sept 2019</h3>
                                    </div>
                                </div>

                                <div className="row resume-item d-flex flex-column flex-md-row mb-5">
                                    <div className="row resume-content">
                                        <h3 className="row ml-5">NuCamp</h3>
                                        <h4 className="row ml-5">Full Web Stack Bootcamp</h4>
                                        <h3 className="row ml-5">Jan 2020-pending</h3>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                <hr className="m-0"/>

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div className="container w-100">
                      <div className="row d-flex flex-column flex-md-row mb-5">  
                        <h2 className="row mb-5">Skills</h2>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item">
                                <i className="fa fa-html5"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-css3-alt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-js-square"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-angular"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-react"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-node-js"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-sass"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-less"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-gulp"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-grunt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-npm"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-java"></i>
                            </li>
                        </ul>
                      </div>
                    </div>
                </section>
                <hr className="m-0"/>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="workflow">
                    <div className="container w-100">
                            <h2 className="row mb-5">Workflow You have used</h2>
                            <ul className="fa-ul mb-0">
                                <li>
                                    <i className="fa-li fa fa-check"></i>
                                    Mobile-First, Responsive Design</li>
                                <li>
                                    <i className="fa-li fa fa-check"></i>
                                    Cross Browser Testing &amp; Debugging</li>
                                <li>
                                    <i className="fa-li fa fa-check"></i>
                                    Agile Development &amp; Scrum</li>
                            </ul>
                    </div>
                </section>

                <hr className="m-0"/>

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                    <div className="container w-100">
                        <h2 className="row mb-5">Interests</h2>
                        <p>I try my best to keep healthy and as such I belong to a gym in my local area.  I care for 2 very demanding daughter dogs</p>
                        <p className="mb-0">Future plans would be to explore cloud processing and iOT opportunities.</p>
                    </div>
                </section>
        </footer>
    )
}
export default Footer;