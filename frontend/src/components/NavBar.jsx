import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({ currentUser }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>

      {currentUser ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="signup">Signup</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;