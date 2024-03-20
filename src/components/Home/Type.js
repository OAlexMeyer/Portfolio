import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Game Developer",
          "Senior Unity Game Developer",
          "Lead Unity Game Developer",
          "Freelancer",
          "Entrepreneur",
          "Playstation Fan",
          "Cinematic Movie Addict",
          "TV Series Junkie",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
