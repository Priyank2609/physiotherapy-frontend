import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { Wrapper } from "../../styles/book-appointment";
import {
  useGetDoctersQuery,
  useGetServicesQuery,
} from "../../slices/api.slice";
import { useAppointmentMutation } from "../../slices/form.slice";
import { NavLink, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { data } = useGetServicesQuery();
  const { data: doc } = useGetDoctersQuery();
  const [appointment] = useAppointmentMutation();

  const services = data?.data || [];
  const doctors = doc?.data || [];
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const loadingToast = toast.loading("Checking availability...");

    const formatTimeTo12Hour = (time24) => {
      const [hours, minutes] = time24.split(":");
      let h = parseInt(hours, 10);
      const suffix = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      const formattedHours = h < 10 ? `0${h}` : h;
      return `${formattedHours}:${minutes} ${suffix}`;
    };

    try {
      const submissionData = {
        ...formData,
        appointmentTime: formatTimeTo12Hour(formData.appointmentTime),
      };

      await appointment(submissionData).unwrap();

      toast.success(
        "Your appointment is booked! We will update you on your mail soon.",
        {
          id: loadingToast,
          duration: 5000,
        },
      );

      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to book.", {
        id: loadingToast,
      });
    }
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Max date = today + 30 days
  const maxDateObj = new Date();
  maxDateObj.setDate(today.getDate() + 30);

  const todayStr = today.toISOString().split("T")[0];
  const maxDateStr = maxDateObj.toISOString().split("T")[0];
  return (
    <Wrapper>
      <section className="form-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Appointment
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Restoring Mobility, Enhancing Life Since 2014
          </motion.p>
          <nav className="breadcrumbs">
            <NavLink to={"/"}>
              <span>Physiotherapy and Rehab centre</span>
            </NavLink>
            <span className="sep">›</span>
            <span className="active">Book Appointment</span>
          </nav>
        </div>
      </section>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="form-intro">
          <h2>Request a Consultation</h2>
          <p>Please fill out the form below to schedule your visit.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Patient Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("patientName", { required: "Name is required" })}
            />
            {errors.patientName && (
              <span className="error">{errors.patientName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Patient Email *</label>
            <input
              type="email"
              placeholder="example@mail.com"
              {...register("patientEmail", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />
            {errors.patientEmail && (
              <span className="error">{errors.patientEmail.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Patient Phone *</label>

            <input
              type="tel"
              placeholder="Enter 10 digit phone number"
              maxLength={10}
              inputMode="numeric"
              {...register("patientPhone", {
                required: "Phone is required",

                validate: (value) => {
                  if (!/^[6-9]\d{9}$/.test(value)) {
                    return "Enter valid Indian mobile number";
                  }

                  if (/^(\d)\1{9}$/.test(value)) {
                    return "Invalid phone number";
                  }

                  return true;
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />

            {errors.patientPhone && (
              <span className="error">{errors.patientPhone.message}</span>
            )}

            {errors.patientPhone && (
              <span className="error">{errors.patientPhone.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Select Doctor *</label>
            <select {...register("doctorId", { required: "Select a doctor" })}>
              <option value="">-- Choose Specialist --</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            {errors.doctorId && (
              <span className="error">{errors.doctorId.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Select Service *</label>
            <select
              {...register("serviceId", { required: "Select a service" })}
            >
              <option value="">-- Choose Treatment --</option>
              {services.map((service) => (
                <>
                  <option key={service._id} value={service._id}>
                    {service.title}
                  </option>
                </>
              ))}
              <option value="">Other</option>
            </select>
            {errors.serviceId && (
              <span className="error">{errors.serviceId.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Appointment Date *</label>

            <input
              type="date"
              min={todayStr}
              max={maxDateStr}
              {...register("appointmentDate", {
                required: "Date is required",

                validate: (value) => {
                  const selected = new Date(value);
                  selected.setHours(0, 0, 0, 0);

                  // ❌ Past date check
                  if (selected < today) {
                    return "Past dates are not allowed";
                  }

                  // ❌ Sunday check
                  if (selected.getDay() === 0) {
                    return "Appointments are not available on Sundays";
                  }

                  // ❌ Same day booking time restriction (after 6 PM)
                  const now = new Date();
                  if (value === todayStr && now.getHours() >= 18) {
                    return "Same-day booking closed after 6 PM";
                  }

                  return true;
                },
              })}
            />

            {errors.appointmentDate && (
              <span className="error">{errors.appointmentDate.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Appointment Time *</label>
            <input
              type="time"
              placeholder="Select Time"
              {...register("appointmentTime", { required: "Time is required" })}
            />
            {errors.appointmentTime && (
              <span className="error">{errors.appointmentTime.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Message / Notes</label>
            <textarea
              {...register("message")}
              rows="3"
              placeholder="Briefly describe your condition..."
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </button>
        </form>
      </motion.div>
    </Wrapper>
  );
};

export default BookAppointment;
