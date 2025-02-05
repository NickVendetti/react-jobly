import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CompanyDetail from "./pages/CompanyDetail";
import CompanyList from "./pages/CompanyList";
import JobList from "./pages/JobList";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ProfileForm from "./pages/ProfileForm";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

function AppRoutes({ currentUser, login }) {  // ✅ Accept login
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm login={login} />} />  {/* ✅ Pass login to LoginForm */}
      <Route path="/signup" element={<SignupForm />} />
      <Route 
        path="/profile" 
        element={
          <PrivateRoute currentUser={currentUser}>
            <ProfileForm />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;