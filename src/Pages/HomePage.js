import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'
import styled from "styled-components";
import { keyframes } from "styled-components";
const HomePage = () => {
    return (
        <div>
            <section className="show bg-section text-white bg-dark">
                <div className="bg-image ">
                    <div className="container ">
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <h1 className="text-center" style={{textAlign:'left'}}>Hello there<h1 style={{textAlign:'left'}}>dd</h1>, my name is </h1>
                                <h1 className="animatedText">Jonathan Lindqvist</h1>
                            </div>

                        </div>

                    </div>

                    <h4>I'm a {' '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            '23 years old ',
                            'Developer ',
                            5000,
                            'Student ',
                            5000,
                            'Front end lover ',
                            5000
                        ]}
                    />
                    </h4>


                    <br/>
                    <br/>
                    <br/>
                    <h3 className="text-dark">Go down and see all the projects</h3>

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
        </div>


    );
};

export default HomePage;
