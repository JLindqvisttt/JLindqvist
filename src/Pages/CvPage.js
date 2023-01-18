import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Test from "./Test";
import {Col, Row} from "react-bootstrap";


const CvPage = () => {
    return (
        <div className="bg-section">
            <Navbar collapseOnSelect expand="lg" style={{background: '#131316'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={require('../images/transparant.png')} alt='logo' width="50vh"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul"/>
                        <Nav defaultActiveKey="home" as="ul">
                            <Nav.Link className="nav-links" href="/Cv">Cv</Nav.Link>
                            <Nav.Link className="nav-links" href="/Contact"> Contact me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section className="bg-imageContact">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <section style={{height: '100vh'}}>
                            <div className="CVpage">
                                <h2 className="text-center text-primary">Curriculum Vitae</h2>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-4">
                                        <img src={require('../images/cv.png')} alt='logo'/>
                                    </div>
                                    <div className="col-md-4"/>
                                    <div className="col-md-3">
                                        <hr/>
                                        <h6 className="text-lg-start">Jonathan Lindqvist</h6>
                                        <h6 className="text-lg-start">1999-02-05</h6>
                                        <h6 className="text-lg-start">Musserongången 285</h6>
                                        <h6 className="text-lg-start">Phone number: 076-2574306</h6>
                                        <h6 className="text-lg-start">Email adress: linkanjontes@gmail.com</h6>
                                    </div>
                                </div>
                                <Row className="mb-4">
                                    <Col md={10}>
                                        <h3>Education</h3>
                                            <p style={{textDecoration:"none"}}>
                                                <strong>Bachelor of Science in Computer Science</strong> - XYZ University (2010-2014)
                                            </p>
                                    </Col>
                                    <Col md={2} style={{marginTop:"4vh"}}>
                                        <p>AUG</p>
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={10}>
                                        <p style={{textDecoration:"none"}}>
                                            <strong>Bachelor of Science in Computer Science</strong> - XYZ University (2010-2014)
                                        </p>
                                    </Col>
                                    <Col md={2} >
                                        <p>AUG</p>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default CvPage;