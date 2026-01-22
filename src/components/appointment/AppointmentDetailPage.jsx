import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  DetailsWrapper,
  Card,
  Header,
  Section,
  Row,
  Label,
  Value,
  Status,
  ActionGroup,
  Button,
} from "../../styles/appointment-detail-page";
import { useGetAppointmentByIdQuery } from "../../slices/api.slice";
import { useUpdateAppointmentMutation } from "../../slices/form.slice";

const AppointmentDetails = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetAppointmentByIdQuery(id);
  const [updateStatus, { isLoading: updating }] =
    useUpdateAppointmentMutation();

  if (isLoading) return <p>Loading...</p>;

  const appointment = data?.data;

  const handleStatus = async (status) => {
    const loadingToast = toast.loading("Updating status...");
    try {
      await updateStatus({ id, status }).unwrap();
      toast.success("Status Updated Successfully", { id: loadingToast });
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Update failed", {
        id: loadingToast,
      });
    }
  };

  return (
    <DetailsWrapper>
      <Card>
        <Header>
          <h2>Appointment Details</h2>
          <Status type={appointment?.status?.toLowerCase()}>
            {appointment?.status?.toUpperCase()}
          </Status>
        </Header>

        <Section>
          <h3>Patient Information</h3>
          <Row>
            <Label>Name</Label>
            <Value>{appointment.patientName}</Value>
          </Row>
          <Row>
            <Label>Phone</Label>
            <Value>{appointment.patientPhone}</Value>
          </Row>
          <Row>
            <Label>Email</Label>
            <Value>{appointment.patientEmail}</Value>
          </Row>
        </Section>

        <Section>
          <h3>Appointment Information</h3>
          <Row>
            <Label>Service</Label>
            <Value>{appointment.serviceId?.title}</Value>
          </Row>
          <Row>
            <Label>Doctor</Label>
            <Value>{appointment.doctorId?.name}</Value>
          </Row>
          <Row>
            <Label>Date</Label>
            <Value>
              {new Date(appointment.appointmentDate).toLocaleDateString()}
            </Value>
          </Row>
          <Row>
            <Label>Time</Label>
            <Value>{appointment.appointmentTime}</Value>
          </Row>
        </Section>

        <ActionGroup>
          <Button
            $confirm
            disabled={updating || appointment.status === "confirmed"}
            onClick={() => handleStatus("confirmed")}
          >
            Confirm
          </Button>

          <Button
            $cancel
            disabled={updating || appointment.status === "cancelled"}
            onClick={() => handleStatus("cancelled")}
          >
            Cancel
          </Button>

          <Button
            $complete
            disabled={updating || appointment.status === "completed"}
            onClick={() => handleStatus("completed")}
          >
            Complete
          </Button>
        </ActionGroup>
      </Card>
    </DetailsWrapper>
  );
};

export default AppointmentDetails;
