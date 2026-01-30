import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import {
  User,
  Stethoscope,
  Award,
  FileText,
  Trash2,
  Save,
  ArrowLeft,
  Edit3,
  Plus,
  Brain,
} from "lucide-react";
import {
  FormContainer,
  FormGrid,
  InputGroup,
  ArraySection,
  SubmitButton,
} from "../../styles/update-doctor";
import { useGetTeamByIdQuery } from "../../slices/api.slice";
import { useUpdateDoctorMutation } from "../../slices/form.slice";

const UpdateDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: response, isLoading: isFetching } = useGetTeamByIdQuery(id);
  const [updateDoctor, { isLoading: isUpdating }] = useUpdateDoctorMutation();

  const { register, control, handleSubmit, reset } = useForm();

  const {
    fields: qualFields,
    append: appendQual,
    remove: removeQual,
  } = useFieldArray({ control, name: "qualifications" });
  const {
    fields: condFields,
    append: appendCond,
    remove: removeCond,
  } = useFieldArray({ control, name: "conditionsTreated" });
  const {
    fields: neuroFields,
    append: appendNeuro,
    remove: removeNeuro,
  } = useFieldArray({ control, name: "neurologicalExpertise" });

  useEffect(() => {
    if (response?.data) reset(response.data);
  }, [response, reset]);

  const onSubmit = async (data) => {
    const loadId = toast.loading("Saving changes to clinical profile...");
    try {
      const formData = new FormData();

      [
        "name",
        "specialization",
        "experience",
        "bio",
        "clinicalBackground",
      ].forEach((key) => {
        formData.append(key, data[key]);
      });

      formData.append(
        "qualifications",
        JSON.stringify(data.qualifications.filter(Boolean)),
      );
      formData.append(
        "conditionsTreated",
        JSON.stringify(data.conditionsTreated.filter(Boolean)),
      );
      formData.append(
        "neurologicalExpertise",
        JSON.stringify(data.neurologicalExpertise.filter(Boolean)),
      );
      formData.append("availability", JSON.stringify(data.availability));

      formData.append("isActive", data.isActive);

      if (data.profileImage?.[0] instanceof File) {
        formData.append("profileImage", data.profileImage[0]);
      }

      await updateDoctor({ id, formData }).unwrap();
      toast.success("Profile updated successfully!", { id: loadId });

      navigate(`/team/${id}`);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update profile", {
        id: loadId,
      });
    }
  };

  if (isFetching)
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        Loading Specialist Data...
      </div>
    );

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        <ArrowLeft size={18} /> Return to Profile
      </button>

      <header>
        <h2>Update Specialist Details</h2>
        <p>Edit clinical background and expertise for {response?.data?.name}</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <InputGroup>
            <label>
              <User size={18} /> Full Name
            </label>
            <input {...register("name")} placeholder="Dr. Saurabh Prajapati" />
          </InputGroup>

          <InputGroup>
            <label>
              <Stethoscope size={18} /> Specialty
            </label>
            <input
              {...register("specialization")}
              placeholder="Neurological Physiotherapy"
            />
          </InputGroup>
          <InputGroup>
            <label>
              <Edit3 size={18} /> Experience (Years)
            </label>
            <input
              type="number"
              {...register("experience")}
              placeholder="e.g. 8"
              min="0"
            />
          </InputGroup>
          <InputGroup $fullWidth>
            <label>
              <FileText size={18} /> Profile Bio (Brief)
            </label>
            <textarea rows="2" {...register("bio")} />
          </InputGroup>

          <InputGroup $fullWidth>
            <label>
              <Award size={18} /> Clinical Background (Detailed)
            </label>
            <textarea rows="5" {...register("clinicalBackground")} />
          </InputGroup>

          <ArraySection>
            <div className="section-label">
              <Award size={20} /> Academic Qualifications
            </div>
            {qualFields.map((field, index) => (
              <div key={field.id} className="array-item">
                <input {...register(`qualifications.${index}`)} />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeQual(index)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendQual("")}
            >
              <Plus size={18} /> Add Qualification
            </button>
          </ArraySection>

          <ArraySection>
            <div className="section-label">
              <Brain size={20} /> Conditions Treated
            </div>
            {condFields.map((field, index) => (
              <div key={field.id} className="array-item">
                <input {...register(`conditionsTreated.${index}`)} />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeCond(index)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendCond("")}
            >
              <Plus size={18} /> Add Condition
            </button>
          </ArraySection>

          <ArraySection>
            <div className="section-label">
              <Brain size={20} /> Neurological Expertise
            </div>
            {neuroFields.map((field, index) => (
              <div key={field.id} className="array-item">
                <input
                  {...register(`neurologicalExpertise.${index}`)}
                  placeholder="e.g. Stroke Rehabilitation"
                />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeNeuro(index)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendNeuro("")}
            >
              <Plus size={18} /> Add Expertise Area
            </button>
          </ArraySection>

          <ArraySection>
            <div className="section-label">
              <Edit3 size={20} /> Availability Days
            </div>

            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} style={{ display: "flex", gap: "8px" }}>
                <input
                  type="checkbox"
                  value={day}
                  {...register("availability.days")}
                />
                {day}
              </label>
            ))}
          </ArraySection>
          <InputGroup>
            <label>Start Time</label>
            <input type="time" {...register("availability.hours.start")} />
          </InputGroup>

          <InputGroup>
            <label>End Time</label>
            <input type="time" {...register("availability.hours.end")} />
          </InputGroup>

          <InputGroup $fullWidth>
            <label>Update Profile Image</label>
            <input type="file" {...register("profileImage")} accept="image/*" />
          </InputGroup>
          <InputGroup $fullWidth>
            <label
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <input type="checkbox" {...register("isActive")} />
              Active Specialist Profile
            </label>
          </InputGroup>

          <SubmitButton
            type="submit"
            disabled={isUpdating}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Save size={20} />{" "}
            {isUpdating
              ? "Saving Clinical Records..."
              : "Sync Specialist Profile"}
          </SubmitButton>
        </FormGrid>
      </form>
    </FormContainer>
  );
};

export default UpdateDoctor;
