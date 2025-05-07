"use client";

import { useState, useEffect } from "react";
import { Notification } from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import { AuthLayout } from "../components/AuthSections/AuthLayout";
import { LoginForm } from "../components/AuthSections/LoginForm";
import {
  LoginSideContent,
  LoginSideFeatures,
} from "../components/AuthSections/AuthSideContent";

export const LoginPage = () => {
  const { notification } = useNotification();
  const [error, setError] = useState("");
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    // Animar la entrada del formulario
    setTimeout(() => {
      setAnimateForm(true);
    }, 100);
  }, []);

  return (
    <>
      {notification && (
        <Notification
          message={"Ha iniciado sesión correctamente"}
          error={error}
        />
      )}

      <AuthLayout
        title="Bienvenido de nuevo"
        subtitle="Inicia sesión para acceder a tu cuenta"
        sideContent={<LoginSideContent />}
        sideTitle="Banco Metropolitano"
        sideDescription="Accede a tu cuenta para gestionar tus finanzas de manera segura y eficiente"
        sideFeatures={<LoginSideFeatures />}
      >
        <LoginForm />
      </AuthLayout>
    </>
  );
};
