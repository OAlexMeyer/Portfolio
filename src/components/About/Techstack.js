import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandCSharp, TbBrandUnity } from "react-icons/tb";
import { BsApple, BsAndroid2 } from "react-icons/bs";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiUnrealengine,
  SiPlaystation5,
  SiPlaystation,
  SiNintendoswitch,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsAndroid2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNintendoswitch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaystation />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaystation5 />
      </Col>
    </Row>
  );
}

export default Techstack;
