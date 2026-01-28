import React, { useEffect, useRef } from "react";
import HeroSlider from "../heroSection/HeroSection";
import PhysioDisciplines from "../offer/Offer";
import About from "../about/About";
import Advantages from "../advantage/Advantage";
import NewsResearch from "../research/Research";
import MapSection from "../map/Map";
import Team from "../team/Team";
import Review from "../review/Review";
import { useSelector } from "react-redux";
import { useGetAllAppointmentQuery } from "../../slices/api.slice";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function Home() {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  const { data, isLoading } = useGetAllAppointmentQuery(undefined, {
    pollingInterval: 100000,

    skip: !isAdmin,
  });

  const appointmentData = data?.data || [];
  const prevCountRef = useRef(appointmentData.length);
  console.log(prevCountRef);

  useEffect(() => {
    if (!isAdmin) return;

    if (!isLoading && appointmentData.length > prevCountRef.current) {
      const newPending = appointmentData.filter(
        (app) => app.status === "pending",
      );

      if (newPending.length > 0) {
        toast.custom(
          (t) => (
            <div
              className={`custom-toast ${t.visible ? "animate-enter" : "animate-leave"}`}
            >
              <div className="toast-icon">
                <span role="img" aria-label="bell">
                  🔔
                </span>
              </div>
              <div className="toast-content">
                <p
                  className="toast-title"
                  style={{ margin: 0, fontWeight: 800 }}
                >
                  {newPending.length} New Booking
                  {newPending.length > 1 ? "s" : ""}!
                </p>
                <p
                  className="toast-sub"
                  style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}
                >
                  You have {newPending.length} pending appointment
                  {newPending.length > 1 ? "s" : ""} waiting for approval.
                </p>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="toast-close"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  width: "28px",
                  height: "28px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>
          ),
          {
            duration: 5000,
            position: "top-right",
            style: {
              marginTop: "85px",
              marginRight: "20px",
            },
          },
        );
      }
    }
    prevCountRef.current = appointmentData.length;
  }, [appointmentData, isLoading, isAdmin]);

  return (
    <div>
      <HeroSlider />
      <PhysioDisciplines />
      <About />
      <Advantages />
      <NewsResearch />
      <MapSection />
      <Review />
      <Team />
    </div>
  );
}

export default Home;
