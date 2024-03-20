import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/monkey-and-cat-small-inverted.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 60 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={ {paddingBottom: 120 } }>
                My name is 
                <strong className="main-name"> Alexander </strong>
              </h1>


              <div style={{ padding: 80, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ paddingLeft: 80, maxHeight: "300px", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
              />

              <h1 style={{ paddingBottom: 15 }} className="heading-name-centered">
                <p>Cat & Monkey</p>
                <p><strong className="main-name"> BITES</strong></p>
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="tiny-addition-centered">
                (Best Immersive Tech-Entertainment Solutions)
              </h1>

            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
