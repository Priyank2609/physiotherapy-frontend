import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AdminLogin from "./components/account/AdminLogin.jsx";
import { Toaster } from "react-hot-toast";
import CreateService from "./components/account/CreateService.jsx";
import Services from "./components/services/ServiceListing.jsx";
import ServiceDetail from "./components/services/ServiceDetailPage.jsx";
import ContactForm from "./components/account/ContactForm.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import BookAppointment from "./components/account/BookAppointment.jsx";
import Appointments from "./components/appointment/Appointment.jsx";
import AppointmentDetails from "./components/appointment/AppointmentDetailPage.jsx";
import DoctorDetails from "./components/team/TeamDetailPage.jsx";
import CreateBlog from "./components/account/CreateBlog.jsx";
import BlogDetailPage from "./components/research/ResearchDetailPage.jsx";
import Blogs from "./components/research/Blogs.jsx";
import CreateDoctor from "./components/account/CreateDoctor.jsx";
import Enquiries from "./components/enquiry/Enquiries.jsx";
import ReviewForm from "./components/account/ReviewForm.jsx";

import AdminReviews from "./components/review/ReviewLists.jsx";
import UpdateDoctor from "./components/team/TeamUpdatePage.jsx";
import Team from "./components/team/Team.jsx";
import UpdateBlog from "./components/research/UpdateBlog.jsx";
import EditService from "./components/services/UpdateService.jsx";
import NotFound from "./components/404/PageNotFound.jsx";
import ProtectedRoute from "./components/protect/ProtectRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      { path: "/book-appointment", element: <BookAppointment /> },
      {
        path: "/team/:id",
        element: <DoctorDetails />,
      },
      { path: "/blogs", element: <Blogs /> },
      {
        path: "/blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "/review-form",
        element: <ReviewForm />,
      },
      { path: "/doctors", element: <Team /> },
      {
        element: <ProtectedRoute />, // This wraps everything below
        children: [
          { path: "/admin/dashboard", element: <Dashboard /> },
          { path: "/admin/reviews", element: <AdminReviews /> },
          { path: "/admin/service", element: <CreateService /> },
          { path: "/admin/appointments", element: <Appointments /> },
          { path: "/admin/appointments/:id", element: <AppointmentDetails /> },
          { path: "/admin/create-blog", element: <CreateBlog /> },
          { path: "/admin/create-doctor", element: <CreateDoctor /> },
          { path: "/admin/enquiries", element: <Enquiries /> },
          { path: "/admin/edit-doctor/:id", element: <UpdateDoctor /> },
          { path: "/admin/update-blog/:slug", element: <UpdateBlog /> },
          { path: "/admin/update-service/:id", element: <EditService /> },
        ],
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
