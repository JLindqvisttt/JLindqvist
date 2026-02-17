/**
 * ContactPage – Contact form with EmailJS integration and social links.
 */
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
    })
};

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_wgm9kzf',
            'template_xutb547',
            form.current,
            'AVhlORWF5ZCOqb8u6'
        ).then(() => {
            setTimeout(() => setSubmitted(true), 100);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="bg-section">
            <NavbarComponent />

            <div style={{ paddingTop: '70px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <motion.div
                    className="contact-container"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ flex: 1 }}
                >
                    <div className="row">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h2 style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem' }}>
                                Get in Touch
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                Have a question or want to work together? Drop me a message!
                            </p>

                            {submitted ? (
                                <motion.div
                                    className="text-center py-5"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <FaCheckCircle style={{ fontSize: '3rem', color: 'var(--accent-light)', marginBottom: '1rem' }} />
                                    <h4 style={{ color: 'var(--text-primary)' }}>Thank you!</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail}>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Full name"
                                                required
                                                name="user_name"
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email address"
                                                required
                                                name="user_email"
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Your message..."
                                                required
                                                name="message"
                                                className="contact-input"
                                            />
                                        </Form.Group>
                                        <Button type="submit" className="contact-btn">
                                            <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                                            Send Message
                                        </Button>
                                    </Col>
                                </form>
                            )}
                        </div>

                        <div className="col-lg-5">
                            <h5 style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem' }}>
                                Connect with me
                            </h5>

                            <a href="mailto:linkanjontes@gmail.com" className="contact-social-link">
                                <FaEnvelope className="contact-social-icon" />
                                <span>linkanjontes@gmail.com</span>
                            </a>

                            <a
                                href="https://github.com/JLindqvisttt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                            >
                                <FaGithub className="contact-social-icon" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jonathan-lindqvist-1630b2162/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                            >
                                <FaLinkedin className="contact-social-icon" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
