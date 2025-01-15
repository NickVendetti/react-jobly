import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CompanyDetail from "./pages/CompanyDetail";
import CompanyList from "./pages/CompanyList";
import JobList from "./pages/JobList";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm"
import NotFound from "./pages/NotFound"
import ProfileForm from "./pages/ProfileForm"
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes({ currentUser }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompanyList/>} />
      <Route path="/companies/:handle" element={<CompanyDetail/>} />
      <Route path="/jobs" element={<JobList/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/signup" element={<SignupForm/>} />
      <Route 
        path="/profile" 
        element={
          <PrivateRoute currentUser={currentUser}>
            <ProfileForm/>
          </PrivateRoute>
        }
     />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default AppRoutes;