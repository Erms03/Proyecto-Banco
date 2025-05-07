"use client";

import { useState, useEffect } from "react";
import { Notification } from "../components/Notification";
import { useNotification } from "../hooks/useNotification";
import { AuthLayout } from "../components/AuthSections/AuthLayout";
import { RegisterForm } from "../components/AuthSections/RegisterForm";
import {
  RegisterSideContent,
  RegisterSideFeatures,
} from "../components/AuthSections/AuthSideContent";

export const RegisterPage = () => {
  const { notification } = useNotification();
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
        <Notification message={"Se ha registrado correctamente"} />
      )}

      <AuthLayout
        title="Crear una cuenta"
        subtitle="Regístrate para comenzar a usar nuestros servicios"
        sideContent={<RegisterSideContent />}
        sideTitle="Únete a Banco Metropolitano"
        sideDescription="Crea tu cuenta y comienza a disfrutar de todos nuestros servicios financieros"
        sideFeatures={<RegisterSideFeatures />}
      >
        <RegisterForm />
      </AuthLayout>
    </>
  );
};
