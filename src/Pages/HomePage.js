import React from 'react';
import "./style.css"
import {MDBIcon} from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Typical from 'react-typical'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {FaGithub} from "react-icons/fa";
import SliderZyn from "./SliderZyn";
import Footer from "./Footer";

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
                    <Navbar.Brand href="https://jonathanlindqvist.netlify.app"> <img
                        src={require('../images/transparant.png')} alt='logo'
                        width="50vh"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="#aboutme">About me</Nav.Link>
                            <Nav.Link className="nav-links" href="#projects">Projects</Nav.Link>

                        </Nav>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Link className="nav-links" href="https://jonathanlindqvistcv.netlify.app">Cv</Nav.Link>
                            <Nav.Link className="nav-links"
                                      href="https://jonathanlindqvistcontactme.netlify.app"> Contact me </Nav.Link>
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
                                    <h4 className="display-5 animatedLine">Hello
                                        there </h4>
                                </div>
                                <div style={{
                                    display: 'inline-block'
                                }}>
                                    <p className="display-6 text-white-50">, my name is </p>
                                </div>
                                <div className="slideIn">
                                    <h1 style={{fontWeight: 'bold'}} className="display-2 animatedLine ">Jonathan Lindqvist</h1>
                                </div>

                                <h4 className="reveal text-white-50">I'm a {' '}
                                    <Typical
                                        className="animatedText"
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            '24 years old ',
                                            'Developer ',
                                            5000,
                                            'Student ',
                                            5000,
                                            'Software engineer  ',
                                            5000
                                        ]}
                                    />
                                </h4>
                            </div>
                            <div className="col-sm-1" style={{textAlign: "center"}}>
                                <img src={require('../images/transparant.png')} alt='logo' width="180vh"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </section>
            <section className="row m-0 p-5 bg-section" id={"aboutme"}>
                <div className="col-lg-6 mx-auto">
                    <div className="text-center">
                        <h1 className="fw-bold text-white"
                            style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            About me
                        </h1>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <img src={require('../images/me.PNG')} alt='logo' width="150px"
                             style={{borderRadius: 100}}/>
                        <div className="text-center mt-5">
                            <p className="text-white fw-bold">
                                I am a 24-year-old man who was born and raised in Tyresö, a suburb of Stockholm. I have
                                gained extensive experience working with the three major software architectures:
                                frontend, backend, and database.

                                I am committed to delivering high-quality software that meets the needs of end-users and
                                helps businesses achieve their goals. I am excited to continue growing my skills and
                                contributing to the dynamic and constantly evolving field of software development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row m-0 p-5 " id={"projects"}>
                <div className="col-lg-6 mx-auto">
                    <div className="text-center">
                        <h1 className="fw-bold" style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            Projects that I have built{" "}
                            <MDBIcon icon="lightbulb " size="2px" className="textCV"/>
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <p className=" fw-bold">Welcome to my portfolio page, where I showcase my projects
                                that I have developed using
                                various technologies such as React, Spring Boot, databases, and Android Studio.

                                I have experience working with different types of databases including SQL, NoSQL, and
                                graph databases, and have utilized this knowledge in my projects to create efficient and
                                scalable applications. Please feel free to browse through my projects and contact me for any inquiries or collaborations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row m-0 p-5 bg-section text-white">
                <div className="col-md">
                    <div className="text-center">
                        <h1 className="fw-bold " style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            Datalake
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <p className="text-white-50">
                                In health research, data from multiple sources must be retrieved and processed, which is
                                time-consuming. The "Röda korset" is seeking to automate the process of compiling data
                                from different sources to increase efficiency. The challenge is to find coherent data in
                                inconsistent data and gather it from scattered sources. The goal is to create a software
                                solution that can integrate data from different sources into a single dataset, allowing
                                for more efficient data analysis. A prototype has been developed that allows the
                                software administrator to input data and provides access to the compiled information in
                                the database for employees. The tests demonstrate that data can be retrieved from the
                                database in the desired manner and input data can be compiled into the same format in
                                the database.
                            </p>
                            <h6>The software is built using React, Spring boot, and a graph database
                                (Neo4j). For the user interface of this platform, there are different functionalities
                                available
                                for users with different levels of authorization. For a regular user, there's the
                                ability to retrieve data from all datasets, integrate them depending on their
                                authorization, and export them to Excel or JSON format. The user can also change their
                                password, first name, and last name.

                                For the administrator, there are additional features available, including the ability to
                                add new datasets to the system. Two examples of these are "Patient Input" and "Symptom
                                Input", which the administrator can submit to the backend in xlxs or sas7bdat formats.
                                The administrator can also view additional information on the datasets and add, modify,
                                or remove users from the system. Finally, the administrator can add additional
                                authorization to users to grant them access to new datasets.
                            </h6>
                            <h6>
                                This project was a collaboration with three other students, Kasper Lindström, Nonno Rydgren and Viktor Lindström Söraas.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className="ratio ratio-21x9 mt-5">
                        <iframe
                            src="https://www.youtube.com/embed/aPTkQ63OmEY"
                            title="YouTube video"
                            className="w-100 h-100"
                        ></iframe>
                    </div>
                    <div className="mt-5">
                        <a href="https://github.com/JLindqvisttt/DataLake_Backend"
                           className="text-light text-decoration-none">
                            <FaGithub className="textCV" style={{marginRight: '1vh', fontSize: '25px'}}/>
                            Datalake Repository - Backend
                        </a>
                    </div>
                    <div className="mt-2">
                        <a href="https://github.com/JLindqvisttt/DataLake_Frontend"
                           className="text-light text-decoration-none">
                            <FaGithub className="textCV" style={{marginRight: '1vh', fontSize: '25px'}}/>
                            Datalake Repository - Frontend
                        </a>
                    </div>
                </div>

            </section>
            <section className="row m-0 p-5">
                <div className="col-md">
                    <div className="text-center">
                        <h1 className="fw-bold" style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            Cocktail App
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <h6>A cocktail application that is created in Jetpack compose that gets all the information
                                from an open API source. The user can search by name, by ingredients and then get a
                                random drink by pressing on a button. Then the user can save his favorite drink by
                                clicking on the heart icon and its store locale on the device.
                            </h6>
                            <h6>This project was a collaboration with two other students, Carl Haneklint and Yo Han Joo.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ratio ratio-21x9 mt-5">
                        <iframe
                            src="https://www.youtube.com/embed/TwfHZ14oSSs"
                            title="YouTube video"
                            className="w-100 h-100"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="row m-0 p-5 bg-section text-white">
                <div className="col-md">
                    <div className="text-center">
                        <h1 className="fw-bold" style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            PaintMaster
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <h6>
                                Develop a client-server application for the KTH course HI1038, where players in teams of
                                two can compete in drawing or guessing, similar to the games Guess My Drawing or
                                Skribbl.io. The game should use Sockets for server-client communication and SDL for
                                graphics. SDL_net should be used for the client-server communication.
                            </h6>
                            <h6>This project was a collaboration with five other students, Kasper Lindström, Nonno Rydgren and Viktor Lindström Söraas, Carl Haneklint and Yo Han Joo.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ratio ratio-21x9 mt-5">
                        <iframe
                            src="https://www.youtube.com/embed/KRsKnIa1EQQ"
                            title="YouTube video"
                            className="w-100 h-100"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="row m-0 p-5">
                <div className="col-md">
                    <div className="text-center">
                        <h1 className="fw-bold" style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            Social network - ZYN
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <h6>
                                I created a social network using Vertex, Spring Boot, Node.js, React, and MySQL
                                databases. The functionality included logging in, accessing my profile, editing profile
                                properties, creating posts, befriending other users, searching for and browsing through
                                users, viewing others' posts, and creating a new account.

                                Security was ensured through the use of JWT, which I employed during login, and HTTPS
                                and TLS with certificates.

                                To create the microservices, I divided the services into their own microservices and
                                used an API gateway to facilitate communication between them.
                            </h6>
                            <h6>
                                One unique feature of my social network was the ability for users to create workout
                                charts, where they could specify how much they had trained during the week. This data
                                was saved as a dataset that was sent to Vertex. Additionally, users could view others'
                                workout charts.

                                I was also able to send messages to other users and use HTML canvas to create a canvas
                                and rooms where I could draw with others.

                                There were two different levels of access: admin and user. Admins had access to other
                                pages, such as all user information.
                            </h6>
                            <h6>
                                This project was a collaboration with another student, Emil Norstedt.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ratio ratio-21x9 mt-5">
                        <SliderZyn/>
                    </div>
                    <div className="mt-5">
                        <a href="https://github.com/JLindqvisttt/SocialNetwork_ZYN"
                           className="text-dark text-decoration-none">
                            <FaGithub className="textCV" style={{marginRight: '1vh', fontSize: '25px'}}/>
                            SocialNetwork_ZYN Repository
                        </a>
                    </div>
                </div>
            </section>

            <section className="row m-0 p-5 bg-section text-white">
                <div className="col-md">
                    <div className="text-center">
                        <h1 className="fw-bold" style={{display: 'inline-block', borderBottom: '2px solid #1f8696'}}>
                            RampII (Ergonomics) - KTH
                        </h1>
                    </div>
                    <div className="d-flex align-items-center h-100 mt-3 mx-auto">
                        <div className="mx-lg-5">
                            <p className="text-white-50">
                                RAMP (Risk Assessment and Management Tool for Physical Work) is a tool for assessing and
                                managing physical workloads in the workplace. It was developed by the Swedish National
                                Institute of Working Life and is widely used in Sweden and other countries. RAMP is
                                designed to help employers and employees identify and reduce the risk of musculoskeletal
                                disorders (MSDs) that can result from physically demanding work. It takes into account a
                                range of factors, including the nature of the task, the tools and equipment used, the
                                work environment, and the individual worker's characteristics. RAMP is a valuable
                                resource for promoting a healthy and safe workplace, and for reducing the risk of
                                work-related injuries and illnesses.
                            </p>
                            <h6>
                                This project was created to simplify the process of conducting ergonomic assessments.
                                Prior to this web application, all assessments were done manually using pen and paper,
                                which was time-consuming and prone to errors. The solution was to develop a web
                                application that would store all assessment data in a database, making it easily
                                accessible and searchable. The web application was built using React for the front-end,
                                Spring Boot for the back-end, and MySQL for the database.

                                With this new system, users can quickly and easily input data, generate reports, and
                                access previous assessments. The application also includes features such as user
                                authentication and authorization to ensure the security of the data. Overall, this
                                project has significantly streamlined the process of conducting ergonomic assessments
                                and has made the job easier for those who perform them.
                            </h6>
                            <h6>This project was given to us by KTH and was a collaboration with three other students, Emre Demirel, Johan Hultin, Mohammed Hosin.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ratio ratio-21x9 mt-5">
                        <img src={require('../images/kth.png')} alt="Ergonomics_Kth_Image" className="w-100 h-100"/>
                    </div>
                    <div className="mt-5">
                        <a href="https://github.com/JLindqvisttt/RampII_KTH"
                           className="text-light text-decoration-none">
                            <FaGithub className="textCV" style={{marginRight: '1vh', fontSize: '25px'}}/>
                            RampII Repository
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>


    );
};

export default HomePage;
