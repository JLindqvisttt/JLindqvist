import React, {useState} from "react";
import {Button, Col, Form} from "react-bootstrap";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <Col md={10}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email"/>
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Enter your message"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Col>
        </form>
    );
};

export default ContactForm;