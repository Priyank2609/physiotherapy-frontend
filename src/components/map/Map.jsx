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
              src="https://maps.app.goo.gl/gogaZD6CXr2ZpiiB8"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
              href="https://www.google.com/maps/place/3J4V%2BP7,+Ahmedabad,+Gujarat/@23.0568137,72.6425424,211m/data=!3m1!1e3!4m13!1m7!3m6!1s0x395e848aba5bd449:0x7136cd41efa2628c!2s3J4V%2BP7,+Ahmedabad,+Gujarat!3b1!8m2!3d23.0568125!4d72.6431875!3m4!1s0x395e848aba5bd449:0x7136cd41efa2628c!8m2!3d23.0568125!4d72.6431875?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
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
                    A-10/116 First Floor Krishna Nagar Gujarat Housing Board
                    Near Mahakali Mandir Saijpur Bogha Ahmedabad
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
              href="https://www.google.com/maps/place/3J4V%2BP7,+Ahmedabad,+Gujarat/@23.0568137,72.6425424,211m/data=!3m1!1e3!4m13!1m7!3m6!1s0x395e848aba5bd449:0x7136cd41efa2628c!2s3J4V%2BP7,+Ahmedabad,+Gujarat!3b1!8m2!3d23.0568125!4d72.6431875!3m4!1s0x395e848aba5bd449:0x7136cd41efa2628c!8m2!3d23.0568125!4d72.6431875?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
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
