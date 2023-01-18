import React from 'react';
import {Form, Col, Button, Row} from 'react-bootstrap';
import {FaGithub, FaEnvelope} from 'react-icons/fa';
import Container from "react-bootstrap/Container";

const test = () => {
    return (
        <div>
            <Container>
                <Row className="mb-4">
                    <Col md={12}>
                        <h1 className="text-center">John Doe</h1>
                        <h2 className="text-center">Web Developer</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3 className="mb-3">About Me</h3>
                        <p>
                            I am a highly motivated web developer with experience in building responsive, dynamic
                            websites and web applications. I am well-versed in a variety of programming languages,
                            including HTML, CSS, JavaScript, and PHP. I am also experienced in using modern front-end
                            frameworks such as React.js and Angular.js.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h3 className="mb-3">Contact</h3>
                        <ul>
                            <li>Email: johndoe@email.com</li>
                            <li>Phone: 555-555-5555</li>
                            <li>Location: New York, NY</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={12}>
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <strong>Bachelor of Science in Computer Science</strong> - XYZ University (2010-2014)
                            </li>
                            <li>
                                <strong>Web Development Bootcamp</strong> - ABC Institute (2018-2019)
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={12}>
                        <h3>Work Experience</h3>
                        <ul>
                            <li>
                                <strong>Web Developer</strong> - DEF Company (2019-Present)
                                <ul>
                                    <li>Developed and maintained company website using React.js and Node.js</li>
                                    <li>Implemented new features and functionality to improve user experience</li>
                                    <li>Collaborated with designers and project managers to ensure successful project completion</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Web Development Intern</strong> - GHI Agency (2018)
                                <ul>
                                    <li>Assisted in the development of websites and web applications for clients</li>
                                    <li>Learned and applied various web development technologies and methodologies</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={12}>
                        <h3>Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default test;