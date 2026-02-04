import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FooterSection } from "../../styles/footer";
import { useGetServicesQuery } from "../../slices/api.slice";
import { Instagram, MessageCircle, Facebook, Contact } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const { data } = useGetServicesQuery();

  const services = data?.data.slice(0, 4) || [];

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  // console.log(services);

  return (
    <FooterSection>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>PHYSIOTEREPIA</h2>
            <p>
              Providing expert physiotherapy care with compassion, innovation,
              and personalized treatment plans for a pain-free life.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((serv) => {
                return (
                  <NavLink to={`/services/${serv._id}`} key={serv._id}>
                    <li>{serv.title}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-item">
              <span>Phone:</span>{" "}
              <a href="tel:+918460792897">+91 84607 92897</a> ,{" "}
              <a href="tel:+917229051916">+91 72290 51916</a>
            </div>

            <div className="contact-item">
              <span>Email:</span>{" "}
              <a href="mailto:physioterepia1309@gmail.com">
                physioterepia1309@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>Location:</span>
              <a
                href="https://www.google.com/maps/place/3J4V%2BP7,+Ahmedabad,+Gujarat/@23.0568137,72.6425424,211m/data=!3m1!1e3!4m13!1m7!3m6!1s0x395e848aba5bd449:0x7136cd41efa2628c!2s3J4V%2BP7,+Ahmedabad,+Gujarat!3b1!8m2!3d23.0568125!4d72.6431875!3m4!1s0x395e848aba5bd449:0x7136cd41efa2628c!8m2!3d23.0568125!4d72.6431875?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions"
              >
                A-10/116 First Floor Krishna Nagar Gujarat Housing Board Near
                Mahakali Mandir Saijpur Bogha Ahmedabad
              </a>
            </div>

            <div className="socials">
              <a
                href="https://wa.me/8460792897"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} strokeWidth={2.5} />
              </a>

              <a
                href="https://instagram.com/physioterepia_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} strokeWidth={2.5} />
              </a>

              <a
                href="https://www.facebook.com/share/1KJNUUQc9M/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} strokeWidth={2.5} />
              </a>
              <NavLink to={"/contact"}>
                {" "}
                <Contact size={20} strokeWidth={2.5} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} &nbsp;<span>PHYSIOTEREPIA</span>. All
            rights reserved
            {!isAdmin && (
              <Link to="/admin/login" className="admin-trigger">
                .
              </Link>
            )}
          </p>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
