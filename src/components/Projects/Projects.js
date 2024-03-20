import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogCards";
import Particle from "../Particle";
import Trominos from "../../Assets/Projects/trominos.png";
import Injection from "../../Assets/blogs/injection.png";
import forgeOfEmpires from "../../Assets/Projects/forge-of-empires.png";
import monsterLegends from "../../Assets/Projects/monster-legends.png";
import championsDestiny from "../../Assets/Projects/champions-destiny.jpg";
import emergencyMobile from "../../Assets/Projects/emergency-mobile.png";
import paydayCrimewar from "../../Assets/Projects/payday-crimewar.png";
import shinayu from "../../Assets/Projects/shinayu-logo.png";
// import shinayuFootage from "../../Assets/Projects/shinayu-footage.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Careers <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a several projects I've worked on in my career.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forgeOfEmpires}
              isBlog={false}
              title="Forge Of Empires"
              description="Legendary City Builder Game With Conquer and other Features. I worked in a team size of > 50 people. They were split into 4 sub teams. I was main responsible for several game features like 'Guild Wars'."
              ghLink="https://de0.forgeofempires.com/page/"
              demoLink="https://www.youtube.com/watch?v=e8cmBVIhfAU&list=PLG2cw4LiJuQ7e311KlmUXYkjo_nE1W4dO"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monsterLegends}
              isBlog={false}
              title="Monster Legends"
              description="Legendary Monster breed and fight game. I worked in a team size of 12 develop engineers. I was main responsible for several features like the monster ai."
              ghLink="https://www.monsterlegendsgame.com/"
              demoLink="https://www.youtube.com/watch?v=nYFHKkGIhLs&t=23s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={championsDestiny}
              isBlog={false}
              title="Champions Destiny"
              description="RPG Arena battle game. Varying characters with multiple varying weapons are fighting with the help of minion fighters in an arena. The enemies tower has to be destroyed. I worked mainly on implementations of game features, character features and battle. The game is discontinued."
              ghLink="https://www.facebook.com/ChampionsDestiny/"
              demoLink="https://www.youtube.com/watch?v=kosLh7lvF2g&t=32s"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emergencyMobile}
              isBlog={false}
              title="Emergency Mobile"
              description="My first freelance project. Popular game for solving a catastrophical situation in 2D isometric level. I had to port the C++ in house engine of the game based on OpenGL to the platform Windows RT based on DirectX. I managed to this in 3 months."
              ghLink="https://www.facebook.com/sixteentonsentertainment"
              demoLink="https://www.youtube.com/watch?v=5wM98y8nGvQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paydayCrimewar}
              isBlog={false}
              title="Payday: crimewar"
              description="This mobile 4x4 first person shooter game was a big challenge at the time. The game based on a multiplayer dedicated server game and up to 8 clients or bots if not enough players joined the matchmaking. I worked mainly on the meta game and multiplayer game development. The game is discontinued."
              ghLink="https://www.starbreeze.com/our-work/payday-crime-war/"
              demoLink="https://www.youtube.com/watch?v=pQl-l2Fn25Y"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shinayu}
              isBlog={false}
              title="Shinayu"
              description="Card Trading Board Game with RPG elements and 3D battle arena. I developed the game prototype from scratch in 4 months. It is not published yet. The footage is from an early development state."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              // video=
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Samples of my {" "} <strong className="purple">Projects </strong> besides my work for other companies.
        </h1>
        <p style={{ color: "white" }}>
          Projects and Snippets
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trominos}
              isBlog={false}
              title="Trominos"
              description="Puzzle game about domino pieces. sort the pieces in the right order to be able to push one and all are falling. The end domino must be the last falling. Then the escape door opens. In higher levels there will be a dynamic part where you have to sort dominos while the falling process is already running."
              // demoLink="../../Assets/Projects/trominos.footage.mp4"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={Injection}
              isBlog={true}
              title="Dependency Injection"
              description="Dependency injection is very often misunderstood as a miracle framework solving all
                          dependencies classes need to access external resources. Indeed the Unity editor provides
                          its own way to inject dependencies to MonoBehaviour classes by the Inspector. Here the
                          developers or designers are able to set references and inject in this way external resources.
                          But the inspector has a big downsize which I want to explain in the following post. Also I
                          provide my very own way to solve most of these problems without big frameworks like
                          zenject."
              ghLink="/dependency-injection"
            />
          </Col>
        </Row>
    </Container>
  </Container>
  );
}

export default Projects;
