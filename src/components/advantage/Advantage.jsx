import React from "react";
import { motion } from "framer-motion";

import {
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineSparkles,
} from "react-icons/hi";
import { AdvantagesSection } from "../../styles/advantage";

const advantages = [
  {
    icon: <HiOutlineUserGroup />,
    title: "Expert Team",
    desc: "Our therapists are internationally certified with specialized clinical backgrounds.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Evidence-Based",
    desc: "We use scientifically proven methods and the latest medical technology for recovery.",
  },
  {
    icon: <HiOutlineClock />,
    title: "Flexible Timing",
    desc: "Convenient morning and evening slots, plus home-visit physiotherapy options.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Modern Facility",
    desc: "A clean, peaceful, and fully equipped environment designed for healing.",
  },
];

const Advantages = () => {
  return (
    <AdvantagesSection>
      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">Our Advantages</span>
          <h2>
            Why Patients Choose <span>Our Clinic</span>
          </h2>
        </motion.div>

        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <motion.div
              className="adv-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-footer" />
            </motion.div>
          ))}
        </div>
      </div>
    </AdvantagesSection>
  );
};

export default Advantages;
