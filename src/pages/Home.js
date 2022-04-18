import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const profilePic =
  "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
export const Home = () => {
  return (
    <div className="wrapper">
      <Container>
        <Row className="main-row">
          <Col>
            <Card className="p-3 text-center">
              <Card.Body>
                <Image
                  src={profilePic}
                  width={200}
                  height={200}
                  roundedCircle
                ></Image>
                <Card.Title className="mt-3">
                  <h1>Anna Joe</h1>
                </Card.Title>
                <Card.Subtitle className="mb-4 text-muted">
                  <h3>Full-Stack Developer</h3>
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore suscipit illo molestias perferendis, earum deleniti
                  dolorum distinctio amet officia? Facilis aliquam cupiditate
                  quo fugiat, harum repudiandae itaque eligendi voluptatibus
                  porro sapiente. Soluta veritatis quis praesentium, laboriosam
                  hic sunt iure nostrum ullam id aliquam quas saepe esse,
                  officia fugiat laudantium sit veniam consequatur odio eum
                  mollitia eligendi.
                </Card.Text>
                <Card.Link as={Link} to="/about">
                  <Button variant="primary">About</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
