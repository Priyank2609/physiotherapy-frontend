import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TestimonialsSection } from "../../styles/review";
import { HiStar } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Review = () => {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Athlete",
      text: "The sports rehab here is exceptional. Dr. Saurabh helped me recover from an ACL tear in record time. Truly professional and highly recommended for athletes in Ahmedabad.",
      rating: 5,
    },
    {
      name: "Priya Shah",
      role: "Corporate Professional",
      text: "I had chronic back pain due to long desk hours. The personalized stretching and posture correction program changed my life. I am now pain-free!",
      rating: 5,
    },
    {
      name: "Rajesh Varma",
      role: "Post-Surgery Patient",
      text: "After my knee replacement, I was worried about walking again. The team at Physioterapia provided compassionate care that got me back on my feet.",
      rating: 5,
    },

    {
      name: "Sneha Patel",
      role: "Yoga Instructor",
      text: "As a yoga teacher, my body is my tool. The maintenance sessions here keep me flexible and prevent injuries. The team really understands biomechanics.",
      rating: 5,
    },
  ];

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge">Success Stories</span>
          <h2>
            Health Journeys That <span>Inspire</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <HiStar key={i} />
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>

                <div className="user-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TestimonialsSection>
  );
};

export default Review;
