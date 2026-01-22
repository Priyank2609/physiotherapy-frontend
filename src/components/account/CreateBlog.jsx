import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useCreateBlogMutation } from "../../slices/form.slice";
import { NewBlogWrapper } from "../../styles/create-blog";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  BookOpen,
  Activity,
  Lightbulb,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      author: "Dr. Saurabh Prajapati",
      causes: [{ title: "", description: "" }],
      exercises: [{ name: "", type: "stretching", steps: [""], image: "" }],
      managementTips: [{ tipTitle: "", details: "" }],
    },
  });

  const {
    fields: causeFields,
    append: appendCause,
    remove: removeCause,
  } = useFieldArray({ control, name: "causes" });

  const {
    fields: exerciseFields,
    append: appendEx,
    remove: removeEx,
  } = useFieldArray({ control, name: "exercises" });

  const {
    fields: tipFields,
    append: appendTip,
    remove: removeTip,
  } = useFieldArray({ control, name: "managementTips" });

  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const navigate = useNavigate();
  const handleBlog = async (data) => {
    const loadingToast = toast.loading("Creating Blog...");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("description", data.description);

    formData.append("causes", JSON.stringify(data.causes));
    formData.append("managementTips", JSON.stringify(data.managementTips));

    const processedExercises = data.exercises.map((ex, index) => {
      if (ex.exerciseImage && ex.exerciseImage[0]) {
        formData.append(`exerciseImages`, ex.exerciseImage[0]);
      }

      const { exerciseImage, ...rest } = ex;
      return rest;
    });

    formData.append("exercises", JSON.stringify(processedExercises));

    if (data.mainImage && data.mainImage[0]) {
      formData.append("image", data.mainImage[0]);
    }

    try {
      await createBlog(formData).unwrap();
      toast.success("Medical blog published successfully!", {
        id: loadingToast,
      });
      navigate("/blogs");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to publish blog.", {
        id: loadingToast,
      });
    }
  };
  return (
    <NewBlogWrapper>
      <div className="form-card">
        <header>
          <h2>Create Medical Insight</h2>
          <p className="subtitle">
            Publish educational content, exercises, and health tips for your
            patients.
          </p>
        </header>

        <form onSubmit={handleSubmit(handleBlog)} className="service-form">
          <div className="form-group">
            <label>Blog Title</label>
            <input
              type="text"
              placeholder="e.g., What is Tailbone Pain?"
              {...register("title", { required: "Title is required" })}
            />
          </div>

          <div className="form-group">
            <label>Banner Image</label>
            <input type="file" {...register("mainImage")} />
          </div>

          <div className="form-group">
            <label>Introduction / Description</label>
            <textarea
              placeholder="Provide a general overview of the topic..."
              {...register("description")}
            />
          </div>

          <div className="form-section">
            <h3>
              <BookOpen size={20} /> Common Causes
            </h3>
            {causeFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeCause(index)}
                >
                  <Trash2 size={16} />
                </button>
                <div className="form-group">
                  <input
                    placeholder="Cause Title (e.g., Posture Issues)"
                    {...register(`causes.${index}.title`)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Description of this cause..."
                    {...register(`causes.${index}.description`)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendCause({ title: "", description: "" })}
            >
              <Plus size={18} /> Add New Cause
            </button>
          </div>

          <div className="form-section">
            <h3>
              <Activity size={20} /> Exercise Guides
            </h3>
            {exerciseFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeEx(index)}
                >
                  <Trash2 size={16} />
                </button>

                <div className="form-row">
                  <div className="form-group">
                    <label>Exercise Name</label>
                    <input
                      placeholder="e.g., Bird Dogs"
                      {...register(`exercises.${index}.name`)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Type</label>
                    <select {...register(`exercises.${index}.type`)}>
                      <option value="stretching">Stretching</option>
                      <option value="strengthening">Strengthening</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: "10px" }}>
                  <label>Exercise Illustration (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register(`exercises.${index}.exerciseImage`)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() =>
                appendEx({ name: "", type: "stretching", steps: [""] })
              }
            >
              <Plus size={18} /> Add New Exercise
            </button>
          </div>

          <div className="form-section">
            <h3>
              <Lightbulb size={20} /> Management Techniques
            </h3>
            {tipFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeTip(index)}
                >
                  <Trash2 size={16} />
                </button>
                <div className="form-group">
                  <input
                    placeholder="Tip Title (e.g., Heat Therapy)"
                    {...register(`managementTips.${index}.tipTitle`)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Specific details or instructions..."
                    {...register(`managementTips.${index}.details`)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendTip({ tipTitle: "", details: "" })}
            >
              <Plus size={18} /> Add Management Tip
            </button>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              "Publishing..."
            ) : (
              <>
                <Save size={20} /> Publish Blog Post
              </>
            )}
          </button>
        </form>
      </div>
    </NewBlogWrapper>
  );
}

export default CreateBlog;
