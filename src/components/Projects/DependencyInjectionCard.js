import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function DependencyInjectionCard() {

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="purple">Zenject</h1>
          <p style={{ textAlign: "justify" }}>
            One of the popular dependency injection frameworks for C# and Unity is <strong className="purple">zenject</strong>.
            To show the advantage and obstacles of a strict framework I will first explain in short words
            what zenject is and how to use it.
          </p>
          <p style={{ textAlign: "justify" }}>
            I will quote some words from the developer:
          </p>
          <p style={{ textAlign: "justify" }}>
            <blockquote><h3><strong className="purple">zenject</strong> is a lightweight dependency injection framework built specifically to target Unity.
            It can be used to turn your Unity application into a collection of loosely-coupled parts with
            highly segmented responsibilities. <strong className="purple">zenject</strong> can then glue the parts together in many different 
            configurations to allow you to easily write, re-use, refactor and test your code in a scalable 
            and extremely flexible way.</h3></blockquote>
          </p>
          <p style={{ textAlign: "justify" }}>
            In many cases it is a matter of taste how flexible and extendable the code base is using a framework for 
            dependency injection. But more later.
          </p>
          <p style={{ textAlign: "justify" }}>
            <blockquote><h3>
            <strong className="purple">Unity</strong> is a fantastic game engine, however the approach that new developers are encouraged to take does
              not lend itself well to writing large, flexible, or scalable code bases. In particular, 
              the default way that <strong className="purple">Unity</strong> manages <strong className="purple">dependencies</strong> between different game components can often 
              be awkward and error prone. [...]
              Finally, I will just say that if you don't have experience with <strong className="purple">DI</strong> frameworks, and are writing 
              object oriented code, then trust me, you will thank me later! Once you learn how to write properly 
              loosely coupled code using <strong className="purple">DI</strong>, there is simply no going back.
            </h3></blockquote>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default DependencyInjectionCard;
