import React from "react";
import { motion } from "framer-motion";
import { AboutWrapper } from "../../styles/about-page";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <AboutWrapper>
      <section className="about-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Us</h1>
          <p>Restoring Mobility, Enhancing Life Since 2014</p>
          <nav className="breadcrumbs">
            <NavLink to={"/"}>
              <span>Physioterepia Care Center</span>
            </NavLink>
            <span className="sep">›</span>
            <span className="active">About Us</span>
          </nav>
        </motion.div>
      </section>

      <section className="about-content">
        <motion.div
          className="about-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <p className="main-intro">
              We are a specialized therapeutic physiotherapy center with highly
              skilled practitioners. At <strong>PHYSIOTEREPIA</strong>, our
              primary goal is to improve the quality of life of our patients
              through personalized, evidence-based clinical treatment.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="grid-card" variants={itemVariants}>
              <div className="icon-box">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To be the global benchmark in physiotherapy care, recognized for
                ethical practice and clinical excellence.
              </p>
            </motion.div>

            <motion.div className="grid-card" variants={itemVariants}>
              <div className="icon-box">🎯</div>
              <h2>Our Mission</h2>
              <p>
                We empower patients to regain mobility and lead pain-free lives
                through innovative rehab techniques.
              </p>
            </motion.div>

            <motion.div
              className="grid-card full-width"
              variants={itemVariants}
            >
              <div className="icon-box">🧠</div>
              <h2>Our Philosophy</h2>
              <p>
                We believe in <strong>Holistic Recovery</strong>. We don't just
                treat symptoms; we diagnose biomechanical imbalances to prevent
                future injuries and ensure long-term wellness.
              </p>
            </motion.div>
          </div>

          <motion.div className="core-values" variants={itemVariants}>
            <h3>Expertise Areas</h3>
            <div className="values-list">
              {[
                "Orthopedic Rehab",
                "Neuro Physiotherapy",
                "Sports Injury Management",
                "Geriatric Care",
                "Post-Surgical Recovery",
              ].map((val, i) => (
                <span key={i} className="value-tag">
                  {val}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="image-stack">
            <div className="main-img-container">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                alt="Therapy Session"
              />
              <div className="experience-badge">
                <strong>10+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </AboutWrapper>
  );
};

export default AboutPage;
