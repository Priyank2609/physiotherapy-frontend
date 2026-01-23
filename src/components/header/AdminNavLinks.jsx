import { NavLink } from "react-router-dom";

const AdminNavLinks = ({ closeMenu }) => (
  <>
    <li>
      <NavLink to="/admin/dashboard" onClick={closeMenu}>
        Dashboard
      </NavLink>
    </li>

    <li>
      <NavLink to="/admin/appointments" onClick={closeMenu}>
        Appointments
      </NavLink>
    </li>

    <li>
      <NavLink to="/services" onClick={closeMenu}>
        Services
      </NavLink>
    </li>

    <li>
      <NavLink to="/admin/enquiries" onClick={closeMenu}>
        Enquiries
      </NavLink>
    </li>
    <li>
      <NavLink to="/blogs" onClick={closeMenu}>
        Blogs
      </NavLink>
    </li>

    <li>
      <NavLink to="/admin/reviews" onClick={closeMenu}>
        Reviews
      </NavLink>
    </li>

    <li>
      <NavLink to="/admin/create-doctor" onClick={closeMenu}>
        Create Doctor
      </NavLink>
    </li>
  </>
);

export default AdminNavLinks;
