import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Col, Row} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Footer from "./Footer";

const CvPage = () => {
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
                    <div className="CVpage">
                        <h2 className="text-center textCV">Curriculum Vitae</h2>
                        <div className="container">
                            <div className="row justify-content-md-center mt-lg-5">
                                <div className="col-md-2 d-flex justify-content-center mb-3 mb-md-0">
                                    <img src={require('../images/CV_IMAGE.PNG')} alt='logo' width={150}
                                         className="mx-auto d-block"/>
                                </div>
                                <div className="col-md-8 align-self-center">
                                    <p className="text-center text-md-start">"Goal-oriented and driven software engineer
                                        with a passion for achieving results. Dedicated to exceeding expectations and
                                        constantly striving to improve myself and my work "</p>
                                </div>
                                <div className="col-md-2">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <h6 className="text-lg-start textCV">Jonathan Lindqvist</h6>
                                        </div>
                                        <div className="col-12">
                                            <h6 className="text-lg-start">1999-02-05</h6>
                                        </div>
                                        <div className="col-12">
                                            <h6 className="text-lg-start">Musserongången 285</h6>
                                        </div>
                                        <div className="col-12">
                                            <h6 className="text-lg-start">Email: linkanjontes@gmail.com</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Row className="mb-4 mt-4" style={{borderTop: "2px solid #379b9f", paddingTop: '10px '}}>
                            <Col md={10}>
                                <h3 className='textCV'>Education</h3>
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
                        <Row className="mb-4" style={{borderTop: "2px solid #379b9f", paddingTop: '10px '}}>
                            <Col md={10}>
                                <h3 className='textCV'>Employment</h3>
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
                        <Row className="mb-4" style={{borderTop: "2px solid #379b9f", paddingTop: '10px '}}>
                            <h3 className='textCV'>Skills</h3>
                            <Col md={6}>
                                <p>Java</p>
                                <ProgressBar now={85}/>
                            </Col>
                            <Col md={6}>
                                <p>JavaScript</p>
                                <ProgressBar now={60}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>C</p>
                                <ProgressBar now={40}/>
                            </Col>
                            <Col md={6}>
                                <p>React.js</p>
                                <ProgressBar now={85}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>Node.js</p>
                                <ProgressBar now={85}/>
                            </Col>
                            <Col md={6}>
                                <p>Spring framework</p>
                                <ProgressBar now={90}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>MySQL</p>
                                <ProgressBar now={95}/>
                            </Col>
                            <Col md={6}>
                                <p>NoSQL (MongoDB)</p>
                                <ProgressBar now={35}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>Graph database (Neo4j)</p>
                                <ProgressBar now={45}/>
                            </Col>
                            <Col md={6}>
                                <p>HTML</p>
                                <ProgressBar now={98}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>Vertx</p>
                                <ProgressBar now={20}/>
                            </Col>
                            <Col md={6}>
                                <p>Android studio</p>
                                <ProgressBar now={65}/>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <p>Python</p>
                                <ProgressBar now={15}/>
                            </Col>
                        </Row>
                        <Row className="mb-4" style={{borderTop: "2px solid #379b9f", paddingTop: '10px '}}>
                            <h3 className='textCV'>Other</h3>
                            <Col md={10}>
                                <p>
                                    <strong>
                                        Language
                                    </strong>
                                </p>
                            </Col>
                            <Col md={2}>
                                <p>
                                    English, Swedish
                                </p>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={10}>
                                <p>
                                    <strong>
                                        Driving Licence
                                    </strong>
                                </p>
                            </Col>
                            <Col md={2}>
                                <p>
                                    B
                                </p>
                            </Col>
                        </Row>
                        <Row className="mb-4" style={{borderTop: "2px solid #379b9f", paddingTop: '10px '}}>
                            <h3 className='textCV'>References</h3>
                            <Col md={10}>
                                <p>
                                    References are provided on request
                                </p>
                            </Col>

                        </Row>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default CvPage;