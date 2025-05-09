import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AuthProvider } from "../context/AuthContext";
import { ContactPage } from "../pages/ContactPage";
import { AboutPage } from "../pages/AboutPage";
import { ProfilePage } from "../pages/ProfilePage";

export const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>

        <Route path="contact" element={<div>Contact</div>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AuthProvider>
  );
};
