import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
 Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
            <div class="container-fluid p-0">

                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div class="w-100">
                    <h1 class="mb-0">Brent
                        <span class="text-primary">Bowen</span>
                    </h1>
                    <div class="subheading mb-5">2812 Kernville Dr· Wylie, TX 75098 · (972) 837-5762 ·
                        <a href="mailto:bodunk2k@aol.com">bodunk2k@aol.com</a>
                    </div>
                        <p class="lead mb-5">A challenging and rewarding position in information technology with the potential for
                        continued professional growth into new technologies. While I have extensive experience using procedural code I
                        am seeking new roles with object oriented technologies and agile development methodologies.</p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/brent-bowen-b053574/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/bodunk2k">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/bodunk2k">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/brent.k.bowen">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
                </section>
            </div>
            </div>
        </div>
    );
}

export default Home;