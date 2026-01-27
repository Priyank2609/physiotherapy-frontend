import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ServiceDetailWrapper, Wrapper } from "../../styles/service-detail";
import { NavLink, useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "../../slices/api.slice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetServiceByIdQuery(id);
  const service = data?.data;
  // console.log(service);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  const benefitsArray = service?.benefits
    ? Array.isArray(service.benefits)
      ? service.benefits
      : service.benefits.split(",").map((i) => i.trim())
    : [];
  const treatmentsArray = service?.treatments
    ? Array.isArray(service.treatments)
      ? service.treatments
      : service.treatments.split(",").map((i) => i.trim())
    : [];
  useEffect(() => {
    refetch();
  }, []);
  const handleDelete = () => {
    console.log(""sevice,service._id);

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
                Confirm Service Deletion
              </h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
                This service will be permanently removed.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const loadId = toast.loading("Deleting service...");

                try {
                  await useDeleteServiceMutation(service._id).unwrap();

                  toast.success("Service deleted successfully", {
                    id: loadId,
                  });

                  navigate("/admin/services");

                  setTimeout(() => {
                    toast.dismiss();
                  }, 4000);
                } catch (err) {
                  toast.error("Failed to delete service", {
                    id: loadId,
                    duration: 4000,
                  });
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

  if (isLoading) {
    return (
      <Wrapper>
        <div className="status-container">
          <div className="loader"></div>
          <p>Loading service details...</p>
        </div>
      </Wrapper>
    );
  }

  if (isError || !service) {
    return (
      <Wrapper>
        <div className="status-container">
          <div className="error-icon">!</div>
          <h2>Service Not Found</h2>
          <p>We couldn't find the treatment you're looking for.</p>
          <NavLink to="/" className="back-btn">
            Return to Home
          </NavLink>
        </div>
      </Wrapper>
    );
  }

  return (
    <ServiceDetailWrapper>
      <div className="header-bg">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {service.shortDescription}
          </motion.p>

          <nav className="breadcrumbs">
            <span>Physioterepia Care Center</span>
            <span className="sep">›</span>
            <span className="active">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="container content-section">
        <div className="images">
          <motion.div
            className="main-img"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={service.mainImage} alt={service.title} />
          </motion.div>
          <motion.div
            className="secondary-img"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <img src={service.secondaryImage} alt={service.title} />
          </motion.div>
        </div>

        <div className="details">
          <motion.div
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>About This Service</h2>
            <p>{service.longDescription}</p>
          </motion.div>

          {benefitsArray.length > 0 && (
            <motion.div
              className="benefits"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Benefits</h3>
              <ul>
                {benefitsArray.map((b, idx) => (
                  <motion.li key={idx} variants={itemVariants}>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {treatmentsArray.length > 0 && (
            <motion.div
              className="treatments"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Treatments Included</h3>
              <ul>
                {treatmentsArray.map((t, idx) => (
                  <motion.li key={idx} variants={itemVariants}>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div
            className="info-box"
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <strong>Duration:</strong> <span>{service.duration} mins</span>
            </div>
            <div className="info-item">
              <strong>Price:</strong> <span>₹{service.price}</span>
            </div>
            <div className="action-buttons">
              {!isAdmin && (
                <NavLink to={"/book-appointment"}>
                  <motion.button
                    className="book-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </NavLink>
              )}

              {isAdmin && (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <NavLink to={`/admin/update-service/${service._id}`}>
                    <button className="edit-btn">✏️ Edit</button>
                  </NavLink>

                  <button className="delete-btn" onClick={handleDelete}>
                    🗑 Delete
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </ServiceDetailWrapper>
  );
};

export default ServiceDetail;
