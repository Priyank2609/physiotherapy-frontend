import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Clock,
  User,
  Activity,
  Lightbulb,
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Edit,
  Trash2,
} from "lucide-react";
import { useGetBlogByIdQuery } from "../../slices/api.slice";
import {
  BlogWrapper,
  Hero,
  Container,
  ArticleBody,
  CauseSection,
  ExerciseGrid,
  ExerciseCard,
  TipSection,
  AppointmentCTA,
  LoadingState,
} from "../../styles/research-detail-page";
import { useSelector } from "react-redux";
import { useDeleteBlogMutation } from "../../slices/form.slice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error, refetch } = useGetBlogByIdQuery(slug);
  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  const blog = data?.blog;
  // console.log(blog);

  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, []);
  const handleDelete = () => {
    toast.custom(
      (t) => (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          style={{
            maxWidth: "350px",
            width: "100%",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(6, 78, 59, 0.15)",
            border: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            pointerEvents: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "#fef2f2",
                padding: "8px",
                borderRadius: "10px",
                color: "#ef4444",
              }}
            >
              <Trash2 size={20} />
            </div>
            <div>
              <h4
                style={{
                  margin: 0,
                  color: "#064e3b",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Delete Medical Guide?
              </h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
                This will permanently remove this article from the archive.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const loadId = toast.loading("Deleting Medical Guide...");
                try {
                  await deleteBlog(blog._id).unwrap();
                  toast.success("Article deleted successfully", { id: loadId });
                  navigate("/blogs");
                } catch (err) {
                  toast.error(err?.data?.message || "Error deleting article", {
                    id: loadId,
                  });
                }
              }}
              style={{
                flex: 1,
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#dc2626")}
              onMouseOut={(e) => (e.target.style.background = "#ef4444")}
            >
              Confirm Delete
            </button>

            <button
              onClick={() => toast.dismiss(t.id)}
              style={{
                flex: 1,
                background: "#f8fafc",
                color: "#64748b",
                border: "1px solid #e2e8f0",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      ),
      {
        duration: 6000,
        position: "bottom-right",
      },
    );
  };
  if (isLoading)
    return <LoadingState>Preparing Medical Insights...</LoadingState>;
  if (error)
    return <LoadingState>Error loading data. Please try again.</LoadingState>;
  if (!blog) return <LoadingState>Blog post not found.</LoadingState>;

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <BlogWrapper>
      <Hero
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.9), rgba(6, 78, 59, 0.95)), url(${blog.image})`,
        }}
      >
        <Container>
          <Link to="/blogs" className="back-link">
            <ArrowLeft size={18} /> Back to Health Guides
          </Link>
          <div className="meta">
            <span className="badge">Physiotherapy Insights</span>
            <span>
              <User size={16} /> {blog.author}
            </span>
            <span>
              <Clock size={16} /> {formattedDate}
            </span>
          </div>
          <h1>{blog.title}</h1>
        </Container>
      </Hero>

      <Container>
        <ArticleBody>
          <p className="lead-text">{blog.description}</p>

          {blog.causes?.length > 0 && (
            <CauseSection>
              <h2>
                <AlertCircle className="section-icon" /> Common Causes
              </h2>
              <div className="causes-grid">
                {blog.causes.map((item) => (
                  <div key={item._id} className="cause-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </CauseSection>
          )}

          {blog.exercises?.length > 0 && (
            <section style={{ marginTop: "80px" }}>
              <h2 className="emerald-title">
                <Activity className="section-icon" /> Corrective Exercise
                Protocol
              </h2>
              <p className="section-subtitle">
                Perform these movements slowly to help stabilize the pelvic
                region.
              </p>

              <ExerciseGrid>
                {blog.exercises.map((ex) => (
                  <ExerciseCard key={ex._id}>
                    <div className="exercise-visual">
                      {ex.image ? (
                        <img src={ex.image} alt={ex.name} />
                      ) : (
                        <div className="placeholder">
                          Illustration Coming Soon
                        </div>
                      )}
                    </div>

                    <div className="exercise-info">
                      <span className="type-tag">{ex.type}</span>
                      <h3>{ex.name}</h3>

                      <div className="steps-container">
                        {ex.steps?.filter((s) => s.trim() !== "").length > 0 ? (
                          ex.steps.map((step, sIdx) => (
                            <div key={sIdx} className="step-row">
                              <CheckCircle2
                                size={18}
                                className="emerald-icon"
                              />
                              <p>{step}</p>
                            </div>
                          ))
                        ) : (
                          <p>Guided movement to alleviate tailbone pressure.</p>
                        )}
                      </div>

                      <p className="doctor-note">
                        <AlertCircle
                          size={14}
                          style={{ display: "inline", marginRight: "5px" }}
                        />
                        Consult Dr. Saurabh for personalized repetitions.
                      </p>
                    </div>
                  </ExerciseCard>
                ))}
              </ExerciseGrid>
            </section>
          )}

          {blog.managementTips?.length > 0 && (
            <TipSection>
              <h3>
                <Lightbulb className="section-icon" /> Daily Care & Relief Tips
              </h3>
              <div className="tips-list">
                {blog.managementTips.map((tip) => (
                  <div key={tip._id} className="tip-box">
                    <div className="tip-header">
                      <div className="dot" />
                      <h4>{tip.tipTitle}</h4>
                    </div>
                    <p>{tip.details}</p>
                  </div>
                ))}
              </div>
            </TipSection>
          )}

          <AppointmentCTA>
            <div className="cta-content-wrapper">
              <div className="cta-text">
                <h3>Professional Tailbone Relief</h3>
                <p>
                  Don't let coccydynia affect your quality of life. Get a
                  professional assessment.
                </p>
              </div>

              <div className="cta-actions">
                {isAdmin ? (
                  <div className="admin-cta-tools">
                    <Link
                      to={`/admin/update-blog/${blog.slug}`}
                      className="admin-btn edit"
                    >
                      <Edit size={18} /> Update Guide
                    </Link>
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="admin-btn delete"
                    >
                      <Trash2 size={18} />{" "}
                      {isDeleting ? "Removing..." : "Delete Guide"}
                    </button>
                  </div>
                ) : (
                  <Link to="/book-appointment" className="cta-button">
                    <Calendar size={20} /> Book Appointment
                  </Link>
                )}
              </div>
            </div>
          </AppointmentCTA>
        </ArticleBody>
      </Container>
    </BlogWrapper>
  );
};

export default BlogDetailPage;
