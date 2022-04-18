import React, { useState } from "react";
import {
  Container,
  Card,
  Alert,
  Button,
  Form,
} from "react-bootstrap";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <div className="wrapper">
      <Container className="flex">
        <Card className="my-5 p-4 form-contact">
          <Form.Floating>
            <h1>Contact Me</h1>
            <Form.Group>
              <Form.Label className="mt-3">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
            <Button
              variant="primary"
              className="mt-3"
              type="submit"
              onClick={() => setShow(true)}
            >
              Submit
            </Button>
            </div>
          </Form.Floating>
          <Alert show={show} className="mt-3" variant="success">
              Your message has been sent.
          </Alert>
        </Card>
      </Container>
    </div>
  );
};
