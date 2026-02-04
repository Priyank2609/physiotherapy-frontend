import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Brain,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Award,
  UserCheck,
  Trash2,
  Edit3,
} from "lucide-react";
import {
  PageWrapper,
  HeroSection,
  GridContainer,
  Sidebar,
  MainContent,
} from "../../styles/team-detail-page";
import { useGetTeamByIdQuery } from "../../slices/api.slice";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDeleteDoctorMutation } from "../../slices/form.slice";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const DoctorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError, refetch } =
    useGetTeamByIdQuery(id);
  const [deleteDoctor, { isLoading: isDeleting }] = useDeleteDoctorMutation();

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const isAdmin = userInfo?.user?.role === "Admin";

  useEffect(() => {
    refetch();
  }, []);
  const handleDelete = () => {
    toast.custom(
      (t) => (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          style={{
            maxWidth: "350px",
            width: "100%",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(6, 78, 59, 0.15)",
            border: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            pointerEvents: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "#fef2f2",
                padding: "8px",
                borderRadius: "10px",
                color: "#ef4444",
              }}
            >
              <Trash2 size={20} />
            </div>
            <div>
              <h4
                style={{
                  margin: 0,
                  color: "#064e3b",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Confirm Removal
              </h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
                This will permanently delete the profile.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const loadId = toast.loading("Removing Specialist...");
                try {
                  await deleteDoctor(id).unwrap();
                  toast.success("Profile deleted", {
                    id: loadId,
                  });

                  navigate("/doctors");
                  setTimeout(() => {
                    toast.dismiss();
                  }, 4000);
                } catch (err) {
                  toast.error("Error occurred", { id: loadId, duration: 4000 });
                }
              }}
              style={{
                flex: 1,
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Confirm Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              style={{
                flex: 1,
                background: "#f8fafc",
                color: "#64748b",
                border: "1px solid #e2e8f0",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      ),
      { duration: 6000, position: "bottom-right" },
    );
  };
  if (isLoading || isFetching) {
    return (
      <PageWrapper>
        <div
          className="container"
          style={{ padding: "100px 0", textAlign: "center" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Stethoscope size={48} color="#064e3b" />
          </motion.div>
          <h2 style={{ marginTop: "20px", color: "#64748b" }}>
            Loading Specialist Details...
          </h2>
        </div>
      </PageWrapper>
    );
  }

  if (isError || !data?.data) {
    return (
      <PageWrapper>
        <div
          className="container"
          style={{ padding: "100px 0", textAlign: "center" }}
        >
          <h2 style={{ color: "#ef4444" }}>Specialist Not Found</h2>
          <p>We couldn't retrieve the details for this doctor.</p>
        </div>
      </PageWrapper>
    );
  }

  const doctor = data.data;

  return (
    <PageWrapper as={motion.div} initial="hidden" animate="visible">
      <HeroSection>
        <div className="container">
          <motion.div
            className="breadcrumb"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <NavLink to={"/"}>Physioterepia Care Center</NavLink> &nbsp; /
            &nbsp; <span>Our Team</span>
          </motion.div>

          <div className="profile-header">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <img src={doctor.profileImage} alt={doctor.name} />
              <motion.div
                className="experience-tag"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <Award size={18} /> {doctor.experience}+ Years Exp
              </motion.div>
            </motion.div>

            <div className="header-info">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {doctor.name}
              </motion.h1>
              <motion.p
                className="specialty-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {doctor.specialization}
              </motion.p>

              <div className="qual-list">
                {doctor.qualifications?.map((q, i) => (
                  <motion.div
                    key={i}
                    className="qual-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <GraduationCap size={18} className="icon-teal" /> {q}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <GridContainer className="container">
        <MainContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.section variants={itemVariants}>
            <div className="section-head">
              <UserCheck className="icon-teal" />
              <h3>Clinical Expertise</h3>
            </div>
            <p className="bio-paragraph">{doctor.bio}</p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div className="section-head">
              <Stethoscope className="icon-teal" />
              <h3>Conditions Treated</h3>
            </div>
            <div className="conditions-grid">
              {doctor.conditionsTreated?.map((cond, idx) => (
                <motion.div
                  key={idx}
                  className="condition-pill"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f0fdf4",
                    borderColor: "#10b981",
                  }}
                >
                  <CheckCircle2 size={16} className="icon-blue" />
                  <span>{cond}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="neuro-box">
            <div className="section-head">
              <Brain className="icon-teal" />
              <h3>Neurological Rehabilitation</h3>
            </div>
            <div className="neuro-list">
              {doctor.neurologicalExpertise?.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="neuro-item"
                  whileHover={{ x: 5, color: "#064e3b" }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </MainContent>

        <Sidebar>
          <motion.div
            className="sticky-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4>Consultation Hours</h4>
            <div className="time-rows">
              <div className="time-row">
                <Calendar size={18} />{" "}
                <span>{doctor.availability?.days?.join(", ")}</span>
              </div>
              <div className="time-row">
                <Clock size={18} />{" "}
                <span>
                  {doctor.availability?.hours?.start} AM -{" "}
                  {doctor.availability?.hours?.end} PM
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/3J4V%2BP7,+Ahmedabad,+Gujarat/@23.0568137,72.6425424,211m/data=!3m1!1e3!4m13!1m7!3m6!1s0x395e848aba5bd449:0x7136cd41efa2628c!2s3J4V%2BP7,+Ahmedabad,+Gujarat!3b1!8m2!3d23.0568125!4d72.6431875!3m4!1s0x395e848aba5bd449:0x7136cd41efa2628c!8m2!3d23.0568125!4d72.6431875?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions"
              >
                <div className="time-row">
                  <MapPin size={18} /> <strong>In-Clinic Consultation</strong>
                  <br />
                  A-10/116, Krishna Nagar, Near Mahakali Mandir, Saijpur Bogha,
                  Ahmedabad
                </div>
              </a>
            </div>

            {isAdmin ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                <NavLink
                  to={`/admin/edit-doctor/${doctor._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <motion.button
                    className="booking-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: "#064e3b",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Edit3 size={18} /> Update Details
                  </motion.button>
                </NavLink>

                <motion.button
                  className="booking-btn"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  whileHover={{ scale: 1.02, backgroundColor: "#fee2e2" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "#fff",
                    color: "#dc2626",
                    border: "1px solid #fecaca",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: 0,
                  }}
                >
                  {isDeleting ? (
                    "Removing..."
                  ) : (
                    <>
                      <Trash2 size={18} /> Delete Doctor
                    </>
                  )}
                </motion.button>
              </div>
            ) : (
              <NavLink
                to={"/book-appointment"}
                style={{ textDecoration: "none" }}
              >
                <motion.button
                  className="booking-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Appointment <ChevronRight size={18} />
                </motion.button>
              </NavLink>
            )}

            <p className="note">
              Personalized recovery plans for every patient.
            </p>
          </motion.div>
        </Sidebar>
      </GridContainer>
    </PageWrapper>
  );
};

export default DoctorDetailPage;
