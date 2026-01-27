import React from "react";
import {
  DashboardWrapper,
  PageTitle,
  CardsGrid,
  StatCard,
  CardIcon,
  CardInfo,
  GridTwo,
  Section,
  SectionHeader,
  TableContainer,
  Table,
  Status,
  Button,
  EnquiryList,
  EnquiryItem,
  DashboardCss,
  PulseLoader,
  LoadingScreen,
  ErrorContainer,
} from "../../styles/dashboard";
import {
  useGetEnquiriesQuery,
  useGetPendingAppointmentQuery,
  useGetTodayAppointmentQuery,
  useGetTotalServivesQuery,
  useGetUpcomingAppointmentQuery,
} from "../../slices/api.slice";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const {
    data,
    isLoading: loadServices,
    isError: errServices,
  } = useGetTotalServivesQuery();
  const {
    data: today,
    isLoading: loadToday,
    isError: errToday,
  } = useGetTodayAppointmentQuery();
  const { data: pending, isLoading: loadPending } =
    useGetPendingAppointmentQuery();
  const { data: upcoming, isLoading: loadUpcoming } =
    useGetUpcomingAppointmentQuery();
  const { data: enquiry, isLoading: loadEnquiry } = useGetEnquiriesQuery();
  // console.log(enquiry);
  const isGlobalLoading =
    loadServices || loadToday || loadPending || loadUpcoming || loadEnquiry;

  const isGlobalError = errServices || errToday;

  if (isGlobalLoading) {
    return (
      <LoadingScreen>
        <PulseLoader />
        <h3>Accessing Secure Medical Database...</h3>
        <p>Syncing your schedule and patient records.</p>
      </LoadingScreen>
    );
  }

  if (isGlobalError) {
    return (
      <ErrorContainer>
        <div className="error-card">
          <span>⚠️</span>
          <h2>Connection Interrupted</h2>
          <p>
            We couldn't fetch the dashboard data. Please check your network or
            contact support.
          </p>
          <button onClick={() => window.location.reload()}>
            Retry Connection
          </button>
        </div>
      </ErrorContainer>
    );
  }
  // console.log(data);
  const totalServices = data?.totalService;
  const todayAppointment = today?.todayApp;
  const todayAppointmentName = today?.totalApp || [];
  const pendingAppointment = pending?.pendingAppointment;
  const upcomingAppointment = upcoming?.count;
  const enquiries = enquiry?.contacts.slice(0, 3) || [];
  // console.log(pending);
  // console.log(upcoming);

  // console.log(todayAppointmentName);

  return (
    <DashboardCss>
      <DashboardWrapper>
        <PageTitle>
          <h1>Admin Dashboard</h1>
          <p>Manage appointments, services, and enquiries</p>
        </PageTitle>

        <CardsGrid>
          <StatCard>
            <CardIcon>📅</CardIcon>
            <CardInfo>
              <h3>{todayAppointment}</h3>
              <p>Today’s Appointments</p>
            </CardInfo>
          </StatCard>

          <StatCard>
            <CardIcon>⏳</CardIcon>
            <CardInfo>
              <h3>{pendingAppointment}</h3>
              <p>Pending Appointments</p>
            </CardInfo>
          </StatCard>

          <StatCard>
            <CardIcon>📆</CardIcon>
            <CardInfo>
              <h3>{upcomingAppointment}</h3>
              <p>Upcoming (7 days)</p>
            </CardInfo>
          </StatCard>

          <StatCard>
            <CardIcon>💼</CardIcon>
            <CardInfo>
              <h3>{totalServices}</h3>
              <p>Total Services</p>
            </CardInfo>
          </StatCard>
        </CardsGrid>

        <GridTwo>
          <Section>
            <SectionHeader>
              <div>
                <h2>Today’s Appointments</h2>
                <span>Manage today’s schedule</span>
              </div>
            </SectionHeader>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Service</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {todayAppointmentName && todayAppointmentName.length > 0 ? (
                    todayAppointmentName.map((item) => (
                      <tr key={item._id}>
                        <td data-label="Patient">{item.patientName}</td>

                        <td data-label="Service">
                          {item.serviceId?.title || "N/A"}
                        </td>

                        <td data-label="Time">{item.appointmentTime}</td>

                        <td data-label="Status">
                          <Status type={item.status}>{item.status}</Status>
                        </td>

                        <td data-label="Action">
                          <NavLink to={`/admin/appointments/${item._id}`}>
                            <Button $small>View</Button>
                          </NavLink>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        style={{ textAlign: "center", padding: "20px" }}
                      >
                        No appointments scheduled for today
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </Section>

          <Section>
            <SectionHeader>
              <div>
                <h2>Recent Enquiries</h2>
                <span>Latest patient messages</span>
              </div>
            </SectionHeader>

            {enquiries.length > 0 ? (
              <EnquiryList>
                {enquiries.map((enq) => (
                  <EnquiryItem key={enq._id}>
                    <h4>{enq.name}</h4>
                    <p>{enq.message}</p>
                    <span>{enq.relativeDate}</span>
                  </EnquiryItem>
                ))}
              </EnquiryList>
            ) : (
              <p
                style={{ textAlign: "center", color: "#666", margin: "1rem 0" }}
              >
                No enquiries yet.
              </p>
            )}

            <NavLink to={"/admin/enquiries"}>
              <Button $full>View All Enquiries</Button>
            </NavLink>
          </Section>
        </GridTwo>
      </DashboardWrapper>
    </DashboardCss>
  );
};

export default Dashboard;
