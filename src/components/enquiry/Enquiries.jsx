import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare, RefreshCcw } from "lucide-react";
import { EnquiryWrapper } from "../../styles/enquiry-list";
import { useGetEnquiriesQuery } from "../../slices/api.slice";
import {
  PulseLoader,
  LoadingScreen,
  ErrorContainer,
} from "../../styles/dashboard";

const Enquiries = () => {
  const { data, isLoading, isError, refetch } = useGetEnquiriesQuery();
  const enquiries = data?.contacts || [];

  if (isLoading) {
    return (
      <LoadingScreen>
        <PulseLoader />
        <h3>Retrieving Enquiries...</h3>
      </LoadingScreen>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <div className="error-card">
          <h2>Connection Error</h2>
          <p>Failed to load enquiries. Please check your network.</p>
          <button onClick={refetch}>Try Again</button>
        </div>
      </ErrorContainer>
    );
  }

  return (
    <EnquiryWrapper>
      <header className="page-header-bg">
        <div className="header-content">
          <div>
            <h1>Contact Enquiries</h1>
            <p>All messages received from website visitors</p>
          </div>
          <button className="refresh-btn" onClick={refetch}>
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        <div className="table-card">
          <div className="table-scroll">
            <table className="enquiry-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Contact</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty-text">
                      No enquiries found in the database.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((item, index) => (
                    <motion.tr
                      key={item._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td>
                        <div className="user-cell">
                          <User size={18} />
                          <span>{item.name}</span>
                        </div>
                      </td>

                      <td>
                        <div className="contact-cell">
                          <div>
                            <Mail size={14} /> {item.email}
                          </div>
                          <div>
                            <Phone size={14} /> {item.phone}
                          </div>
                        </div>
                      </td>

                      <td className="message-cell">
                        <MessageSquare size={16} />
                        <span>{item.message}</span>
                      </td>

                      <td className="date-cell">
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </EnquiryWrapper>
  );
};

export default Enquiries;
