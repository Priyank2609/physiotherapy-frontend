import React from "react";
import { motion } from "framer-motion";
import { DisciplinesSection } from "../../styles/offer";
import { NavLink } from "react-router-dom";
import { useGetServicesQuery } from "../../slices/api.slice";

const PhysioDisciplines = () => {
  const { data } = useGetServicesQuery();
  // console.log(data);

  const disciplines = data?.data.slice(0, 4) || [];
  // console.log(disciplines);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <DisciplinesSection>
      <div className="container">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Our Expertise</span>
          <h2>
            We <span>offer</span> various Physio Disciplines
          </h2>
          <p>
            We provide personalized medical care through comprehensive services
            for all ages.
          </p>
          <NavLink to={"/services"}>
            <button className="btn-all-services">
              Explore All Services
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </NavLink>
        </motion.div>

        <motion.div
          className="disciplines-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {disciplines.map((item, index) => (
            <motion.div
              className="discipline-card"
              key={index}
              variants={itemVariants}
            >
              <div className="card-image">
                <img src={item.mainImage} alt={item.title} />
                <div className="overlay" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
                <NavLink to={`/services/${item._id}`} className="find-out-more">
                  Learn More <span className="arrow">→</span>
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DisciplinesSection>
  );
};

export default PhysioDisciplines;
