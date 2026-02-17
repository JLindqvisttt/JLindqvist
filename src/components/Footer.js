/**
 * Footer – Shared footer with social links (GitHub, LinkedIn, Email).
 */
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="footer-links">
                <a
                    href="https://github.com/JLindqvisttt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-lindqvist-1630b2162/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:linkanjontes@gmail.com"
                    className="footer-link"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
            <p className="footer-copy">
                &copy; {new Date().getFullYear()} Jonathan Lindqvist. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
