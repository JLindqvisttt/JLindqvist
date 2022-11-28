import React from 'react';
import "./style.css"
import { MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"

const HomePage = () => {
    return (
        <div>
            <section className="show bg-section text-white bg-dark">
                <div className="bg-image ">
                    <h1>Hello there, my name is Jonathan Lindqvist</h1>
                    <MDBIcon icon='camera-retro' />
                    <h3 className="text-dark">Go down and see all the projects</h3>
                </div>
            </section>

            <section className="show bg-section text-white bg-dark">
                <div className="sectionCenter">

                    <h1 className="fw-bold">
                        Projects that I have built
                        <MDBIcon icon="lightbulb " size="2px" className=""/>
                    </h1>

                    <h2>Projects</h2>
                    <p>KTH Ergonomi</p>
                </div>

            </section>
            <section className="hidden">
                <h2>Projects</h2>
                <p>Paint Master</p>
            </section>
        </div>


    );
};

export default HomePage;