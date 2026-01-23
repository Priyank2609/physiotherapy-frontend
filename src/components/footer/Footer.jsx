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
                href="https://www.google.com/maps/dir/23.0424576,72.5123072/Jayanand+Society,+Krishnanagar,+Ahmedabad,+Gujarat+382345/@23.0501634,72.4961221,33758m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e86c6a84a28df:0x441608a2f4e58423!2m2!1d72.6447369!2d23.0540154?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D"
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
            {!isAdmin && (
              <Link to="/login" className="admin-trigger">
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
