/**
 * HomePage – Landing page with hero section, about, and project showcase.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import { FaGithub, FaArrowRight, FaChevronDown, FaDatabase, FaCloud, FaPaintBrush, FaUsers, FaClipboardCheck, FaGlassMartiniAlt } from 'react-icons/fa';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import SliderZyn from './SliderZyn';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
    })
};

const projects = [
    {
        title: 'WeatherApp',
        icon: <FaCloud />,
        description: 'A sleek weather dashboard that shows current conditions and a short forecast. Features geolocation, city search with suggestions, saved places carousel, mini map preview, and unit toggling between °C and °F.',
        collab: null,
        tech: ['React', 'Vite', 'Tailwind CSS', 'OpenWeather API'],
        github: 'https://github.com/JLindqvisttt/WeatherApp',
        media: { type: 'image', src: 'https://raw.githubusercontent.com/JLindqvisttt/WeatherApp/main/screenshots/image.png' },
        bg: 'alt'
    },
    {
        title: 'Datalake',
        icon: <FaDatabase />,
        description: 'A data integration platform built for the Red Cross via KTH. The system automates compiling health research data from multiple sources into a single dataset. Features role-based access, data export to Excel/JSON, and an admin panel for dataset and user management.',
        collab: 'Kasper Lindström, Nonno Rydgren & Viktor Lindström Söraas',
        tech: ['React', 'Spring Boot', 'Neo4j', 'REST API'],
        github: 'https://github.com/JLindqvisttt/DataLake_Backend',
        github2: { url: 'https://github.com/JLindqvisttt/DataLake_Frontend', label: 'Frontend Repo' },
        media: { type: 'video', src: 'https://www.youtube.com/embed/aPTkQ63OmEY' },
        bg: 'default'
    },
    {
        title: 'Cocktail App',
        icon: <FaGlassMartiniAlt />,
        description: 'An Android cocktail discovery app built with Jetpack Compose. Users can search cocktails by name or ingredients, get random drink suggestions, and save favorites locally on device.',
        collab: 'Carl Haneklint & Yo Han Joo',
        tech: ['Kotlin', 'Jetpack Compose', 'REST API', 'Android Studio'],
        media: { type: 'video', src: 'https://www.youtube.com/embed/TwfHZ14oSSs' },
        bg: 'alt'
    },
    {
        title: 'PaintMaster',
        icon: <FaPaintBrush />,
        description: 'A real-time multiplayer drawing and guessing game, similar to Skribbl.io. Teams of two compete by drawing and guessing. Built using Sockets for client-server communication and SDL for graphics rendering.',
        collab: 'Kasper Lindström, Nonno Rydgren, Viktor Lindström Söraas, Carl Haneklint & Yo Han Joo',
        tech: ['C', 'SDL', 'SDL_net', 'Sockets'],
        media: { type: 'video', src: 'https://www.youtube.com/embed/KRsKnIa1EQQ' },
        bg: 'default'
    },
    {
        title: 'Social Network – ZYN',
        icon: <FaUsers />,
        description: 'A full-stack social network with microservice architecture. Features include user profiles, posts, friend system, workout charts with Vertex, real-time messaging, collaborative HTML canvas drawing, and JWT-based authentication with HTTPS/TLS.',
        collab: 'Emil Norstedt',
        tech: ['React', 'Spring Boot', 'Node.js', 'Vert.x', 'MySQL', 'JWT'],
        github: 'https://github.com/JLindqvisttt/SocialNetwork_ZYN',
        media: { type: 'slider' },
        bg: 'alt'
    },
    {
        title: 'RampII – Ergonomics (KTH)',
        icon: <FaClipboardCheck />,
        description: 'A web application that digitized the RAMP ergonomic assessment process for workplace safety. Replaced manual pen-and-paper assessments with a searchable database system featuring report generation, user authentication, and role-based access control.',
        collab: 'Emre Demirel, Johan Hultin & Mohammed Hosin',
        tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
        github: 'https://github.com/JLindqvisttt/RampII_KTH',
        media: { type: 'image', src: require('../images/kth.png') },
        bg: 'default'
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        className={`project-card`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        custom={0}
    >
        <div className="row g-0">
            <div className="col-lg-7">
                <div className="project-card-body">
                    <h3 className="project-card-title">
                        <span className="project-icon">{project.icon}</span>
                        {project.title}
                    </h3>
                    <p className="project-card-description">{project.description}</p>
                    {project.collab && (
                        <p className="project-card-collab">
                            Collaboration with {project.collab}
                        </p>
                    )}
                    <div className="tech-tags">
                        {project.tech.map((t, i) => (
                            <span className="tech-tag" key={i}>{t}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub className="link-icon" /> Repository
                            </a>
                        )}
                        {project.github2 && (
                            <a href={project.github2.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub className="link-icon" /> {project.github2.label}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center p-3">
                {project.media.type === 'video' && (
                    <div className="project-media w-100">
                        <iframe
                            src={project.media.src}
                            title={`${project.title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
                {project.media.type === 'image' && (
                    <div className="project-media w-100">
                        <img src={project.media.src} alt={project.title} />
                    </div>
                )}
                {project.media.type === 'slider' && (
                    <div className="project-media w-100" style={{ aspectRatio: 'auto' }}>
                        <SliderZyn />
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const HomePage = () => {
    const allTechs = [...new Set(projects.flatMap(p => p.tech))];
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tech.includes(activeFilter));

    return (
        <div className="bg-section">
            <NavbarComponent />

            {/* ── Hero ── */}
            <section className="hero-section">
                <div className="hero-content text-center px-3">
                    <motion.div
                        className="status-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="status-dot" />
                        Currently at Knightec Group
                    </motion.div>
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Hello there 👋
                    </motion.p>
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Jonathan Lindqvist
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        I'm a{' '}
                        <Typical
                            className="typed-text"
                            loop={Infinity}
                            wrapper="span"
                            steps={[
                                'Software Engineer', 3000,
                                'Full-Stack Developer', 3000,
                                'Backend Engineer', 3000,
                            ]}
                        />
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a href="#projects" className="hero-cta">
                            View my work <FaArrowRight />
                        </a>
                    </motion.div>
                </div>
                <div className="hero-scroll-indicator">
                    <FaChevronDown />
                </div>
            </section>

            {/* ── About ── */}
            <section className="bg-section" id="aboutme">
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="section-title">
                            About <span>Me</span>
                            <span className="section-line" />
                        </h2>
                    </motion.div>
                    <motion.div
                        className="about-card mt-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <div className="d-flex flex-column align-items-center text-center">
                            <img
                                src={require('../images/me.PNG')}
                                alt="Jonathan Lindqvist"
                                className="about-image tilt-hover mb-4"
                            />
                            <p className="about-text">
                                I'm a 27-year-old software engineer based in Sundbyberg, Stockholm, currently
                                working at Knightec Group. With a degree in Computer Technology from KTH and
                                experience from Saab Aeronautics, I specialize in system development, test
                                automation, and building scalable solutions in complex technical environments.
                            </p>
                            <p className="about-text mt-2">
                                I'm driven by clean architecture, quality, and continuous improvement.
                                Whether it's developing internal tools in Python, building web applications
                                with Node.js, or managing CI/CD pipelines — I take ownership and deliver results.
                            </p>
                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-number">7+</div>
                                    <div className="stat-label">Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">2+</div>
                                    <div className="stat-label">Years Professional</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">10+</div>
                                    <div className="stat-label">Technologies</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Projects ── */}
            <section className="bg-section-alt" id="projects">
                <div className="section-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="section-title">
                            Featured <span>Projects</span>
                            <span className="section-line" />
                        </h2>
                        <p className="section-subtitle">
                            A selection of projects I've built using React, Spring Boot, databases, mobile development, and more.
                        </p>
                    </motion.div>

                    {/* ── Filter Tabs ── */}
                    <motion.div
                        className="filter-tabs"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <button
                            className={`filter-tab ${activeFilter === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('All')}
                        >
                            All
                        </button>
                        {allTechs.map((tech, i) => (
                            <button
                                key={i}
                                className={`filter-tab ${activeFilter === tech ? 'active' : ''}`}
                                onClick={() => setActiveFilter(tech)}
                            >
                                {tech}
                            </button>
                        ))}
                    </motion.div>

                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
