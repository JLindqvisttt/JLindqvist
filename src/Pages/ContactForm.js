import React, {useRef, useState} from "react";
import {Button, Col, Form} from "react-bootstrap";
import emailjs from '@emailjs/browser';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wgm9kzf'
            , 'template_xutb547',
            form.current, 'AVhlORWF5ZCOqb8u6')
            .then((result) => {
                console.log(result.text);
                setTimeout(() => {
                    setSubmitted(true);
                }, 100);
            }, (error) => {
                console.log(error.text);
            });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">I will be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={sendEmail}
            method="POST"
            target="_blank"
            ref={form}
        >
            <Col md={10}>
                <Form.Group controlId="formName" className="mb-4">
                    <Form.Control type="text" placeholder="Full name" required name="user_name"/>
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Control type="email" placeholder="Email" required name="user_email"/>
                </Form.Group>
                <Form.Group controlId="subject" className="mb-4">
                    <Form.Control type="text" placeholder="Subject" required name="subject"/>
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Control as="textarea" rows="3" placeholder="Enter your message" required name="message"/>
                </Form.Group>
                <Button  variant="primary" type="submit" className="font-weight-bold">
                    Send message
                </Button>


            </Col>
        </form>
    );
};

export default ContactForm;