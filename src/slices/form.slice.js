import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAutoLogout } from "../services/baseQuery";
export const formSlice = createApi({
  reducerPath: "formSlice",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://physiotherapy-backend-6uw3.onrender.com/",
    credentials: "include",
  }),
  // baseQuery: baseQueryWithAutoLogout,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: (data) => ({
        url: "users/logout",
        method: "POST",
        body: data,
      }),
    }),

    createService: builder.mutation({
      query: (data) => ({
        url: "services/create",
        method: "POST",
        body: data,
      }),
    }),

    contactForm: builder.mutation({
      query: (data) => ({
        url: "contacts/create",
        method: "POST",
        body: data,
      }),
    }),

    appointment: builder.mutation({
      query: (data) => ({
        url: "appointments/create",
        method: "POST",
        body: data,
      }),
    }),
    updateAppointment: builder.mutation({
      query: ({ id, status }) => ({
        url: `appointments/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Appointments"],
    }),

    createBlog: builder.mutation({
      query: (data) => ({
        url: "blogs/create",
        method: "POST",
        body: data,
      }),
    }),
    createDocotor: builder.mutation({
      query: (data) => ({
        url: "doctors/create-doctor",
        method: "POST",
        body: data,
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: "reviews/create",
        method: "POST",
        body: data,
      }),
    }),
    updateReview: builder.mutation({
      query: ({ id, isApproved }) => ({
        url: `reviews/${id}`,
        method: "PATCH",
        body: { isApproved },
      }),
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `doctors/del/${id}`,
        method: "DELETE",
      }),
    }),
    updateDoctor: builder.mutation({
      query: ({ id, formData }) => ({
        url: `doctors/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/delete/${id}`,
        method: "DELETE",
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `blogs/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `services/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `services/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateServiceMutation,
  useContactFormMutation,
  useAppointmentMutation,
  useUpdateAppointmentMutation,
  useCreateBlogMutation,
  useCreateDocotorMutation,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = formSlice;
