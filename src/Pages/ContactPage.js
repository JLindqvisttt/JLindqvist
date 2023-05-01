import React from 'react';
import "./style.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


const Contact = () => {
    return (
        <div className="bg-section">
            <Navbar collapseOnSelect expand="lg" style={{background: '#131316'}} variant="dark">
                <Container>
                    <Navbar.Brand href="https://jonathanlindqvist.netlify.app">
                        <img
                            src={require('../images/transparant.png')} alt='logo'
                            width="50vh"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="https://jonathanlindqvist.netlify.app/#aboutme">About me</Nav.Link>
                            <Nav.Link className="nav-links" href="https://jonathanlindqvist.netlify.app/#projects">Projects</Nav.Link>

                        </Nav>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="https://jonathanlindqvistcv.netlify.app">Cv</Nav.Link>
                            <Nav.Link className="nav-links"
                                      href="https://jonathanlindqvistcontactme.netlify.app"> Contact me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section className="bg-imageContact">
                <div className="container">
                    <div className="Contactpage" style={{marginBottom: '40vh'}}>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-8 mb-5">
                                <h2 className="textCV">Contact me</h2>
                                <ContactForm/>
                            </div>
                            <div className="col col-md-4" style={{marginTop: '1.8vh'}}>
                                <h4 className="textCV"> More links </h4>
                                <div style={{marginTop: '4vh'}}>
                                    <a className="text-light text-decoration-none">
                                        <FaEnvelope className="textCV"
                                                    style={{marginRight: '1vh', fontSize: '25px'}}/>
                                        linkanjontes@gmail.com
                                    </a>
                                </div>
                                <div style={{marginTop: '4vh'}}>
                                    <a href="https://github.com/JLindqvisttt?tab=repositories"
                                       className="text-light text-decoration-none">
                                        <FaGithub className="textCV"
                                                  style={{marginRight: '1vh', fontSize: '25px'}}/>
                                        GitHub
                                    </a>
                                </div>
                                <div style={{marginTop: '4vh'}}>
                                    <a href="https://www.linkedin.com/in/jonathan-lindqvist-1630b2162/"
                                       className="text-light text-decoration-none">
                                        <FaLinkedin className="textCV"
                                                    style={{marginRight: '1vh', fontSize: '25px'}}/>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <br/>
            </section>
            <Footer/>
        </div>

    );
};

export default Contact;