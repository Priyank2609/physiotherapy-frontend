import React, { useState } from "react";
import { Check, X, Star, User } from "lucide-react";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  StatusBadge,
  ActionGroup,
  AdminCard,
  Container,
  ContactWrapper,
} from "../../styles/review-lists";
import {
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from "../../slices/form.slice";
import { useGetAdminReviewsQuery } from "../../slices/api.slice";

const AdminReviews = () => {
  const {
    data: reviews,
    isLoading,
    isError,
    refetch,
  } = useGetAdminReviewsQuery();
  const [updateStatus, { isLoading: isUpdating }] = useUpdateReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const [processingId, setProcessingId] = useState(null);
  const reviewsList = reviews?.reviews || [];

  const handleStatusChange = async (id, newStatus) => {
    setProcessingId(id);
    const toastId = toast.loading("Updating status...");

    try {
      await updateStatus({ id, isApproved: newStatus }).unwrap();
      toast.success(newStatus ? "Review Published" : "Review Hidden", {
        id: toastId,
      });
      refetch();
    } catch (err) {
      toast.error("Operation failed", { id: toastId });
    } finally {
      setProcessingId(null);
    }
  };

  const handleDeleteReview = (reviewId) => {
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
          {/* Header */}
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
                Delete Review?
              </h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
                This review will be permanently removed.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const loadId = toast.loading("Deleting review...");

                try {
                  await deleteReview(reviewId).unwrap();
                  toast.success("Review deleted successfully", { id: loadId });
                  refetch();
                } catch (err) {
                  toast.error(
                    err?.error?.message || "Failed to delete review",
                    { id: loadId, duration: 4000 },
                  );
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
              }}
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
      { duration: 6000, position: "bottom-right" },
    );
  };

  if (isLoading) {
    return (
      <ContactWrapper>
        <div className="status-container">
          <div className="loader-ring"></div>
          <h2 className="status-title">Synchronizing Reviews</h2>
          <p className="status-subtitle">
            Fetching the latest patient feedback for you...
          </p>
        </div>
      </ContactWrapper>
    );
  }

  return (
    <Container>
      <div className="page-header-bg">
        <div className="header-content">
          <div className="title-section">
            <h2>Manage Feedback</h2>
            <p>
              Review, approve, or hide patient testimonials and service ratings
            </p>
          </div>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">{reviewsList.length}</span>
              <span className="stat-label">Total Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        {reviewsList.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              background: "white",
              borderRadius: "12px",
              gridColumn: "1 / -1",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          >
            <div style={{ marginBottom: "1rem", color: "#94a3b8" }}>
              <User size={48} style={{ margin: "0 auto" }} />
            </div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>
              No Reviews Found
            </h3>
            <p style={{ color: "#64748b" }}>
              When patients submit feedback, it will appear here for your
              moderation.
            </p>
          </div>
        ) : (
          <>
            {reviewsList.map((review) => (
              <AdminCard key={review._id} $approved={review.isApproved}>
                <div className="review-main">
                  <div className="user-info">
                    <div className="avatar-wrapper">
                      <User size={24} />
                    </div>
                    <div>
                      <h4>{review.patientName}</h4>
                      <span>{review.service}</span>
                    </div>
                  </div>

                  <div className="content">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? "#0ea5e9" : "none"}
                          color={i < review.rating ? "#0ea5e9" : "#e2e8f0"}
                        />
                      ))}
                    </div>
                    <p>"{review.message}"</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <StatusBadge $approved={review.isApproved}>
                      {review.isApproved
                        ? "Publicly Visible"
                        : "Awaiting Approval"}
                    </StatusBadge>

                    <ActionGroup>
                      <button
                        className="approve"
                        onClick={() => handleStatusChange(review._id, true)}
                        disabled={
                          review.isApproved || processingId === review._id
                        }
                      >
                        <Check size={16} /> Approve
                      </button>

                      <button
                        className="reject"
                        onClick={() => handleStatusChange(review._id, false)}
                        disabled={
                          !review.isApproved || processingId === review._id
                        }
                      >
                        <X size={16} /> Hide
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteReview(review._id)}
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </ActionGroup>
                  </div>
                </div>
              </AdminCard>
            ))}
          </>
        )}
      </div>
    </Container>
  );
};

export default AdminReviews;
