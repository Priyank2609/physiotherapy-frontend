import React from "react";
import { motion } from "framer-motion";
import { LoginSection } from "../../styles/login";
import { useLoginMutation } from "../../slices/form.slice";
import { useForm } from "react-hook-form";
import { setCredentails } from "../../slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const [auth, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (formData) => {
    const loadingToast = toast.loading("Authenticating...");

    try {
      const response = await auth(formData).unwrap();

      dispatch(setCredentails(response));

      toast.success("Welcome back, Admin!", { id: loadingToast });

      navigate("/");
    } catch (err) {
      const errorMessage =
        err?.data?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage, { id: loadingToast });
      // console.error("Login failed:", err);
    }
  };

  return (
    <LoginSection>
      <motion.div
        className="login-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-header">
          <div className="icon-box">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <h2>
            Admin <span>Portal</span>
          </h2>
          <p>Secure access for Physioterepia management</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit(login)}>
          <div className="input-field">
            <label>Admin ID</label>
            <input
              type="email"
              placeholder="Enter your ID"
              {...register("email", { required: true })}
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
          </div>

          <button className="login-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Access Dashboard"}
          </button>
        </form>

        <Link to="/" className="back-link">
          ← Return to Homepage
        </Link>
      </motion.div>
    </LoginSection>
  );
};

export default AdminLogin;
