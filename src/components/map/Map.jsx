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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.789319782409!2d72.64495!3d23.05376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86c3e2eddc99%3A0x49977169c864fb65!2sKrishnanagar%2C%20Ahmedabad%2C%20Gujarat%20382345!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <motion.div
            className="info-overlay"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {" "}
            <a
              href="https://www.google.com/maps/place/58,+Krishnanagar,+Ahmedabad,+Gujarat+382345/@23.0537553,72.6449501,105m/data=!3m1!1e3!4m15!1m8!3m7!1s0x395e86c3e2eddc99:0x49977169c864fb65!2s58,+Krishnanagar,+Ahmedabad,+Gujarat+382345!3b1!8m2!3d23.0526538!4d72.644796!16s%2Fg%2F11h6ktq5rl!3m5!1s0x395e86c4038b5e03:0xb467febdc46b235c!8m2!3d23.0539829!4d72.645032!16s%2Fg%2F11vsjdg_6m?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="info-item">
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
              </div>
            </a>
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
              href="https://www.google.com/maps/place/58,+Krishnanagar,+Ahmedabad,+Gujarat+382345/@23.0537553,72.6449501,105m/data=!3m1!1e3!4m15!1m8!3m7!1s0x395e86c3e2eddc99:0x49977169c864fb65!2s58,+Krishnanagar,+Ahmedabad,+Gujarat+382345!3b1!8m2!3d23.0526538!4d72.644796!16s%2Fg%2F11h6ktq5rl!3m5!1s0x395e86c4038b5e03:0xb467febdc46b235c!8m2!3d23.0539829!4d72.645032!16s%2Fg%2F11vsjdg_6m?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
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
