import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TeamCard, TeamGrid, TeamSection } from "../../styles/team";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useGetDoctersQuery } from "../../slices/api.slice";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Wrapper } from "../../styles/service-detail";

const Team = () => {
  const { data, isLoading, isError, refetch } = useGetDoctersQuery();
  const location = useLocation();
  useEffect(() => {
    refetch();
  }, []);
  const newData = data?.data || [];
  const isDoctors = location.pathname === "/doctors";

  if (isLoading) {
    return (
      <Wrapper>
        <div className="status-container">
          <div className="loader"></div>
          <p className="status-text">Connecting with Our Specialists...</p>
        </div>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <div className="status-container">
          <div className="error-icon">!</div>
          <h2 className="status-heading">Connection Issue</h2>
          <p className="status-text">
            We couldn't load the appointment details. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="retry-btn"
          >
            Retry Connection
          </button>
        </div>
      </Wrapper>
    );
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
        {!isDoctors && (
          <div className="view-all-container">
            <NavLink to="/doctors" className="view-all-link">
              <span>Discover All Specialists</span>
              <div className="arrow-icon">
                {" "}
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
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </TeamSection>
  );
};

export default Team;
