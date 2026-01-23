import React from "react";
import { motion } from "framer-motion";
import { MapWrapper } from "../../styles/map";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi";

const MapSection = () => {
  return (
    <MapWrapper id="location">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag">Find Us</span>
          <h2>Visit Our Clinic</h2>
          <p>
            Experience world-class rehabilitation at our Krishna Nagar facility.
            Conveniently located near Priya Cinema.
          </p>
        </motion.div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="map-box">
            <iframe
              title="Physioterapia Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3551523485496!2d72.6373723!3d23.0474149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87178659d57b%3A0xc3b9875f5c1d636!2sKrishna%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20382345!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <motion.div
            className="info-overlay"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <a
                href="https://www.google.com/maps/dir/23.0424576,72.5123072/Jayanand+Society,+Krishnanagar,+Ahmedabad,+Gujarat+382345/@23.0501634,72.4961221,33758m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e86c6a84a28df:0x441608a2f4e58423!2m2!1d72.6447369!2d23.0540154?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon">
                  <HiOutlineLocationMarker />
                </div>

                <div>
                  <h4>Address</h4>
                  <p>
                    39, Jayanand Society, Near Priya Cinema, Krishna Nagar,
                    Ahmedabad – 382345
                  </p>
                </div>
              </a>
            </div>
            <div className="info-item">
              <div className="icon">
                <HiOutlinePhone />
              </div>
              <div>
                <h4>Contact Info</h4>
                <p>
                  <a href="tel:+918460792897">+91 84607 92897</a>
                  <br />
                  <a href="mailto:physioterepia1309@gmail.com">
                    physioterepia1309@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <HiOutlineClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=39+Jayanand+Society+Krishna+Nagar+Ahmedabad+382345"
              target="_blank"
              rel="noopener noreferrer"
              className="get-directions"
            >
              Open in Google Maps <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </MapWrapper>
  );
};

export default MapSection;
