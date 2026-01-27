import React from "react";
import { NewService } from "../../styles/create-service";
import { useForm } from "react-hook-form";
import { useCreateServiceMutation } from "../../slices/form.slice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateService() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createService, { isLoading }] = useCreateServiceMutation();
  const navigate = useNavigate();
  const handleService = async (data) => {
    const loadingToast = toast.loading("Creating service...");
    if (!data.mainImage || !data.secondaryImage) {
      toast.error("Please select both main and secondary images");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("longDescription", data.longDescription);

    const benefitsArray = data.benefits
      .split(",")
      .map((b) => b.trim())
      .filter((b) => b !== "");

    if (benefitsArray.length === 0) {
      toast.error("Benefits must contain at least one item");
      return;
    }
    formData.append("benefits", JSON.stringify(benefitsArray));

    const treatmentsArray = data.treatments
      ? data.treatments
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t !== "")
      : [];
    formData.append("treatments", JSON.stringify(treatmentsArray));

    formData.append("duration", data.duration);
    formData.append("price", data.price);
    formData.append("isActive", data.isActive || true);

    formData.append("mainImage", data.mainImage[0]);
    formData.append("secondaryImage", data.secondaryImage[0]);

    try {
      const response = await createService(formData).unwrap();
      toast.success(response.message || "Service created successfully", {
        id: loadingToast,
        duration: 4000,
      });
      navigate("/services");
    } catch (error) {
      console.error("Failed to create service:", error);
      toast.error(
        error?.data?.message || "Failed to create service. Try again.",
        { id: loadingToast, duration: 4000 },
      );
    }
  };

  return (
    <NewService>
      <section className="create-service">
        <div className="service-form-container">
          <h2>Create New Service</h2>
          <p>Add physiotherapy service details</p>

          <form className="service-form" onSubmit={handleSubmit(handleService)}>
            <div className="form-group">
              <label>Service Title</label>
              <input
                type="text"
                placeholder="Enter service title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>

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

            <div className="form-group">
              <label>Treatments</label>
              <input
                type="text"
                placeholder="Eg: Exercise, Massage"
                {...register("treatments")}
              />
              <small>Separate treatments using commas (optional)</small>
            </div>

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

            <div className="form-group">
              <label>Main Image</label>
              <input
                type="file"
                {...register("mainImage", {
                  required: "Main image is required",
                })}
              />
              {errors.mainImage && (
                <p className="error">{errors.mainImage.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Secondary Image</label>
              <input
                type="file"
                {...register("secondaryImage", {
                  required: "Secondary image is required",
                })}
              />
              {errors.secondaryImage && (
                <p className="error">{errors.secondaryImage.message}</p>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Service"}
            </button>
          </form>
        </div>
      </section>
    </NewService>
  );
}

export default CreateService;
