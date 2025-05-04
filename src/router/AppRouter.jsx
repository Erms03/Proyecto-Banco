import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="contact" element={<div>Contact</div>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
