import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import {Col} from "react-bootstrap";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{background: '#131316'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/"> <img src={require('../images/transparant.png')} alt='logo'
                                                 width="50vh"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <Nav.Link className="nav-links" href="#aboutme">dede</Nav.Link>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul"/>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="/Cv">Cv</Nav.Link>
                            <Nav.Link className="nav-links" href="/Contact"> Contact me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <div className="bg-imageContact">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <section style={{height: '100vh'}}>
                                <div className="box bg-section text-light">
                                    <div className="row justify-content-md-center">
                                        <div className="col-6">
                                            <h2>Contact me</h2>
                                            <ContactForm/>
                                        </div>
                                        <div className="col-6 col-md-4" style={{marginTop:'0.8vh'}}>
                                        <h4>  More links ;) </h4>
                                            <div style={{marginTop:'4vh'}}>
                                                <a href="mailto:example@email.com" className="text-light text-decoration-none">
                                                    <FaEnvelope className="text-primary" style={{marginRight:'1vh', fontSize:'25px'}}/>
                                                    linkanjontes@gmail.com
                                                </a>
                                            </div>
                                            <div style={{marginTop:'4vh'}}>
                                                <a href="https://github.com/" className="text-light text-decoration-none">
                                                    <FaGithub className="text-primary" style={{marginRight:'1vh', fontSize:'25px'}}/>
                                                    GitHub
                                                </a>
                                            </div>
                                            <div style={{marginTop:'4vh'}}>
                                                <a href="https://github.com/" className="text-light text-decoration-none">
                                                    <FaLinkedin className="text-primary" style={{marginRight:'1vh', fontSize:'25px'}}/>
                                                    LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                    <br/>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Contact;