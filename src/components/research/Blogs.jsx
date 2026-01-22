import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  User,
  ChevronRight,
  Plus,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import {
  useGetAdminBlogsQuery,
  useGetAllBlogsQuery,
} from "../../slices/api.slice";
import { useSelector } from "react-redux";
import {
  ListingWrapper,
  BlogGrid,
  BlogCard,
  FeaturedBadge,
  HeaderSection,
  LoadingState,
  Container,
  CreateButton,
} from "../../styles/blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Blogs = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const isAdmin = userInfo?.user?.role === "Admin";
  const publicData = useGetAllBlogsQuery(undefined, { skip: isAdmin });
  const adminData = useGetAdminBlogsQuery(undefined, { skip: !isAdmin });

  const isLoading = isAdmin ? adminData.isLoading : publicData.isLoading;
  const error = isAdmin ? adminData.error : publicData.error;
  const refetch = isAdmin ? adminData.refetch : publicData.refetch;

  const blogs = isAdmin
    ? adminData.data?.blogs || []
    : publicData.data?.blogs || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? "Recent Post"
      : date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
  };

  if (isLoading) return <LoadingState>Loading Medical Archive...</LoadingState>;
  if (error)
    return (
      <LoadingState>
        Error loading data. <button onClick={() => refetch()}>Try Again</button>
      </LoadingState>
    );

  return (
    <ListingWrapper as={motion.div} initial="hidden" animate="visible">
      <HeaderSection>
        <Container>
          <div className="header-flex">
            <motion.div
              className="text-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="subtitle">Clinical Insights & Research</span>
              <h1>Physiotherapy Knowledge Base</h1>
              <p>
                Curated recovery protocols and preventive care by Dr. Saurabh
                Prajapati.
              </p>
            </motion.div>

            {isAdmin && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CreateButton to="/admin/create-blog">
                  <Plus size={20} /> <span>Create Medical Blog</span>
                </CreateButton>
              </motion.div>
            )}
          </div>
        </Container>
      </HeaderSection>

      <Container>
        {blogs.length === 0 ? (
          <motion.div
            className="no-blogs-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="empty-icon-circle">
              <BookOpen size={48} />
            </div>
            <h2>Archive Empty</h2>
            <p>
              Our medical library is currently being updated. Please check back
              later.
            </p>
            <button className="refresh-link" onClick={() => refetch()}>
              <RefreshCw size={16} /> Refresh
            </button>
          </motion.div>
        ) : (
          <BlogGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                as={motion.div}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <Link to={`/blogs/${blog.slug}`}>
                  <div className="card-image">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <FeaturedBadge>Insight</FeaturedBadge>
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span>
                        <User size={14} /> {blog.author}
                      </span>
                      <span>
                        <Clock size={14} /> {formatDate(blog.createdAt)}
                      </span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description?.substring(0, 100)}...</p>
                    <div className="read-more">
                      Read Full Article <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </BlogCard>
            ))}
          </BlogGrid>
        )}
      </Container>
    </ListingWrapper>
  );
};

export default Blogs;
