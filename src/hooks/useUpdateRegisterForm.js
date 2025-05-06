import { useState } from "react";

export const useUpdateRegisterForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const cleanRegisterForm = () => {
    setDataForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return { dataForm, updateForm, cleanRegisterForm };
};
