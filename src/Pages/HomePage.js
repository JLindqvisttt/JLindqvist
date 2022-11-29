import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'

const HomePage = () => {
    return (
        <div>
            <section>
                <div className="bg-image">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-5">
                                <h1 className="text-center" style={{textAlign: 'left'}}>Hello there, my name is </h1>
                                <h1 className="animatedText">Jonathan Lindqvist.</h1>
                                <h4 className="animatedLine">I'm a {' '}
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            '23 years old ',
                                            'Developer ',
                                            5000,
                                            'Student ',
                                            5000,
                                            'Frontend lover ',
                                            5000
                                        ]}
                                    />
                                </h4>
                            </div>
                            <div className="col-sm-1" style={{textAlign:"center"}}>
                                <img src={require('../images/programmer-icon.webp')} alt='logo' width="180vh"/>
                            </div>
                        </div>
                    </div>
                    <br/>

                </div>
            </section>
            <section className="show bg-section text-dark"  id={"aboutme"}>
                <h2 style={{borderBottom:'2px solid #1f8696'}} className="text-white-50">About me</h2>
                <div className="container-fluid">
                    <div className="row justify-content-md-center" style={{paddingTop:'5vh'}}>
                        <div className="col-lg-2" style={{textAlign:'center'}}>
                            <img src={require('../images/me.PNG')} alt='logo' width="150px" style={{borderRadius: 100}}/>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-light">I am a young man who is 23 years old and was born and raised in
                                Stockholm, Tyresö. </h6>

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
