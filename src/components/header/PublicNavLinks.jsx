import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetServicesQuery } from "../../slices/api.slice";

const PublicNavLinks = ({ closeMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data } = useGetServicesQuery();

  const services = data?.data.slice(0, 4) || [];

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <li>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </li>

      <li className={`dropdown ${dropdownOpen ? "active" : ""}`}>
        <div className="dropdown-trigger">
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <span className="dropdown-arrow" onClick={toggleDropdown}>
            {dropdownOpen ? "▴" : "▾"}
          </span>
        </div>

        <ul className="dropdown-menu">
          {services.map((item) => (
            <li key={item._id}>
              <NavLink to={`/services/${item._id}`} onClick={closeMenu}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <NavLink to="/blogs" onClick={closeMenu}>
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default PublicNavLinks;
