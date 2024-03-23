import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import DependencyInjectionCard from "./DependencyInjectionCard";
import DependencyInjectionCard2 from "./DependencyInjectionCard2";
import injectImg from "../../Assets/blogs/injection.png";

function DependencyInjection() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Dependency Injection in <strong className="purple"> Unity </strong>
            </h1>
            <DependencyInjectionCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "0px" }}
            className="about-img"
          >
            <img src={injectImg} alt="Dependency Injection" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingLeft: "150px", paddingRight: "150px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <DependencyInjectionCard2 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DependencyInjection;
