import React from "react";
import { motion } from "framer-motion";
import { ServiceDetailWrapper } from "../../styles/service-detail";
import { NavLink, useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "../../slices/api.slice";

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
  const { data, isLoading, isError } = useGetServiceByIdQuery(id);
  const service = data?.data;
  // console.log(service);

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

  if (isLoading) return <p className="status-text">Loading...</p>;
  if (isError || !service)
    return <p className="status-text error">Service not found.</p>;

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
            <NavLink to={"/book-appointment"}>
              <motion.button
                className="book-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </section>
    </ServiceDetailWrapper>
  );
};

export default ServiceDetail;
