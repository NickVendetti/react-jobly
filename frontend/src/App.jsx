import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./Routes";
import JoblyApi from "./api/api";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Fetch user details when token exists
  useEffect(() => {
    async function getUser() {
      if (token) {
        JoblyApi.token = token;
        try {
          let userRes = await JoblyApi.request("auth/me");
          setCurrentUser(userRes.user);
        } catch (err) {
          console.error("Error fetching user:", err);
          setCurrentUser(null);
        }
      }
    }
    getUser();
  }, [token]);

  // ✅ Define login function
  async function login(username, password) {
    try {
      let res = await JoblyApi.request("auth/token", { username, password }, "post");
      let token = res.token;
      localStorage.setItem("token", token);
      JoblyApi.token = token;
      setToken(token);
    } catch (err) {
      console.error("Login failed:", err);
      throw new Error("Invalid username/password");
    }
  }

  // ✅ Define logout function
  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
  }

  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} logout={logout} />
      <AppRoutes currentUser={currentUser} login={login} /> {/* ✅ Pass login function */}
    </BrowserRouter>
  );
}

export default App;