import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    getDocters: builder.query({
      query: () => "doctors/all",
    }),

    getServices: builder.query({
      query: () => "services",
    }),
    getServiceById: builder.query({
      query: (id) => `services/${id}`,
    }),
    getTotalServives: builder.query({
      query: () => "services/total",
    }),
    getTodayAppointment: builder.query({
      query: () => "appointments/today",
    }),
    getPendingAppointment: builder.query({
      query: () => "appointments/overview",
    }),
    getUpcomingAppointment: builder.query({
      query: () => "appointments/upcoming",
    }),
    getAllAppointment: builder.query({
      query: () => "appointments",
      providesTags: ["Appointments"],
    }),
    getAppointmentById: builder.query({
      query: (id) => `appointments/${id}`,
    }),
    getTeamById: builder.query({
      query: (id) => `doctors/doc/${id}`,
    }),
    getAllBlogs: builder.query({
      query: () => "blogs/get-blogs",
    }),
    getBlogById: builder.query({
      query: (slug) => `blogs/${slug}`,
    }),
    getEnquiries: builder.query({
      query: () => "contacts/",
    }),
    getReview: builder.query({
      query: () => "reviews",
    }),
    getAdminReviews: builder.query({
      query: () => "reviews/admin-reviews",
    }),
    getAdminBlogs: builder.query({
      query: () => "blogs/admin-blogs",
    }),
  }),
});

export const {
  useGetDoctersQuery,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetTotalServivesQuery,
  useGetTodayAppointmentQuery,
  useGetPendingAppointmentQuery,
  useGetUpcomingAppointmentQuery,
  useGetAllAppointmentQuery,
  useGetAppointmentByIdQuery,
  useGetTeamByIdQuery,
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useGetEnquiriesQuery,
  useGetReviewQuery,
  useGetAdminReviewsQuery,
  useGetAdminBlogsQuery,
} = apiSlice;
