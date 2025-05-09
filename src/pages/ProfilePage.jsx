"use client";

import { useState } from "react";
import { Header } from "../components/HomeSections/Header";
import { Footer } from "../components/HomeSections/Footer";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Shield,
  Bell,
  Settings,
  ChevronRight,
  Edit,
  Eye,
  EyeOff,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
} from "lucide-react";
import { Link } from "react-router";

export const ProfilePage = () => {
  const { authenticatedUser } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  // Datos simulados para la cuenta bancaria
  const accountData = {
    accountNumber: "****-****-****-5678",
    fullAccountNumber: "1234-5678-9012-5678",
    balance: 12458.75,
    currency: "USD",
    type: "Cuenta Corriente",
    status: "Activa",
    lastAccess: "Hoy, 10:45 AM",
    transactions: [
      {
        id: 1,
        description: "Depósito de nómina",
        amount: 2500.0,
        type: "credit",
        date: "2023-05-08",
        time: "09:30",
      },
      {
        id: 2,
        description: "Pago de factura eléctrica",
        amount: -120.5,
        type: "debit",
        date: "2023-05-07",
        time: "14:15",
      },
      {
        id: 3,
        description: "Transferencia recibida",
        amount: 350.0,
        type: "credit",
        date: "2023-05-05",
        time: "11:20",
      },
      {
        id: 4,
        description: "Compra en supermercado",
        amount: -85.75,
        type: "debit",
        date: "2023-05-04",
        time: "18:45",
      },
      {
        id: 5,
        description: "Retiro en cajero",
        amount: -200.0,
        type: "debit",
        date: "2023-05-02",
        time: "13:10",
      },
    ],
    cards: [
      {
        id: 1,
        type: "Débito",
        number: "****-****-****-1234",
        expiry: "05/26",
        status: "Activa",
      },
      {
        id: 2,
        type: "Crédito",
        number: "****-****-****-5678",
        expiry: "08/25",
        status: "Activa",
      },
    ],
    savingsGoals: [
      { id: 1, name: "Vacaciones", target: 5000, current: 2500, progress: 50 },
      { id: 2, name: "Nuevo auto", target: 15000, current: 3750, progress: 25 },
    ],
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Resumen de cuenta */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Resumen de Cuenta
                </h3>
                <Link
                  to="/accounts"
                  className="text-sm text-green-600 hover:text-green-700 flex items-center"
                >
                  Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg p-5 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-white/80">Saldo disponible</p>
                      <h4 className="text-2xl font-bold">
                        {formatCurrency(accountData.balance)}
                      </h4>
                    </div>
                    <div className="bg-white/20 rounded-full p-2">
                      <CreditCard className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-white/80 mb-1">
                        Número de cuenta
                      </p>
                      <div className="flex items-center">
                        <p className="text-sm font-medium">
                          {showAccountNumber
                            ? accountData.fullAccountNumber
                            : accountData.accountNumber}
                        </p>
                        <button
                          onClick={() =>
                            setShowAccountNumber(!showAccountNumber)
                          }
                          className="ml-2 text-white/80 hover:text-white"
                        >
                          {showAccountNumber ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">Tipo</p>
                      <p className="text-sm font-medium">{accountData.type}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-lg p-5">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Actividad reciente
                  </h4>
                  <div className="space-y-3">
                    {accountData.transactions.slice(0, 3).map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              transaction.type === "credit"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {transaction.type === "credit" ? (
                              <ArrowDownRight className="w-4 h-4" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4" />
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {transaction.description}
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {transaction.date}
                              <Clock className="w-3 h-3 ml-2 mr-1" />
                              {transaction.time}
                            </div>
                          </div>
                        </div>
                        <p
                          className={`font-medium ${
                            transaction.type === "credit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : "-"}
                          {formatCurrency(Math.abs(transaction.amount))}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <Link
                      to="/transactions"
                      className="text-sm text-green-600 hover:text-green-700 flex items-center justify-center"
                    >
                      Ver todas las transacciones{" "}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tarjetas */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Mis Tarjetas
                </h3>
                <Link
                  to="/cards"
                  className="text-sm text-green-600 hover:text-green-700 flex items-center"
                >
                  Administrar <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accountData.cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Tarjeta de {card.type}
                        </p>
                        <p className="text-xs text-gray-500">
                          {card.number} • Exp: {card.expiry}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        card.status === "Activa"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {card.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Metas de ahorro */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Metas de Ahorro
                </h3>
                <Link
                  to="/savings"
                  className="text-sm text-green-600 hover:text-green-700 flex items-center"
                >
                  Crear nueva meta <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="space-y-4">
                {accountData.savingsGoals.map((goal) => (
                  <div key={goal.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">{goal.name}</h4>
                      <p className="text-sm font-medium">
                        {formatCurrency(goal.current)} /{" "}
                        {formatCurrency(goal.target)}
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {goal.progress}% completado
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
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
              <button className="text-sm text-green-600 hover:text-green-700 flex items-center">
                <Edit className="w-4 h-4 mr-1" /> Editar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Nombre completo</p>
                  <p className="font-medium">{authenticatedUser.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Correo electrónico
                  </p>
                  <p className="font-medium">{authenticatedUser.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                  <p className="font-medium">+53 54942132</p>
                </div>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Fecha de nacimiento
                  </p>
                  <p className="font-medium">15/08/1985</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Dirección</p>
                  <p className="font-medium">Calle Principal #123, La Habana</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Documento de identidad
                  </p>
                  <p className="font-medium">85081512345</p>
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
                    id="email-notifications"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="email-notifications"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Recibir notificaciones por correo electrónico
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sms-notifications"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="sms-notifications"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Recibir notificaciones por SMS
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketing-notifications"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="marketing-notifications"
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
                  <button className="text-green-600 hover:text-green-700">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">
                        Alertas de seguridad
                      </p>
                      <p className="text-sm text-gray-500">
                        Configura alertas para actividades sospechosas
                      </p>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-700">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-green-600" />
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
                  <button className="text-green-600 hover:text-green-700">
                    <ChevronRight className="w-5 h-5" />
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

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actividad reciente
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">
                      Inicio de sesión exitoso
                    </p>
                    <p className="text-sm text-gray-500">
                      Hoy, 10:45 AM • La Habana, Cuba
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Settings className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">
                      Cambio de contraseña
                    </p>
                    <p className="text-sm text-gray-500">
                      Hace 15 días • La Habana, Cuba
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">
                      Inicio de sesión exitoso
                    </p>
                    <p className="text-sm text-gray-500">
                      Hace 16 días • La Habana, Cuba
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full py-2 text-sm text-green-600 hover:text-green-700 flex items-center justify-center">
                Ver todo el historial de actividad{" "}
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          </motion.div>
        );
      case "documents":
        return (
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Documentos y Estados de Cuenta
            </h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h4 className="font-medium text-gray-900 mb-3">
                  Estados de cuenta recientes
                </h4>
                <div className="space-y-3">
                  {[
                    { month: "Abril 2023", date: "01/05/2023", size: "1.2 MB" },
                    { month: "Marzo 2023", date: "01/04/2023", size: "1.1 MB" },
                    {
                      month: "Febrero 2023",
                      date: "01/03/2023",
                      size: "1.3 MB",
                    },
                  ].map((statement, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 2V8H20"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 13H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 17H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 9H9H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">
                            Estado de cuenta - {statement.month}
                          </p>
                          <p className="text-xs text-gray-500">
                            Generado el {statement.date} • {statement.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="font-medium text-gray-900 mb-3">
                  Documentos importantes
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Contrato de cuenta",
                      date: "15/01/2023",
                      size: "450 KB",
                    },
                    {
                      name: "Términos y condiciones",
                      date: "15/01/2023",
                      size: "320 KB",
                    },
                    {
                      name: "Política de privacidad",
                      date: "15/01/2023",
                      size: "280 KB",
                    },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-amber-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 2V8H20"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 13H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 17H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 9H9H8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">
                            {doc.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Actualizado el {doc.date} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-4 border-t border-gray-200"
              >
                <button className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Solicitar documentos adicionales
                </button>
              </motion.div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === "overview"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <CreditCard
                    className={`w-5 h-5 mr-3 ${
                      activeTab === "overview" ? "text-white" : "text-gray-500"
                    }`}
                  />
                  Resumen
                </button>

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

                <button
                  onClick={() => setActiveTab("documents")}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === "documents"
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 mr-3 ${
                      activeTab === "documents" ? "text-white" : "text-gray-500"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 13H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 17H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 9H9H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Documentos
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
