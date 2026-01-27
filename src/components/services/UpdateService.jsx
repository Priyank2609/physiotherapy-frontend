import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Plus, Trash2, ArrowLeft, Save } from "lucide-react";

import { useGetServiceByIdQuery } from "../../slices/api.slice";
import { useUpdateServiceMutation } from "../../slices/form.slice";

import {
  EditServiceContainer,
  Title,
  Form,
  Input,
  TextArea,
  FileGroup,
  SaveButton,
} from "../../styles/update-service";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetServiceByIdQuery(id);
  const [updateService, { isLoading: updating }] = useUpdateServiceMutation();

  const service = data?.data;

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      benefits: [],
      treatments: [],
    },
  });

  /* ------------------ FIELD ARRAYS ------------------ */
  const {
    fields: benefitFields,
    append: addBenefit,
    remove: removeBenefit,
  } = useFieldArray({
    control,
    name: "benefits",
  });

  const {
    fields: treatmentFields,
    append: addTreatment,
    remove: removeTreatment,
  } = useFieldArray({
    control,
    name: "treatments",
  });

  /* ------------------ PREFILL DATA ------------------ */
  useEffect(() => {
    if (service) {
      reset({
        title: service.title || "",
        shortDescription: service.shortDescription || "",
        longDescription: service.longDescription || "",
        price: service.price || "",
        duration: service.duration || "",
        benefits: Array.isArray(service.benefits)
          ? service.benefits.map((b) => ({ value: b }))
          : [],
        treatments: Array.isArray(service.treatments)
          ? service.treatments.map((t) => ({ value: t }))
          : [],
      });
    }
  }, [service, reset]);

  /* ------------------ SUBMIT ------------------ */
  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating service...");

    try {
      const formData = new FormData();

      // TEXT FIELDS
      formData.append("title", data.title);
      formData.append("shortDescription", data.shortDescription);
      formData.append("longDescription", data.longDescription);
      formData.append("price", Number(data.price));
      formData.append("duration", Number(data.duration));

      // ARRAYS (IMPORTANT)
      if (data.benefits?.length) {
        formData.append(
          "benefits",
          JSON.stringify(data.benefits.map((b) => b.value)),
        );
      }

      if (data.treatments?.length) {
        formData.append(
          "treatments",
          JSON.stringify(data.treatments.map((t) => t.value)),
        );
      }

      // IMAGES
      if (data.mainImage?.[0]) {
        formData.append("mainImage", data.mainImage[0]);
      }

      if (data.secondaryImage?.[0]) {
        formData.append("secondaryImage", data.secondaryImage[0]);
      }

      // DEBUG (optional)
      // for (let pair of formData.entries()) {
      //   console.log(pair[0], pair[1]);
      // }

      await updateService({ id, data: formData }).unwrap();
      toast.success("Service updated successfully", { id: toastId });
      navigate(`/services/${id}`);
    } catch (err) {
      toast.error(err?.data?.message || "Update failed", {
        id: toastId,
      });
    }
  };

  if (isLoading) {
    return <p style={{ padding: 40 }}>Loading service...</p>;
  }

  return (
    <EditServiceContainer>
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

      <Title>Edit Service</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Service Title" {...register("title")} />

        <Input
          placeholder="Short Description"
          {...register("shortDescription")}
        />

        <TextArea
          rows={4}
          placeholder="Long Description"
          {...register("longDescription")}
        />

        <Input type="number" placeholder="Price" {...register("price")} />

        <Input
          type="number"
          placeholder="Duration (mins)"
          {...register("duration")}
        />

        {/* BENEFITS */}
        <h4>Benefits</h4>
        {benefitFields.map((field, index) => (
          <div key={field.id} style={{ display: "flex", gap: "8px" }}>
            <Input
              placeholder="Benefit"
              {...register(`benefits.${index}.value`)}
            />
            <button type="button" onClick={() => removeBenefit(index)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button type="button" onClick={() => addBenefit({ value: "" })}>
          <Plus size={16} /> Add Benefit
        </button>

        {/* TREATMENTS */}
        <h4>Treatments Included</h4>
        {treatmentFields.map((field, index) => (
          <div key={field.id} style={{ display: "flex", gap: "8px" }}>
            <Input
              placeholder="Treatment"
              {...register(`treatments.${index}.value`)}
            />
            <button type="button" onClick={() => removeTreatment(index)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button type="button" onClick={() => addTreatment({ value: "" })}>
          <Plus size={16} /> Add Treatment
        </button>

        {/* IMAGES */}
        <FileGroup>
          <label>Main Image</label>
          <input type="file" accept="image/*" {...register("mainImage")} />
        </FileGroup>

        <FileGroup>
          <label>Secondary Image</label>
          <input type="file" accept="image/*" {...register("secondaryImage")} />
        </FileGroup>

        <SaveButton type="submit" disabled={updating}>
          <Save size={18} />
          {updating ? " Updating..." : " Save Changes"}
        </SaveButton>
      </Form>
    </EditServiceContainer>
  );
};

export default EditService;
