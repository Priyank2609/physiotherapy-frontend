import React from "react";
import { Check, X, Star, User } from "lucide-react";
import toast from "react-hot-toast";
import {
  StatusBadge,
  ActionGroup,
  AdminCard,
  Container,
} from "../../styles/review-lists";
import { useUpdateReviewMutation } from "../../slices/form.slice";
import { useGetAdminReviewsQuery } from "../../slices/api.slice";

const AdminReviews = () => {
  const { data: reviews, isLoading, refetch } = useGetAdminReviewsQuery();
  const [updateStatus, { isLoading: isUpdating }] = useUpdateReviewMutation();

  const reviewsList = reviews?.reviews || [];

  const handleStatusChange = async (id, newStatus) => {
    // 1. Create the loading toast and store its unique ID
    const toastId = toast.loading("Updating status...");

    try {
      await updateStatus({ id, isApproved: newStatus }).unwrap();

      toast.success(newStatus ? "Review Published" : "Review Hidden", {
        id: toastId,
      });

      refetch();
    } catch (err) {
      toast.error("Operation failed", {
        id: toastId,
      });
    }
  };
  if (isLoading)
    return (
      <Container>
        <h2>Synchronizing Reviews...</h2>
      </Container>
    );

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
                  {review.isApproved ? "Publicly Visible" : "Awaiting Approval"}
                </StatusBadge>

                <ActionGroup>
                  <button
                    className="approve"
                    onClick={() => handleStatusChange(review._id, true)}
                    disabled={review.isApproved || isUpdating}
                  >
                    <Check size={16} /> Approve
                  </button>
                  <button
                    className="reject"
                    onClick={() => handleStatusChange(review._id, false)}
                    disabled={!review.isApproved || isUpdating}
                  >
                    <X size={16} /> Hide
                  </button>
                </ActionGroup>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </Container>
  );
};

export default AdminReviews;
