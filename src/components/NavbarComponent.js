/**
 * NavbarComponent – Shared navigation bar with scroll detection and theme toggle.
 */
import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const NavbarComponent = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant={isDark ? "dark" : "light"}
            className={`navbar-main ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-text">
                    JL
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" as="ul">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`nav-links ${location.pathname === '/' ? 'active-link' : ''}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/#projects"
                            className="nav-links"
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <Nav as="ul" className="align-items-center">
                        <Nav.Link
                            as={Link}
                            to="/Cv"
                            className={`nav-links ${location.pathname === '/Cv' ? 'active-link' : ''}`}
                        >
                            CV
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/Contact"
                            className={`nav-links ${location.pathname === '/Contact' ? 'active-link' : ''}`}
                        >
                            Contact
                        </Nav.Link>
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-btn"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
