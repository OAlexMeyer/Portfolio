import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { TfiYoutube } from "react-icons/tfi"
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function BlogCards(props) {
  const [expand, updateExpanded] = useState(false);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} >
          <CgWebsite /> &nbsp;
          {props.isBlog ? "Blog" : "Landing Page"}
        </Button> */}
        <Nav.Link
          as={Link}
          to={props.ghLink}
          onClick={() => updateExpanded(false)}
        >
        <Button variant="primary" href={props.ghLink} >
          <CgWebsite /> &nbsp;
          Blog
        </Button>
        </Nav.Link>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <TfiYoutube /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default BlogCards;
