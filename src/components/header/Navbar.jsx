import { useState } from "react";
import { MainNavbar } from "../../styles/navber";
import logo from "../../assets/download.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../slices/form.slice";
import { logout } from "../../slices/user.slice";
import AdminNavLinks from "./AdminNavLinks";
import PublicNavLinks from "./PublicNavLinks";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [log] = useLogoutMutation();

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";
  // console.log(isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    try {
      await log().unwrap();
      navigate("/");
    } catch (err) {
      console.error("Logout API failed", err);
    } finally {
      dispatch(logout());
    }
  };

  return (
    <>
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <MainNavbar>
        <div className="nav-container">
          <div className="nav-left">
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              <div className="nav-brand">
                <img src={logo} alt="Physioterepia Logo" />
                <div className="brand-text">
                  <h1>PHYSIOTHERAPIA</h1>
                  <span className="tagline">
                    Physiotherapy and Rehab Centre
                  </span>
                  <span className="sub-tagline">Your Recovery Starts Here</span>
                </div>
              </div>
            </NavLink>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {isAdmin ? (
              <AdminNavLinks closeMenu={closeMenu} />
            ) : (
              <PublicNavLinks closeMenu={closeMenu} />
            )}
            <li className="mobile-only-item">
              {isAdmin ? (
                <>
                  <button
                    className="mobile-cta"
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/book-appointment"}
                    className="mobile-cta"
                    onClick={closeMenu}
                  >
                    Book Appointment
                  </NavLink>
                </>
              )}
            </li>
          </ul>

          <div className="nav-right">
            {isAdmin ? (
              <>
                <button className="cta-btn admin-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className="cta-btn" to={"/book-appointment"}>
                  {" "}
                  Book Appointment{" "}
                </NavLink>
              </>
            )}
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </MainNavbar>
    </>
  );
};
