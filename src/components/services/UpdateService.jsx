import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

import { useGetServiceByIdQuery } from "../../slices/api.slice";
import { useUpdateServiceMutation } from "../../slices/form.slice";

import { NewService } from "../../styles/create-service"; // reuse the same style as CreateService

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetServiceByIdQuery(id);
  const [updateService, { isLoading: updating }] = useUpdateServiceMutation();

  const service = data?.data;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const watchedMainImage = watch("mainImage");
  const watchedSecondaryImage = watch("secondaryImage");

  // Prefill form with existing service data
  useEffect(() => {
    if (service) {
      reset({
        title: service.title || "",
        shortDescription: service.shortDescription || "",
        longDescription: service.longDescription || "",
        price: service.price || "",
        duration: service.duration || "",
        benefits: Array.isArray(service.benefits)
          ? service.benefits.join(", ")
          : service.benefits || "",
        treatments: Array.isArray(service.treatments)
          ? service.treatments.join(", ")
          : service.treatments || "",
        mainImage: null,
        secondaryImage: null,
      });
    }
  }, [service, reset]);

  const handleUpdate = async (data) => {
    const loadingToast = toast.loading("Updating service...");

    if (!data.mainImage && !service.mainImage) {
      toast.error("Please select main image", { id: loadingToast });
      return;
    }
    if (!data.secondaryImage && !service.secondaryImage) {
      toast.error("Please select secondary image", { id: loadingToast });
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("longDescription", data.longDescription);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("isActive", data.isActive || true);

    // Benefits array
    const benefitsArray = data.benefits
      .split(",")
      .map((b) => b.trim())
      .filter((b) => b !== "");
    if (benefitsArray.length === 0) {
      toast.error("Benefits must contain at least one item", {
        id: loadingToast,
      });
      return;
    }
    benefitsArray.forEach((benefit) => formData.append("benefits", benefit));

    // Treatments array
    const treatmentsArray = data.treatments
      ? data.treatments
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t !== "")
      : [];
    treatmentsArray.forEach((treatment) =>
      formData.append("treatments", treatment),
    );

    // Only append new images if selected
    if (data.mainImage?.[0]) formData.append("mainImage", data.mainImage[0]);
    if (data.secondaryImage?.[0])
      formData.append("secondaryImage", data.secondaryImage[0]);

    try {
      await updateService({ id, data: formData }).unwrap();
      toast.success("Service updated successfully", { id: loadingToast });
      navigate(`/services/${id}`);
    } catch (err) {
      toast.error(err?.data?.message || "Update failed", { id: loadingToast });
    }
  };

  if (isLoading) {
    return <p style={{ padding: 40 }}>Loading service...</p>;
  }

  return (
    <NewService>
      <section className="create-service">
        <div className="service-form-container">
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              gap: "8px",
              color: "#64748b",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "16px",
            }}
          >
            <ArrowLeft size={18} /> Back
          </button>

          <h2>Edit Service</h2>
          <p>Update physiotherapy service details</p>

          <form className="service-form" onSubmit={handleSubmit(handleUpdate)}>
            {/* Title */}
            <div className="form-group">
              <label>Service Title</label>
              <input
                type="text"
                placeholder="Enter service title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>

            {/* Short Description */}
            <div className="form-group">
              <label>Short Description</label>
              <textarea
                placeholder="Enter short description"
                {...register("shortDescription", {
                  required: "Short description is required",
                })}
              />
              {errors.shortDescription && (
                <p className="error">{errors.shortDescription.message}</p>
              )}
            </div>

            {/* Long Description */}
            <div className="form-group">
              <label>Long Description</label>
              <textarea
                placeholder="Enter detailed description"
                {...register("longDescription", {
                  required: "Long description is required",
                })}
              />
              {errors.longDescription && (
                <p className="error">{errors.longDescription.message}</p>
              )}
            </div>

            {/* Benefits */}
            <div className="form-group">
              <label>Benefits</label>
              <input
                type="text"
                placeholder="Eg: Pain relief, Better mobility"
                {...register("benefits", { required: "Benefits are required" })}
              />
              {errors.benefits && (
                <p className="error">{errors.benefits.message}</p>
              )}
              <small>Separate benefits using commas</small>
            </div>

            {/* Treatments */}
            <div className="form-group">
              <label>Treatments</label>
              <input
                type="text"
                placeholder="Eg: Exercise, Massage"
                {...register("treatments")}
              />
              <small>Separate treatments using commas (optional)</small>
            </div>

            {/* Duration & Price */}
            <div className="form-row">
              <div className="form-group">
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  placeholder="Eg: 45"
                  {...register("duration", {
                    required: "Duration is required",
                  })}
                />
                {errors.duration && (
                  <p className="error">{errors.duration.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  placeholder="Eg: 500"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <p className="error">{errors.price.message}</p>
                )}
              </div>
            </div>

            {/* Images */}
            <div className="form-group">
              <label>Main Image</label>
              <input type="file" {...register("mainImage")} />
              {watchedMainImage?.[0] && (
                <p>Selected: {watchedMainImage[0].name}</p>
              )}
            </div>

            <div className="form-group">
              <label>Secondary Image</label>
              <input type="file" {...register("secondaryImage")} />
              {watchedSecondaryImage?.[0] && (
                <p>Selected: {watchedSecondaryImage[0].name}</p>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={updating}>
              {updating ? "Updating..." : "Update Service"}
            </button>
          </form>
        </div>
      </section>
    </NewService>
  );
};

export default EditService;
