import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeSection");
        } else {
            reveals[i].classList.remove("activeSection");
        }
    }
}

window.addEventListener("scroll", reveal);

const HomePage = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{background: '#131316'}} variant="dark">
                <Container>
                    <Navbar.Brand href="/"> <img src={require('../images/transparant.png')} alt='logo' width="50vh"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="#aboutme">About me</Nav.Link>
                            <Nav.Link className="nav-links" href="#aboutme">Projects</Nav.Link>

                        </Nav>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="/Cv">Cv</Nav.Link>
                            <Nav.Link className="nav-links" href="/Contact"> Contact me </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <div className="bg-image">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-8 text-center ">
                                <div style={{
                                    display: 'inline-block'
                                }}>
                                    <h1 style={{fontWeight:'bold'}} className="display-1 animatedLine" >Hello there,  {" "}</h1>
                                </div>
                                <div style={{
                                    display: 'inline-block'
                                }}>
                                    <h1 className="display-1 text-white-50"> my name is </h1>
                                </div>
                                <div className="slideIn">
                                    <h1 className="animatedLine ">Jonathan Lindqvist.</h1>
                                </div>

                                <h4 className="reveal text-white-50">I'm a {' '}
                                    <Typical
                                        className="animatedText"
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            '23 years old ',
                                            'Developer ',
                                            2000,
                                            'Student ',
                                            2000,
                                            'Frontend lover ',
                                            2000
                                        ]}
                                    />
                                </h4>
                            </div>
                            <div className="col-sm-1" style={{textAlign: "center"}}>
                                <img src={require('../images/programmer-icon.webp')} alt='logo' width="180vh"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </section>
            <section className="show bg-section text-dark" id={"aboutme"}>

                    <h2 style={{borderBottom: '2px solid #1f8696'}} className="text-white-50">About me</h2>
                    <div className="container-fluid reveal">
                        <div className="row justify-content-md-center" style={{paddingTop: '5vh'}}>
                            <div className="col-lg-2" style={{textAlign: 'center'}}>
                                <img src={require('../images/me.PNG')} alt='logo' width="150px"
                                     style={{borderRadius: 100}}/>
                            </div>
                            <div className="col-lg-3 " >
                                <p className="text-light">I am a young man who is 23 years old and was born and raised in
                                    Stockholm, Tyresö. Have worked a lot with the three architectures, frontend, backend and
                                    database. </p>
                                <meter>ded</meter>
                            </div>
                        </div>
                    </div>



            </section>

            <section className="show bg-section text-white bg-dark">
                <h1 className="fw-bold">
                    Projects that I have built
                    <MDBIcon icon="lightbulb " size="2px" className=""/>
                </h1>

                <h2>Projects</h2>
                <p>KTH Ergonomi</p>


            </section>
            <section className="show bg-section text-dark bg-white">
                <h2>Projects</h2>
                <p>Paint Master</p>
            </section>
            <section className="show bg-section text-dark " id={"contactme"}>
                <h2>Get in touch</h2>
                <p>Paint Master</p>
            </section>
        </div>


    );
};

export default HomePage;
