import React from "react";
import { motion } from "framer-motion";
import { AboutSection } from "../../styles/about";
import { NavLink } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <AboutSection id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
              alt="Physiotherapy Session"
            />
            <motion.div
              className="experience-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <h3>5+</h3>
              <span>Years Experience</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="tag">
              About PHYSIOTEREPIA
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Trusted Physiotherapy Care <br />
              <span>For Pain-Free Living</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              At <strong>PHYSIOTEREPIA</strong>, we are dedicated to restoring
              movement, relieving pain, and improving quality of life through
              evidence-based physiotherapy treatments.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our expert therapists design personalized rehabilitation programs
              tailored to your condition—whether it’s orthopedic issues,
              neurological rehabilitation, or sports injuries.
            </motion.p>

            <motion.ul className="about-list" variants={itemVariants}>
              {[
                "Certified & Experienced Physiotherapists",
                "Advanced Treatment Techniques",
                "Personalized Recovery Plans",
                "Home Visit Physiotherapy Available",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <span className="check">✔</span> {text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <NavLink to="/contact" className="about-btn">
                Book Consultation
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
