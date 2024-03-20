import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            My full name is <span className="purple"> Olaf Alexander Meyer</span>.
          </p>
          <p>
            But, please, call me Alex.
          </p>
          <p style={{ textAlign: "justify" }}>
            After finishing my studies in technical informatics and computer science I started
            working in a small CAD/CAM software development company. We built the standard
            Pipe planning and construction software for the German ship industry. At that
            time linux and VMS were the industry standard deployment platforms.
          </p>
          <p>
            After almost 8 years I tried to find back to my roots and my lifetime passion: {" "}
            <span className="purple">
              Game Development.
            </span>
          </p>
          <p>After a few years of side jobs and side projects for web development, smaller game projects
            and other business. I started full time development in C++ for German companies.
          </p>
          <p>Iteratively I forced my career by consequently learning the current technologies on hard-
            and software side. Working in big teams formed my understanding of working flows like 
            Kanban and SCRUM.
          </p>
          <p>I dived into the game engines available for free and created some nice mini games for learning
            purposes. At the same time I worked in big teams on game features for popular game titles world wide.
            After a while I focused mainly on Unity and gained an expert status. I discovered 
            <span className="purple"> C# </span> as my new favorite coding language. I had to port for several companies
            existing code bases from early versions of the engine to the actual one. I got in touch with nearly
            every aspect of the engine. This also included backend services. More in the projects and snippets sections.
          </p>
          <p>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Playstation)
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to the movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Cult TV-Shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There are no problems at all, just challenges!"{" "}
          </p>
          <footer className="blockquote-footer">Alexander</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
