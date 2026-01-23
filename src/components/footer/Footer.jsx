import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FooterSection } from "../../styles/footer";
import { useGetServicesQuery } from "../../slices/api.slice";
import { Instagram, MessageCircle, Facebook, Contact } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { data } = useGetServicesQuery();

  const services = data?.data.slice(0, 4) || [];
  // console.log(services);

  return (
    <FooterSection>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>PHYSIOTERAPIA</h2>
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
              <a href="tel:+918460792897">+91 84607 92897</a>
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
                href="https://www.google.com/maps/search/?api=1&query=39,+Jayanand+Society,+Near+Priya+Cinema,+Krishna+Nagar,+Ahmedabad,+Gujarat+382345"
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions"
              >
                39, Jayanand Society, Ahmedabad
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

              <a href="/" target="_blank" rel="noopener noreferrer">
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
            © {new Date().getFullYear()} &nbsp;<span>PHYSIOTERAPIA</span>. All
            rights reserved
            <Link to="/login" className="admin-trigger">
              .
            </Link>
          </p>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
