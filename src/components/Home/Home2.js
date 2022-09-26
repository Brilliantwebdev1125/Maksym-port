import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sweden.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ lineHeight: 3 }}>
              I have been working as a Web Developer for 6 years in both
              Front-end and Back-end web development. Also I have good
              experience in Blockchain and solidity. As a problem solver who
              loves facing challenges in my work, I'm excited to be at the
              deployment phase of my career as a web developer. I'm passionate
              and ambitious about my work, and love to be on a team that
              questions possibilities. I am looking for a new job opportunity in
              Full stack development. I will work harder with all my ability and
              knowledge for the company. Congratulations!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
}
export default Home2;
