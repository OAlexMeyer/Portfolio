import React from 'react'
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        My full name is <span className="text-[#915eff]">Alexander Meyer</span>.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        But, please, call me <span className="text-[#915eff]">Alex</span>.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        After finishing my studies in technical informatics and computer science I started
        working in a small CAD/CAM software development company. We built the standard
        Pipe planning and construction software for the German ship industry. At that
        time linux and VMS were the industry standard deployment platforms.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        After almost 8 years I tried to find back to my roots and my lifetime passion: {" "}
        <span className="text-[#915eff]">
          Game Development.
        </span>
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        After a few years of side jobs and side projects for web development, smaller game projects
        and other business. I started full time development in C++ for German companies.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        Iteratively I forced my career by consequently learning the current technologies on hard-
        and software side. Working in big teams formed my understanding of working flows like 
        Kanban and SCRUM.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        I dived into the game engines available for free and created some nice mini games for learning
        purposes. At the same time I worked in big teams on game features for popular game titles world wide.
        After a while I focused mainly on Unity and gained an expert status. I discovered 
        <span className="purple"> C# </span> as my new favorite coding language. I had to port for several companies
        existing code bases from early versions of the engine to the actual one. I got in touch with nearly
        every aspect of the engine. This also included backend services. More in the projects and snippets sections.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]">
        &quot;There are no problems at all, just challenges!&quot;{" "}
      </motion.p>
    </>
  )
}

export default About;