import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ServiceList } from "../../styles/service-listing";
import { useGetServicesQuery } from "../../slices/api.slice";
import { NavLink } from "react-router-dom";

const Services = () => {
  const { data, isLoading, isError, refetch } = useGetServicesQuery();

  const services = data?.data || [];
  useEffect(() => {
    refetch();
  }, []);

  return (
    <ServiceList>
      <div className="header-bg">
        <header className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Services
          </motion.h1>
          <p className="subtitle">
            Personalized Physiotherapy for Pain Relief & Recovery
          </p>
          <nav className="breadcrumbs">
            <NavLink to={"/"}>
              <span>Physioterepia Care Center</span>
            </NavLink>
            <span className="sep">›</span>
            <span className="active">Services</span>
          </nav>
        </header>
      </div>

      <section className="container grid-padding">
        {isLoading && <p className="status-text">Loading services...</p>}

        {isError && (
          <p className="status-text error">
            Unable to load services. Please try again later.
          </p>
        )}

        {!isLoading && !isError && services.length === 0 && (
          <motion.div
            className="no-services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>No services available</h3>
            <p>
              We are currently updating our services. Please check back soon or
              contact us for more information.
            </p>
          </motion.div>
        )}

        {!isLoading && !isError && services.length > 0 && (
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="img-box">
                  <img src={service.mainImage} alt={service.title} />
                </div>

                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>

                  <a href={`/services/${service._id}`} className="link-action">
                    Find out More <span className="arrow">›</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </ServiceList>
  );
};

export default Services;
