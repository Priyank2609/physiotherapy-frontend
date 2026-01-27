import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { useGetServiceByIdQuery } from "../../slices/api.slice";

import {
  EditServiceContainer,
  Title,
  Form,
  Input,
  TextArea,
  FileGroup,
  ErrorText,
  SaveButton,
} from "../../styles/update-service";
import { useUpdateServiceMutation } from "../../slices/form.slice";

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
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (service) {
      reset({
        title: service.title,
        shortDescription: service.shortDescription,
        longDescription: service.longDescription,
        price: service.price,
        duration: service.duration,
        benefits: Array.isArray(service.benefits)
          ? service.benefits.join(", ")
          : service.benefits,
        treatments: Array.isArray(service.treatments)
          ? service.treatments.join(", ")
          : service.treatments,
      });
    }
  }, [service, reset]);

  const onSubmit = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key !== "mainImage" && key !== "secondaryImage") {
        formData.append(key, value);
      }
    });

    if (values.mainImage?.[0]) {
      formData.append("mainImage", values.mainImage[0]);
    }

    if (values.secondaryImage?.[0]) {
      formData.append("secondaryImage", values.secondaryImage[0]);
    }

    const toastId = toast.loading("Updating service...");

    try {
      await updateService({ id, formData }).unwrap();
      toast.success("Service updated successfully", { id: toastId });
      navigate("/admin/services");
    } catch (err) {
      toast.error(err?.data?.message || "Update failed", {
        id: toastId,
      });
    }
  };

  if (isLoading) {
    return <p style={{ padding: 30 }}>Loading service...</p>;
  }

  return (
    <EditServiceContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Title>Edit Service</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Service Title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <ErrorText>{errors.title.message}</ErrorText>}

        <Input
          placeholder="Short Description"
          {...register("shortDescription", {
            required: "Short description is required",
          })}
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

        <TextArea
          placeholder="Benefits (comma separated)"
          {...register("benefits")}
        />

        <TextArea
          placeholder="Treatments (comma separated)"
          {...register("treatments")}
        />

        <FileGroup>
          <label>Main Image</label>
          <input type="file" accept="image/*" {...register("mainImage")} />
        </FileGroup>

        <FileGroup>
          <label>Secondary Image</label>
          <input type="file" accept="image/*" {...register("secondaryImage")} />
        </FileGroup>

        <SaveButton type="submit" disabled={updating}>
          {updating ? "Updating..." : "Save Changes"}
        </SaveButton>
      </Form>
    </EditServiceContainer>
  );
};

export default EditService;
