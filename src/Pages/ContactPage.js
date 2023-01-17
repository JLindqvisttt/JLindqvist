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
                                    <h2>Contact me</h2>
                                    <div className="row justify-content-md-center">
                                        <div className="col-6">
                                            <ContactForm/>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-primary">Here can you find more interest links</p>
                                            <p>Email</p>
                                            <p>Vart jag bor</p>
                                            <p>GithubLänk</p>
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