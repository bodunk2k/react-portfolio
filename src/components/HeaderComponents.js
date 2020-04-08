import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
 Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/Brent.jpg" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar></Collapse>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link classname="nav-link js-scroll-trigger" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link classname="nav-link js-scroll-trigger" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                            <Link classname="nav-link js-scroll-trigger" to="/education">Education</Link>
                            </li>
                            <li className="nav-item">
                            <Link classname="nav-link js-scroll-trigger" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                            <Link classname="nav-link js-scroll-trigger" to="/footer">Interests</Link>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </React.Fragment>);
            }}
            export default Header;