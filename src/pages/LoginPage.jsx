"use client";

import { useState, useEffect } from "react";
import { Notification } from "../components/Notification";
import { AuthLayout } from "../components/AuthSections/AuthLayout";
import { LoginForm } from "../components/AuthSections/LoginForm";
import {
  LoginSideContent,
  LoginSideFeatures,
} from "../components/AuthSections/AuthSideContent";
import { useNotification } from "../hooks/useNotification";

export const LoginPage = () => {
  const [animateForm, setAnimateForm] = useState(false);
  const { notification, startNotification } = useNotification();

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
          message={notification.message}
          error={notification.error}
          path={notification.path}
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
        <LoginForm startNotification={startNotification} />
      </AuthLayout>
    </>
  );
};
