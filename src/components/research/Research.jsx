import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { NewsSection } from "../../styles/reseacrh";
import { useGetAllBlogsQuery } from "../../slices/api.slice";

const NewsResearch = () => {
  const { data, isLoading, isFetching, isError } = useGetAllBlogsQuery();

  const newsData = data?.blogs?.slice(0, 3) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (isLoading || isFetching) {
    return (
      <NewsSection id="news">
        <div className="container">
          <div className="section-header">
            <span className="tag">News & Research</span>
            <h2>Latest Health Insights & Updates</h2>
            <p>Loading latest blogs...</p>
          </div>
        </div>
      </NewsSection>
    );
  }

  if (isError) {
    return (
      <NewsSection id="news">
        <div className="container">
          <div className="section-header">
            <span className="tag">News & Research</span>
            <h2>Latest Health Insights & Updates</h2>
            <p>Failed to load blogs. Please try again later.</p>
          </div>
        </div>
      </NewsSection>
    );
  }

  return (
    <NewsSection id="news">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag">News & Research</span>
          <h2>Latest Health Insights & Updates</h2>
          <p>
            Stay informed with the latest physiotherapy research, health tips,
            and clinic updates curated by our experts.
          </p>
        </motion.div>

        <motion.div
          className="news-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newsData.map((item) => (
            <motion.div
              className="news-card"
              key={item._id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <span className="date">
                {new Date(item.publishedAt).toLocaleDateString()}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description?.slice(0, 120)}...</p>

              <NavLink to={`/blogs/${item.slug}`} className="read-more">
                Read More <span>→</span>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </NewsSection>
  );
};

export default NewsResearch;
