import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AppointmentWrapper, Wrapper } from "../../styles/appointment-list";
import { useGetAllAppointmentQuery } from "../../slices/api.slice";
import { useUpdateAppointmentMutation } from "../../slices/form.slice";
import { RefreshCw } from "lucide-react";

const StatusDropdown = ({
  appointmentId,
  currentStatus,
  onUpdate,
  refetch,
}) => {
  const handleChange = async (e) => {
    const status = e.target.value;

    // console.log(status);

    if (status === currentStatus) return;

    const loading = toast.loading("Updating status...");
    try {
      await onUpdate({ id: appointmentId, status }).unwrap();
      toast.success("Status Updated", { id: loading });
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Update failed", { id: loading });
    }
  };

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      className="status-select"
    >
      <option value="pending">Pending</option>
      <option value="confirmed">Confirmed</option>
      <option value="completed">Completed</option>
      <option value="cancelled">Cancelled</option>
    </select>
  );
};

const Appointments = () => {
  const { data, isLoading, isError, refetch } = useGetAllAppointmentQuery();
  const [update] = useUpdateAppointmentMutation();

  const appointmentData = data?.data || [];
  // console.log(appointmentData);
  // 1. LOADING STATE
  if (isLoading) {
    return (
      <Wrapper>
        <div className="status-screen">
          <div className="loader-wrapper">
            <div className="spinner"></div>
            <p className="loading-text">Fetching Appointment Details...</p>
          </div>
        </div>
      </Wrapper>
    );
  }

  // 2. ERROR STATE
  if (isError) {
    return (
      <Wrapper>
        <div className="status-screen">
          <div className="error-card">
            <div className="error-icon">!</div>
            <h2 className="error-title">Connection Error</h2>
            <p className="error-msg">
              We couldn't reach the server. Please check your internet or try
              again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <AppointmentWrapper>
      <header className="page-header-bg">
        <div className="header-content">
          <div>
            <h1>Appointment Listings</h1>
            <p>Manage and track all patient bookings</p>
          </div>
          <button className="refresh-btn" onClick={() => refetch()}>
            <RefreshCw size={16} /> Refresh Data
          </button>
        </div>
      </header>
      <div className="dashboard-container">
        <div className="table-card">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Patient Details</th>
                <th>Service & Doctor</th>
                <th>Date & Time</th>
                <th>Current Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData && appointmentData.length > 0 ? (
                appointmentData.map((item) => (
                  <tr key={item._id}>
                    <td className="patient-name">
                      <div>{item.patientName}</div>
                      <span className="sub-text">{item.patientPhone}</span>
                    </td>

                    <td>
                      <div className="service-info">
                        <span className="service-tag">
                          {item.serviceId?.title}
                        </span>
                        <span className="doc-text">
                          With {item.doctorId?.name}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="date-time">
                        <strong>
                          {new Date(item.appointmentDate).toLocaleDateString()}
                        </strong>
                        <span>{item.appointmentTime}</span>
                      </div>
                    </td>

                    <td>
                      <span className={`status-badge ${item.status}`}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <StatusDropdown
                        appointmentId={item._id}
                        currentStatus={item.status}
                        onUpdate={update}
                        refetch={refetch}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    📅 No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppointmentWrapper>
  );
};

export default Appointments;
