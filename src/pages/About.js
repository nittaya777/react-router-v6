import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const profilePic =
  "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
const js =
  "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-color-tal-revivo.png";
const reactjs = "https://img.icons8.com/color/48/000000/react-native.png";
const php = "https://img.icons8.com/ios/50/000000/php.png";
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png";
export const About = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
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
                  <div className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque assumenda consequatur necessitatibus, rerum totam
                    placeat quae id commodi quis blanditiis sed modi, beatae
                    deleniti pariatur? Dolorem cupiditate quasi inventore
                    minima! Quos commodi inventore laboriosam debitis ea eos
                    deserunt, dolores atque reprehenderit ducimus accusantium ad
                    quam non iste aliquam architecto quo dolorem aut quas
                    consequuntur numquam autem maiores consectetur repellat?
                    Exercitationem pariatur alias, omnis, corrupti possimus
                    blanditiis laudantium nam sed quidem tempore, voluptatibus
                    optio dolore magni eum aperiam voluptate. Aperiam quibusdam
                    voluptatibus dolorem corrupti reiciendis? At, voluptatum
                    corrupti sequi consequatur aliquid optio vero a aut tempora
                    ipsa enim modi, quaerat repellat?
                  </div>
                  <div className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas a dolorum libero corporis provident facilis
                    inventore fugiat labore mollitia omnis? Vero necessitatibus
                    facere aspernatur debitis pariatur voluptates asperiores ut
                    magnam quasi aut provident minus doloribus voluptatibus
                    possimus rem nam ratione repudiandae adipisci, voluptatem
                    in, eveniet delectus quo voluptas? Ducimus impedit beatae
                    fugit eligendi illum ea nisi ut doloribus, assumenda velit
                    magni, voluptatibus quibusdam! Possimus qui dolore corporis
                    reiciendis atque pariatur doloremque optio corrupti adipisci
                    nisi odio ab inventore, asperiores ipsa!
                  </div>
                  <div className="pt-3">
                    <h3>My Skills</h3>
                    <ul className="my-skills">
                      <li key="js">
                        <Image src={js} />
                      </li>
                      <li key="reactjs">
                        <Image src={reactjs} />
                      </li>
                      <li key="nodejs">
                        <Image src={nodejs} />
                      </li>
                      <li key="php">
                        <Image src={php} />
                      </li>
                    </ul>
                  </div>
                  <div className="back-btn pt-5">
                    <Button onClick={handleBack} variant="dark">Back</Button>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
