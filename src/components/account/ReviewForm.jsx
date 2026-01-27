import React from "react";
import { useForm } from "react-hook-form";
import { Star, Send, User, MessageSquare, ClipboardList } from "lucide-react";
import toast from "react-hot-toast";
import {
  FormCard,
  FormContainer,
  HeaderBg,
  InputGroup,
  PageWrapper,
  RatingBox,
  SubmitButton,
  ErrorMsg,
} from "../../styles/review-form";
import { useCreateReviewMutation } from "../../slices/form.slice";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { rating: 0 },
  });

  const currentRating = watch("rating");
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (data.rating === 0) return toast.error("Please provide a star rating!");
    const loading = toast.loading("Submitting your review...");
    try {
      await createReview(data).unwrap();
      toast.success("Thank you for your feedback!", { id: loading });
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to submit review", {
        id: loading,
      });
    }
  };

  return (
    <PageWrapper>
      <HeaderBg>
        <h1>Share Your Feedback</h1>
        <p>Help us improve our clinical services</p>
      </HeaderBg>

      <FormContainer>
        <FormCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RatingBox>
              <label>Overall Experience</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={36}
                    fill={currentRating >= star ? "#0ea5e9" : "none"}
                    color={currentRating >= star ? "#0ea5e9" : "#cbd5e1"}
                    onClick={() => setValue("rating", star)}
                    style={{ cursor: "pointer", transition: "0.2s" }}
                  />
                ))}
              </div>
              <input
                type="hidden"
                {...register("rating", { required: true, min: 1 })}
              />
            </RatingBox>

            <InputGroup>
              <label>
                <User size={16} /> Patient Name
              </label>
              <input
                {...register("patientName", {
                  required: "Please enter your name",
                })}
                placeholder="Enter your name"
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </InputGroup>

            <InputGroup>
              <label>
                <ClipboardList size={16} /> Service Received
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
              >
                <option value="" hidden>
                  Select the treatment...
                </option>
                <optgroup label="Rehabilitation">
                  <option value="Post Fracture">Post Fracture Rehab</option>
                  <option value="Spine Surgery Rehab">
                    Spine Surgery Rehab
                  </option>
                  <option value="Joint Replacement Rehab">
                    Joint Replacement Rehab
                  </option>
                  <option value="Stroke Rehabilitation">Stroke Rehab</option>
                  <option value="Paralysis Rehabilitation">
                    Paralysis Rehab
                  </option>
                </optgroup>
                <optgroup label="Pain Management">
                  <option value="Sciatica Treatment">Sciatica Treatment</option>
                  <option value="Back Pain">Back Pain Treatment</option>
                  <option value="Neck Pain">Neck Pain Treatment</option>
                  <option value="Knee Pain">Knee Pain Treatment</option>
                  <option value="Shoulder Pain">Shoulder Pain Treatment</option>
                  <option value="Headache Management">
                    Headache Management
                  </option>
                </optgroup>
                <optgroup label="Special Therapy">
                  <option value="Autism Therapy">Autism Therapy</option>
                  <option value="Cerebral Palsy Therapy">
                    Cerebral Palsy Therapy
                  </option>
                </optgroup>
              </select>
              {errors.service && <ErrorMsg>{errors.service.message}</ErrorMsg>}
            </InputGroup>

            <InputGroup>
              <label>
                <MessageSquare size={16} /> Your Review
              </label>
              <textarea
                {...register("comment", {
                  required: "Please write a brief review",
                })}
                placeholder="How was your recovery progress?"
                rows="4"
              />
              {errors.comment && <ErrorMsg>{errors.comment.message}</ErrorMsg>}
            </InputGroup>

            <SubmitButton type="submit" disabled={isLoading}>
              <Send size={18} /> {isLoading ? "Submitting..." : "Submit Review"}
            </SubmitButton>
          </form>
        </FormCard>
      </FormContainer>
    </PageWrapper>
  );
};

export default ReviewForm;
