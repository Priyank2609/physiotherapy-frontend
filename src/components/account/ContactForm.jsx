import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactWrapper } from "../../styles/contact-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useContactFormMutation } from "../../slices/form.slice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const sidebarVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const ContactForm = () => {
  const navigate = useNavigate();
  const [submitForm, { isLoading, isError, isSuccess }] =
    useContactFormMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Sending your message...");

    try {
      await submitForm({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }).unwrap();

      toast.success("Message sent successfully! ✅", {
        id: loadingToast,
        duration: 4000,
      });
      navigate("/");
    } catch (err) {
      toast.error(
        err?.data?.message || "Failed to send message. Please try again.",
        { id: loadingToast },
      );
    }
  };

  return (
    <ContactWrapper>
      <div className="header-bg">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Us
          </motion.h1>
          <motion.nav
            className="breadcrumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <NavLink to={"/"}>
              <span>Physioterepia Care Center</span>
            </NavLink>
            <span className="sep">›</span>
            <span className="active">Contact</span>
          </motion.nav>
        </div>
      </div>

      <div className="container main-content">
        <div className="contact-grid">
          <motion.div
            className="form-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="form-title" variants={itemVariants}>
              <h2>Send us a Message</h2>
              <motion.div
                className="underline"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div className="input-group" variants={itemVariants}>
                <label>Full Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                />
              </motion.div>

              <div className="row">
                <motion.div className="input-group" variants={itemVariants}>
                  <label>Email Address</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="name@example.com"
                  />
                </motion.div>
                <motion.div className="input-group" variants={itemVariants}>
                  <label>Phone Number</label>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="+91 00000 00000"
                  />
                </motion.div>
              </div>

              <motion.div className="input-group" variants={itemVariants}>
                <label>Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#0284c7",
                  boxShadow: "0px 10px 20px rgba(14, 165, 233, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? "Sending..." : "Submit Request"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="info-sidebar"
            variants={sidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="info-item" variants={itemVariants}>
              <h3>Our Location</h3>
              <p>
                <a
                  href="https://www.google.com/maps/place/58,+Krishnanagar,+Ahmedabad,+Gujarat+382345/@23.0537553,72.6449501,105m/data=!3m1!1e3!4m15!1m8!3m7!1s0x395e86c3e2eddc99:0x49977169c864fb65!2s58,+Krishnanagar,+Ahmedabad,+Gujarat+382345!3b1!8m2!3d23.0526538!4d72.644796!16s%2Fg%2F11h6ktq5rl!3m5!1s0x395e86c4038b5e03:0xb467febdc46b235c!8m2!3d23.0539829!4d72.645032!16s%2Fg%2F11vsjdg_6m?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-directions"
                >
                  39, Jayanand Society, Near Priya Cinema, Krishna Nagar,
                  Ahmedabad – 382345{" "}
                </a>
              </p>
            </motion.div>
            <motion.div className="info-item" variants={itemVariants}>
              <h3>Opening Hours</h3>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </motion.div>
            <motion.div className="info-item" variants={itemVariants}>
              <h3>Quick Contact</h3>
              <a href="tel:+918460792897">
                <motion.p
                  className="highlight"
                  whileHover={{ color: "#0ea5e9", x: 5 }}
                >
                  +91 84607 92897
                </motion.p>
              </a>
              <a href="mailto:physioterepia1309@gmail.com">
                <p>physioterepia1309@gmail.com</p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default ContactForm;
