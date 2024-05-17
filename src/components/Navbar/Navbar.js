// Import necessary React components.
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css"; // Import CSS file for styling

// Define the Navbar component.
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        {/* Brand link */}
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">API</span>
        </Link>
        {/* Inline styling */}
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        {/* Navbar toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        {/* Navbar content */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            {/* NavLink for Characters */}
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            {/* NavLink for Episodes */}
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            {/* NavLink for Location */}
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component as the default export.
export default Navbar;
