import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentUser, logout }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>

      {currentUser ? (
        <>
          <span>Welcome, {currentUser.username}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;