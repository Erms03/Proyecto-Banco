"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { User, Shield, Edit, Save, X } from "lucide-react";
import { Link } from "react-router";
import { Notification } from "../components/Notification";
import { useNotification } from "../hooks/useNotification";

export const ProfilePage = () => {
  const { authenticatedUser } = useAuth();
  const { notification, startNotification } = useNotification();
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: authenticatedUser.name,
    email: authenticatedUser.email,
    phone: "+53 54942132",
    birthdate: "15/08/1985",
    address: "Calle Principal #123, La Habana",
    documentId: "85081512345",
    emailNotifications: true,
    smsNotifications: true,
    marketingNotifications: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los cambios en el servidor
    setIsEditing(false);
    startNotification({
      message: "Datos actualizados correctamente",
      path: null,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Información Personal
              </h3>
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveChanges}
                    className="flex items-center text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Save className="w-4 h-4 mr-1" /> Guardar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 mr-1" /> Cancelar
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center text-sm text-green-600 hover:text-green-700"
                >
                  <Edit className="w-4 h-4 mr-1" /> Editar
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Nombre completo</p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.name}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Correo electrónico
                  </p>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.email}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.phone}</p>
                  )}
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Fecha de nacimiento
                  </p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.birthdate}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Dirección</p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.address}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Documento de identidad
                  </p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="documentId"
                      value={formData.documentId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <p className="font-medium">{formData.documentId}</p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">
                Preferencias de contacto
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="emailNotifications"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Recibir notificaciones por correo electrónico
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smsNotifications"
                    name="smsNotifications"
                    checked={formData.smsNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="smsNotifications"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Recibir notificaciones por SMS
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketingNotifications"
                    name="marketingNotifications"
                    checked={formData.marketingNotifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="marketingNotifications"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Recibir ofertas y promociones
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "security":
        return (
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Seguridad de la cuenta
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">
                        Cambiar contraseña
                      </p>
                      <p className="text-sm text-gray-500">
                        Actualiza tu contraseña periódicamente
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/change-password"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Cambiar
                  </Link>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16.5V17.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">
                        Verificación en dos pasos
                      </p>
                      <p className="text-sm text-gray-500">
                        Añade una capa adicional de seguridad
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors">
                    Activar
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8H12.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">
                        Preguntas de seguridad
                      </p>
                      <p className="text-sm text-gray-500">
                        Configura preguntas para recuperar tu cuenta
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    Configurar
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Dispositivos conectados
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 17H15M12 3V4M18.36 6.64L17.65 7.35M21 12H20M4 12H3M6.35 7.35L5.64 6.64M12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">iPhone 13 Pro</p>
                      <p className="text-sm text-gray-500">
                        La Habana, Cuba • Activo ahora
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Este dispositivo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 16V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V16M20 16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16M20 16V14H4V16M12 12H12.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">MacBook Pro</p>
                      <p className="text-sm text-gray-500">
                        La Habana, Cuba • Hace 2 días
                      </p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 text-sm">
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {notification && (
        <Notification
          message={notification.message}
          error={notification.error}
          path={notification.path}
        />
      )}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
              <div className="flex flex-col items-center mb-6 p-4">
                <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold mb-3">
                  {authenticatedUser.name.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {authenticatedUser.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {authenticatedUser.email}
                </p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === "personal"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User
                    className={`w-5 h-5 mr-3 ${
                      activeTab === "personal" ? "text-white" : "text-gray-500"
                    }`}
                  />
                  Datos Personales
                </button>

                <button
                  onClick={() => setActiveTab("security")}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === "security"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Shield
                    className={`w-5 h-5 mr-3 ${
                      activeTab === "security" ? "text-white" : "text-gray-500"
                    }`}
                  />
                  Seguridad
                </button>
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1">{renderTabContent()}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
