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

                    <section style={{height: '100vh'}}>
                        <div className="CVpage">
                            <h2 className="text-center text-primary">Curriculum Vitae</h2>
                            <div className="row justify-content-md-center mt-lg-5">
                                <div className="col-md-2">
                                    <img src={require('../images/CV_IMAGE.PNG')} alt='logo' width={100}/>
                                </div>
                                <div className="col-md mt-3">
                                    <p>"Goal-oriented and driven software engineer with a passion for
                                        achieving results. Dedicated to exceeding expectations and constantly
                                        striving to improve myself and my work "</p>
                                </div>

                                <div className="col-md-3">
                                    <h6 className="text-lg-start text-primary">Jonathan Lindqvist</h6>
                                    <h6 className="text-lg-start">1999-02-05</h6>
                                    <h6 className="text-lg-start">Musserongången 285</h6>
                                    <h6 className="text-lg-start">Email: linkanjontes@gmail.com</h6>
                                </div>
                            </div>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <h3>Education</h3>
                                    <p>
                                        <strong>
                                            Computer technology, university engineer at KTH Royal Institute of
                                            Technology
                                            (180 hp)
                                        </strong>
                                    </p>
                                    <p>The university engineering program in Computer Technology at KTH is an
                                        education
                                        in applied information technology that has given me a wide range of skills
                                        in
                                        program development and networking. During this education, I have learned to
                                        build
                                        many applications and systems in a sustainable and efficient manner for a
                                        better
                                        future. Furthermore, I have been exposed to a range of programming languages
                                        that
                                        are commonly used in software development, see below for more information
                                        regarding the programming languages.
                                    </p>
                                </Col>
                                <Col md={2} style={{marginTop: "4vh"}}>
                                    <p>Aug 2020 - Ongoing</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <p>
                                        <strong>
                                            Technology and economics, university engineer at KTH Royal Institute of
                                            Technology
                                        </strong>
                                    </p>
                                    <p>
                                        Courses in finance, for example marketing and accounting courses.
                                    </p>
                                </Col>
                                <Col md={2}>
                                    <p>Jan 2020 - Aug 2020</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <p>
                                        <strong>
                                            Technology program (TE), Nacka Gymnasium (High school)
                                        </strong>
                                    </p>
                                    <p>
                                        Courses in computer technology, technology, programming and web-development.
                                        During
                                        my high school work, I created my own webshop where I sold t-shirts with my
                                        signature on
                                        them. The webshop was written in PHP and used a SQL database to manage the data.
                                    </p>
                                </Col>
                                <Col md={2}>
                                    <p>Aug 2015 - June 2018</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <h3>Employment</h3>
                                    <p>
                                        <strong>
                                            Coop, grocery store in Tyresö
                                        </strong>
                                    </p>
                                    <p>I am currently working as an evening manager while pursuing my studies. I have
                                        been in this
                                        role for 4.5 years, during which I have had full responsibility for overseeing
                                        the entire store.
                                        My responsibilities include managing the post office, cash register and handling
                                        package
                                        management from Postnord, as well as selling games for Svenska Spel and ATG.
                                        Furthermore, this role includes a lot of customer contact which has strengthened
                                        my ability
                                        to handle different types of customers and situations.
                                    </p>
                                </Col>
                                <Col md={2} style={{marginTop: "4vh"}}>
                                    <p>May 2018 - Ongoing</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <p>
                                        <strong>
                                            Waynes Coffee, Stockholm
                                        </strong>
                                    </p>
                                    <p>
                                        A part time job during my studies. Experiences of different work tasks within a
                                        restaurant,
                                        for example customer service, cash register work, food preparation and cleaning.
                                    </p>
                                </Col>
                                <Col md={2} style={{marginTop: "4vh"}}>
                                    <p>
                                        July 2017 - Jan 2018
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <p>
                                        <strong>
                                            Svensk Direktreklam, Stockholm
                                        </strong>
                                    </p>
                                    <p>
                                        A part time job during my studies where I distributed advertisements
                                    </p>
                                </Col>
                                <Col md={2} style={{marginTop: "4vh"}}>
                                    <p>
                                        July 2016 - Dec 2017
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={10}>
                                    <h3>Skills</h3>
                                    <p>
                                        <strong>
                                            Coop, grocery store in Tyresö
                                        </strong>
                                    </p>
                                    <p>I am currently working as an evening manager while pursuing my studies. I have
                                        been in this
                                        role for 4.5 years, during which I have had full responsibility for overseeing
                                        the entire store.
                                        My responsibilities include managing the post office, cash register and handling
                                        package
                                        management from Postnord, as well as selling games for Svenska Spel and ATG.
                                        Furthermore, this role includes a lot of customer contact which has strengthened
                                        my ability
                                        to handle different types of customers and situations.
                                    </p>
                                </Col>
                                <Col md={2} style={{marginTop: "4vh"}}>
                                    <p>May 2018 - Ongoing</p>
                                </Col>
                            </Row>
                        </div>
                    </section>


                </div>

            </section>
        </div>
    );
};

export default CvPage;