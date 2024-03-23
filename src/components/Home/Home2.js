import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/alex-avatar-transparent.png";
import Tilt from "react-parallax-tilt";
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
            <p className="home-about-body">
              The first time I got in contact with Video Games and Programming was back 
              in the early {" "}
              <i>
                <b className="purple">
                  1980s
                </b>
              </i>.
              I programmed my first computer game in the {" "}
              <i>
                <b className="purple">
                  age of 13
                </b>
              </i>. 
              At that time I used the programming language {" "}
              <i>
                <b className="purple">
                  Basic
                </b>
              </i>. 
              Very quickly I realized good games need to be coded in {" "}
              <i>
                <b className="purple">
                  Assembler
                </b>
              </i>.
              From that moment on my {" "}
              <i>
                <b className="purple">
                  passion {" "}
                </b>
              </i>
              for programming
              of Video Games was {" "}
              <i>
                <b className="purple">
                  strong
                </b>
              </i>. 
              I followed the whole development of computers and consoles over the decades: {" "}
              <i>
                <b className="purple">
                  Atari 800 XL, Amiga 500, Atari ST, x386 PC, Playstation 1 - 5, 
                  Nintendo SNES / GameCube / Switch
                </b>
              </i>.

              <br />
              <br />I am fluently in classics like {" "}
              <i>
                <b className="purple"> C++, C# and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building awesome and unique  {" "}
              <i>
                <b className="purple">Video Games </b>
                on many different platforms like {" "}
                <b className="purple">
                  Mobile (iOS and Android), PC, Consoles and even big Arcade Halls and Boxes.
                </b>
              </i>
              <br />
              <br />
              My favorite tools to develop are {" "}
              <i>
                <b className="purple"> Rider </b>
              </i>
              as the IDE, {" "}
              <i>
                <b className="purple">
                Unity &nbsp;
                </b>
              </i>
              and {" "}
              <i>
                <b className="purple">
                Unreal &nbsp;
                </b>
              </i>
              as the game engines.
              <br />
              <br />
              I have to leave my comfort zone very often for developing server sided code in <b className="purple"> JS</b> and Websites in
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alexander-meyer-b644461b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
