import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TestimonialsSection, Wrapper } from "../../styles/review";
import { HiStar } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetAllReviewsQuery } from "../../slices/api.slice";

const Review = () => {
  const { data, isError, isLoading } = useGetAllReviewsQuery();

  const testimonials = data?.reviews || [];

  if (isLoading) {
    return (
      <Wrapper>
        <div className="reviews-loading">
          <p>Loading community reviews...</p>
        </div>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <div className="reviews-error" role="alert">
          <p>Unable to load reviews at this time.</p>
          <button onClick={() => refetch()}>Try Again</button>
        </div>
      </Wrapper>
    );
  }
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

                <p className="testimonial-text">"{item.message}"</p>

                <div className="user-info">
                  <h4>{item.name}</h4>
                  <span>{item.service}</span>
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
