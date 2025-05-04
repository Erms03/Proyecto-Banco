import { useState, useEffect } from "react";

export const useRegister = () => {
  const [users, setUsers] = useState(() => {
    // Inicializar con los datos del localStorage si existen
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    // Guardar los usuarios en el localStorage cada vez que cambien
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const createUser = ({ dataForm }) => {
    const { name, email, password } = dataForm;

    // Validar que no exista un usuario con el mismo nombre o email
    const userExists = users.some(
      (user) => user.name === name || user.email === email
    );

    if (userExists) {
      alert("Ya existe un usuario con el mismo nombre o email");
      return;
    }

    // Crear el nuevo usuario
    const newUser = {
      name,
      email,
      password,
    };

    setUsers([...users, newUser]);
    alert("Usuario registrado con éxito");
  };

  return {
    users,
    createUser,
  };
};
