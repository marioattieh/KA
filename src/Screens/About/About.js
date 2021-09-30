import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  };
  const pageTransitions = {
    duration: 0.5,
    type: "tween",
    ease: "anticipate",
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
      className="about-container"
    >
      <div className="about-1">
        <h1>About Us</h1>
        <p>
          Koullouna Ahel (KA) is a non-profit NGO based in Kfarhazir, Al-Koura,
          in the province of North Lebanon. Koullouna Ahel is committed to
          contributing to social development through initiatives that strive to
          build a sustainable community. Whether it is projects that aid the
          Lebanese armed forces or projects that target our local community
          members, Koullouna Ahel works independent from any governmental
          organization and firmly believes in the construction of a
          strong-rooted national unity through advocating social values.
        </p>
      </div>
      <div className="about-2">
        <div>
          <h1>Our Mission</h1>
          <p>
            Our mission is to develop long-term relationships with our society,
            government and non-government bodies, institutes, and international
            organizations through the continuous improvement of our social and
            humanitarian programs <br /> "كلنا أهل".
          </p>
        </div>
        <div></div>
      </div>
      <div className="about-3">
        <div>
          <h1>Our Vision</h1>
          <p>
            Our vision is to be recognized as one of the leading
            non-governmental organizations whilst providing sustainable and
            reliable programs and projects to our society.
          </p>
        </div>
        <div></div>
      </div>
      <div className="about-4">
        <h1>Our Objectives</h1>
        <h2>People's satisfaction and comfort</h2>
        <p>
          Quality programs and projects that meet and exceed the people's
          expectations.
        </p>
        <h2>HSE</h2>
        <p>
          Focusing on the importance and development of activities to achieve
          the European and international standards in health, safety, and
          environmental protection.
        </p>
        <h2>Innovation</h2>
        <p>
          We shall depend on human innovation and various consultancies from
          experts to present an environment of productivity, sustainability, and
          wellbeing to the members of society;
        </p>
        <h2>Personal development</h2>
        <p>
          Programs that encourage professionalism, skill improvement for
          non-employed, fresh graduate training programs; ecological knowledge.
        </p>
        <h2>Industry support</h2>
        <p>
          Configure and execute support programs for farmers, small business
          owners, and various students.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
