import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import {
  Type,
  User,
  Activity,
  ClipboardList,
  Lightbulb,
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  FileText,
  Image as ImageIcon,
  ListOrdered,
} from "lucide-react";

import { useGetBlogByIdQuery } from "../../slices/api.slice";
import { useUpdateBlogMutation } from "../../slices/form.slice";
import { NewBlogWrapper } from "../../styles/create-blog";

const UpdateBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: response, isLoading: isFetching } = useGetBlogByIdQuery(slug);
  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  console.log(response);

  const { register, control, handleSubmit, reset, setValue } = useForm();

  const {
    fields: causeFields,
    append: appendCause,
    remove: removeCause,
  } = useFieldArray({
    control,
    name: "causes",
  });
  const {
    fields: exerciseFields,
    append: appendEx,
    remove: removeEx,
  } = useFieldArray({
    control,
    name: "exercises",
  });
  const {
    fields: tipFields,
    append: appendTip,
    remove: removeTip,
  } = useFieldArray({
    control,
    name: "managementTips",
  });

  useEffect(() => {
    if (response?.blog) {
      reset(response.blog);
    }
  }, [response, reset]);

  const onSubmit = async (data) => {
    const loadId = toast.loading("Saving changes...");
    const blogId = response?.blog._id;
    try {
      const formData = new FormData();

      ["title", "description", "author", "isPublished"].forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.image?.[0] instanceof File) {
        formData.append("image", data.image[0]);
      }

      formData.append("causes", JSON.stringify(data.causes));
      formData.append("managementTips", JSON.stringify(data.managementTips));

      const processedExercises = data.exercises.map((ex, index) => {
        const fileInput = data[`exImageFile_${index}`];
        if (fileInput?.[0] instanceof File) {
          formData.append(`exerciseImage_${index}`, fileInput[0]);
        }
        return ex;
      });
      formData.append("exercises", JSON.stringify(processedExercises));

      await updateBlog({ id: blogId, formData }).unwrap();
      toast.success("Blog updated!", { id: loadId });
      navigate(`/blogs/${response?.blog.slug}`);
    } catch (error) {
      toast.error(error?.data?.message || "Update failed", { id: loadId });
    }
  };

  if (isFetching)
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        Fetching Blog Details...
      </div>
    );

  return (
    <NewBlogWrapper>
      <div className="form-card">
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#64748b",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        <header>
          <h2>Edit Health Article</h2>
          <p className="subtitle">
            Updating content for: <strong>{response?.blog?.title}</strong>
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-section">
            <h3>
              <Type size={20} /> Basic Information
            </h3>
            <div className="form-group">
              <label>Article Title</label>
              <input
                {...register("title")}
                placeholder="Enter catchy title..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Author Name</label>
                <input {...register("author")} />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select {...register("isPublished")}>
                  <option value="true">Published</option>
                  <option value="false">Draft / Private</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Main Description</label>
              <textarea
                rows="5"
                {...register("description")}
                placeholder="Describe the condition or health topic..."
              />
            </div>

            <div className="form-group">
              <label>
                <ImageIcon size={18} /> Main Header Image
              </label>
              <input type="file" {...register("image")} accept="image/*" />
            </div>
          </div>

          <div className="form-section">
            <h3>
              <ClipboardList size={20} /> Potential Causes
            </h3>
            {causeFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeCause(index)}
                >
                  <Trash2 size={18} />
                </button>
                <div className="form-group">
                  <label>Cause Title</label>
                  <input
                    {...register(`causes.${index}.title`)}
                    placeholder="e.g. Mechanical Strain"
                  />
                </div>
                <div className="form-group">
                  <label>Detailed Explanation</label>
                  <textarea
                    {...register(`causes.${index}.description`)}
                    placeholder="Explain why this happens..."
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              style={{ width: "100%" }}
              onClick={() => appendCause({ title: "", description: "" })}
            >
              <Plus size={18} /> Add Another Cause
            </button>
          </div>

          <div className="form-section">
            <h3>
              <Activity size={20} /> Corrective Exercises
            </h3>
            {exerciseFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeEx(index)}
                >
                  <Trash2 size={18} />
                </button>
                <div className="form-row">
                  <div className="form-group">
                    <label>Exercise Name</label>
                    <input {...register(`exercises.${index}.name`)} />
                  </div>
                  <div className="form-group">
                    <label>Exercise Type</label>
                    <select {...register(`exercises.${index}.type`)}>
                      <option value="stretching">Stretching</option>
                      <option value="strengthening">Strengthening</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    <ListOrdered size={16} /> Steps (Comma separated)
                  </label>
                  <textarea
                    defaultValue={field.steps?.join(", ")}
                    placeholder="Step 1, Step 2, Step 3..."
                    onBlur={(e) =>
                      setValue(
                        `exercises.${index}.steps`,
                        e.target.value.split(",").map((s) => s.trim()),
                      )
                    }
                  />
                </div>

                <div className="form-group">
                  <label>
                    <ImageIcon size={16} /> Update Exercise Image
                  </label>
                  <input
                    type="file"
                    {...register(`exImageFile_${index}`)}
                    accept="image/*"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              style={{ width: "100%" }}
              onClick={() =>
                appendEx({ name: "", type: "stretching", steps: [] })
              }
            >
              <Plus size={18} /> Add New Exercise
            </button>
          </div>

          <div className="form-section">
            <h3>
              <Lightbulb size={20} /> Management Tips
            </h3>
            {tipFields.map((field, index) => (
              <div key={field.id} className="dynamic-item">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeTip(index)}
                >
                  <Trash2 size={18} />
                </button>
                <div className="form-group">
                  <label>Tip Title</label>
                  <input {...register(`managementTips.${index}.tipTitle`)} />
                </div>
                <div className="form-group">
                  <label>Tip Details</label>
                  <textarea {...register(`managementTips.${index}.details`)} />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              style={{ width: "100%" }}
              onClick={() => appendTip({ tipTitle: "", details: "" })}
            >
              <Plus size={18} /> Add Pro Tip
            </button>
          </div>

          <button type="submit" className="submit-btn" disabled={isUpdating}>
            <Save
              size={22}
              style={{ verticalAlign: "middle", marginRight: "10px" }}
            />
            {isUpdating ? "Updating Blog..." : "Save Article Changes"}
          </button>
        </form>
      </div>
    </NewBlogWrapper>
  );
};

export default UpdateBlog;
