import React from 'react';
import { Link } from 'react-router-dom';
// get our fontawesome imports
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
 Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Footer(props) {
    return(
        <footer className="site-footer">
                <section clasName="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div className="container">
                        <div className="row">             
                            <hr className="m-0"/>
                            <h2 className="mb-5">Education</h2>

                            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">West Texas A&M</h3>
                                    <div className="subheading mb-3">Bachelor of Business Administration</div>
                                    <div>Computer Information Systems</div>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">Dec 1990</span>
                                </div>
                            </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                    <div className="resume-content">
                                        <h3 className="mb-0">University of Phoenix</h3>
                                        <div className="subheading mb-3">Certificate of Advanced Software Development</div>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Sept 2019</span>
                                    </div>
                                </div>

                                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                                    <div className="resume-content">
                                        <h3 className="mb-0">NuCamp</h3>
                                        <div className="subheading mb-3">Full Web Stack Bootcamp</div>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 2020-pending</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                <hr class="m-0"/>

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div className="w-100">
                        <h2 className="mb-5">Skills</h2>

                        <div className="subheading mb-3">Programming Languages &amp; Tools You Know</div>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item">
                                <i className="fab fa-html5"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-css3-alt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-js-square"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-angular"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-react"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-node-js"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-sass"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-less"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-wordpress"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-gulp"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-grunt"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-npm"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="fab fa-java"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="subheading mb-3">Workflow You have used</div>
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
                </section>

                <hr className="m-0"/>

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                    <div className="w-100">
                        <h2 className="mb-5">Interests</h2>
                        <p>I try my best to keep healthy and as such I belong to a gym in my local area.  I care for 2 very demanding daughter dogs</p>
                        <p className="mb-0">Future plans would be to explore cloud processing and iOT opportunities.</p>
                    </div>
                </section>
            </footer>
    )
}
export default Footer;