import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
 Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Email, Item, Span, A, renderEmail } from 'react-html-email';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

function Home(props) {
    return (
        <div className="container">
            <div className="form-control row">
            <div className="container-fluid p-0">

                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">Brent
                        <span className="text-primary">Bowen</span>
                    </h1>
                    <div className="subheading mb-5">2812 Kernville Dr· Wylie, TX 75098 · (972) 837-5762 ·
                        <li>
                            <A href="mailto:bodunk2k@aol.com">bodunk2k@aol.com</A>
                        </li>
                    </div>
                        <p className="lead mb-5">A challenging and rewarding position in information technology with the potential for
                        continued professional growth into new technologies. While I have extensive experience using procedural code I
                        am seeking new roles with object oriented technologies and agile development methodologies.</p>
                    <div className="social-icons">
                        <li>
                            <a className="btn btn-social-icon btn-linkedin" 
                            href="https://www.linkedin.com/in/brent-bowen-b053574/"><i className="fa fa-linkedin"/> </a>
                            
                        </li>
                        <li>
                            <a className="btn btn-social-icon btn-git" 
                            href="https://github.com/bodunk2k"> <i className="fa fa-github"/></a>
                            
                        </li>
                        <li>
                            <a className="btn btn-social-icon btn-twitter" 
                            href="https://twitter.com/bodunk2k"><i className="fa fa-twitter"/> </a>
                            
                        </li>
                        <li >
                            <a className="btn btn-social-icon btn-facebook" 
                            href="https://www.facebook.com/brent.k.bowen"><i className="fa fa-facebook-f"/> </a>
                            
                        </li>
                    </div>
                </div>
                </section>
            </div>
            </div>
        </div>
    );
}

export default Home;