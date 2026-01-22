import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TeamCard, TeamGrid, TeamSection } from "../../styles/team";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useGetDoctersQuery } from "../../slices/api.slice";
import { NavLink } from "react-router-dom";

const Team = () => {
  const { data, isLoading, error, refetch } = useGetDoctersQuery();

  useEffect(() => {
    refetch();
  }, []);
  const newData = data?.data || [];
  // console.log(newData);

  if (isLoading) {
    return <p>looding....</p>;
  }

  return (
    <TeamSection id="team">
      <div className="container">
        <motion.div
          className="header-area"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="badge">Elite Medical Board</span>
          <h2 className="section-title">
            The Hands Behind Your <span>Recovery</span>
          </h2>
          <p className="section-subtitle">
            Our board-certified therapists combine clinical excellence with a
            compassionate approach to restore your movement.
          </p>
        </motion.div>

        <TeamGrid>
          {newData.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "backOut",
              }}
            >
              <TeamCard>
                <div className="image-wrapper">
                  <img
                    src={member.profileImage || "/doctor-placeholder.png"}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = "/doctor-placeholder.png";
                    }}
                  />

                  <div className="card-overlay" />

                  <div className="social-links">
                    <button className="s-link">
                      <FaLinkedinIn />
                    </button>
                    <button className="s-link">
                      <FaEnvelope />
                    </button>
                  </div>
                </div>

                <div className="content-box">
                  <span className="role-tag">{member.specialization}</span>

                  <h3>{member.name}</h3>

                  <p>{member.experience} Years Experience</p>

                  <div className="card-footer">
                    <NavLink to={`/team/${member._id}`}>
                      <button className="profile-btn">View Full Profile</button>
                    </NavLink>
                  </div>
                </div>
              </TeamCard>
            </motion.div>
          ))}
        </TeamGrid>
      </div>
    </TeamSection>
  );
};

export default Team;
