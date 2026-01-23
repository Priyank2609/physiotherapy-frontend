import React from "react";
import toast from "react-hot-toast";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Plus,
  Trash2,
  User,
  Stethoscope,
  Award,
  FileText,
  Clock,
  Calendar,
} from "lucide-react";
import {
  FormContainer,
  FormGrid,
  InputGroup,
  SubmitButton,
  ListInputSection,
  CheckboxGroup,
} from "../../styles/create-doctor";
import { useCreateDocotorMutation } from "../../slices/form.slice";
import { useNavigate } from "react-router-dom";

const CreateDoctor = () => {
  const [createDoctor, { isLoading }] = useCreateDocotorMutation();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      specialization: "",
      experience: "",
      bio: "",
      clinicalBackground: "",
      qualifications: [""],
      conditionsTreated: [""],
      neurologicalExpertise: [""],
      availability: {
        days: [],
        hours: { start: "09:00", end: "18:00" },
      },
    },
  });

  const {
    fields: qualFields,
    append: appendQual,
    remove: removeQual,
  } = useFieldArray({
    control,
    name: "qualifications",
  });

  const {
    fields: neuroFields,
    append: appendNeuro,
    remove: removeNeuro,
  } = useFieldArray({
    control,
    name: "neurologicalExpertise",
  });
  const {
    fields: condFields,
    append: appendCond,
    remove: removeCond,
  } = useFieldArray({
    control,
    name: "conditionsTreated",
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Creating doctor profile...");

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("specialization", data.specialization);
      formData.append("experience", data.experience);
      formData.append("bio", data.bio);
      formData.append("clinicalBackground", data.clinicalBackground);

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

      if (data.profileImage?.[0]) {
        formData.append("profileImage", data.profileImage[0]);
      }

      await createDoctor(formData).unwrap();

      toast.success("Doctor profile created successfully ", {
        id: loadingToast,
        duration: 4000,
      });

      navigate("/doctors");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to create doctor ❌", {
        id: loadingToast,
        duration: 4000,
      });
      console.error("Create Doctor Error:", error);
    }
  };

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <FormContainer>
      <header>
        <h2>Register Medical Specialist</h2>
        <p>
          Enter the clinical profile details for Dr. Saurabh Prajapati's team.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <InputGroup>
            <label>
              <User size={16} /> Doctor Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="e.g. Dr. Saurabh Prajapati"
            />
          </InputGroup>

          <InputGroup>
            <label>
              <Stethoscope size={16} /> Specialization
            </label>
            <input
              {...register("specialization", {
                required: "Specialization is required",
              })}
              placeholder="Orthopedic Physiotherapy"
            />
          </InputGroup>

          <InputGroup>
            <label>
              <Award size={16} /> Years of Experience
            </label>
            <input
              type="number"
              {...register("experience", { required: true })}
              placeholder="4"
            />
          </InputGroup>

          <InputGroup $fullWidth>
            <label>
              <FileText size={16} /> Professional Bio (Profile Summary)
            </label>
            <textarea
              rows="2"
              {...register("bio")}
              placeholder="A short, catchy summary for the profile top..."
            />
          </InputGroup>

          <InputGroup $fullWidth>
            <label>
              <FileText size={16} /> Clinical Background (Detailed Paragraph)
            </label>
            <textarea
              rows="5"
              {...register("clinicalBackground")}
              placeholder="Provide the full professional journey as seen in the reference..."
            />
          </InputGroup>

          <ListInputSection>
            <label>Academic Qualifications</label>
            {qualFields.map((field, index) => (
              <div key={field.id} className="array-row">
                <input
                  {...register(`qualifications.${index}`)}
                  placeholder="e.g. BPT, MPT"
                />
                <button type="button" onClick={() => removeQual(index)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendQual("")}
            >
              + Add Qualification
            </button>
          </ListInputSection>

          <ListInputSection>
            <label>Conditions Treated</label>
            {condFields.map((field, index) => (
              <div key={field.id} className="array-row">
                <input
                  {...register(`conditionsTreated.${index}`)}
                  placeholder="e.g. Sciatica Treatment"
                />
                <button type="button" onClick={() => removeCond(index)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendCond("")}
            >
              + Add Condition
            </button>
          </ListInputSection>
          <ListInputSection>
            <label>Neurological Expertise:</label>
            {neuroFields.map((field, index) => (
              <div key={field.id} className="array-row">
                <input
                  {...register(`neurologicalExpertise.${index}`)}
                  placeholder="e.g. Stroke Rehabilitation"
                />
                <button type="button" onClick={() => removeNeuro(index)}>
                  {" "}
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => appendNeuro("")}
            >
              + Add Expertise
            </button>
          </ListInputSection>

          <InputGroup $fullWidth>
            <label>
              <Calendar size={16} /> Availability Days
            </label>
            <CheckboxGroup>
              {weekDays.map((day) => (
                <label key={day} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={day}
                    {...register("availability.days")}
                  />
                  {day}
                </label>
              ))}
            </CheckboxGroup>
          </InputGroup>

          <InputGroup>
            <label>
              <Clock size={16} /> Start Time
            </label>
            <input type="time" {...register("availability.hours.start")} />
          </InputGroup>

          <InputGroup>
            <label>
              <Clock size={16} /> End Time
            </label>
            <input type="time" {...register("availability.hours.end")} />
          </InputGroup>

          <InputGroup $fullWidth>
            <label>Profile Image (High Resolution)</label>
            <input type="file" {...register("profileImage")} />
          </InputGroup>
        </FormGrid>

        <SubmitButton type="submit">Create Clinical Profile</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CreateDoctor;
