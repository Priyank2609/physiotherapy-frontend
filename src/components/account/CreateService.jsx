import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useCreateServiceMutation } from "../../slices/form.slice";
import { NewServiceWrapper } from "../../styles/create-service";
import toast from "react-hot-toast";
import { Plus, Trash2, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateService() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      shortDescription: "",
      longDescription: "",
      benefits: [{ value: "" }],
      treatments: [{ value: "" }],
      duration: "",
      price: "",
      mainImage: null,
      secondaryImage: null,
    },
  });

  const {
    fields: benefitFields,
    append: addBenefit,
    remove: removeBenefit,
  } = useFieldArray({ control, name: "benefits" });

  const {
    fields: treatmentFields,
    append: addTreatment,
    remove: removeTreatment,
  } = useFieldArray({ control, name: "treatments" });

  const [createService, { isLoading }] = useCreateServiceMutation();
  const navigate = useNavigate();

  const handleService = async (data) => {
    if (!data.mainImage?.[0] || !data.secondaryImage?.[0]) {
      toast.error("Please select both main and secondary images");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("longDescription", data.longDescription);
    formData.append("duration", data.duration);
    formData.append("price", data.price);

    formData.append(
      "benefits",
      JSON.stringify(data.benefits.map((b) => b.value).filter((v) => v)),
    );
    formData.append(
      "treatments",
      JSON.stringify(data.treatments.map((t) => t.value).filter((v) => v)),
    );

    formData.append("mainImage", data.mainImage[0]);
    formData.append("secondaryImage", data.secondaryImage[0]);

    try {
      await createService(formData).unwrap();
      toast.success("Service created successfully!");
      navigate("/services");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to create service");
    }
  };

  return (
    <NewServiceWrapper>
      <div className="form-card">
        <h2>Create New Service</h2>
        <p>Add physiotherapy service details</p>

        <form onSubmit={handleSubmit(handleService)} className="service-form">
          <div className="form-group">
            <label>Service Title</label>
            <input
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

          {/* BENEFITS */}
          <div className="form-section">
            <h3>Benefits</h3>
            {benefitFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <input
                  placeholder="Benefit"
                  {...register(`benefits.${index}.value`, {
                    required: "Benefit cannot be empty",
                  })}
                />
                <button type="button" onClick={() => removeBenefit(index)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addBenefit({ value: "" })}>
              <Plus size={16} /> Add Benefit
            </button>
          </div>

          {/* TREATMENTS */}
          <div className="form-section">
            <h3>Treatments Included</h3>
            {treatmentFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <input
                  placeholder="Treatment"
                  {...register(`treatments.${index}.value`)}
                />
                <button type="button" onClick={() => removeTreatment(index)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addTreatment({ value: "" })}>
              <Plus size={16} /> Add Treatment
            </button>
          </div>

          {/* IMAGES */}
          <div className="form-group">
            <label>Main Image</label>
            <input type="file" {...register("mainImage")} />
          </div>

          <div className="form-group">
            <label>Secondary Image</label>
            <input type="file" {...register("secondaryImage")} />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              "Creating..."
            ) : (
              <>
                <Save size={18} /> Create Service
              </>
            )}
          </button>
        </form>
      </div>
    </NewServiceWrapper>
  );
}

export default CreateService;
