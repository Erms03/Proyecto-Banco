"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useNavigate } from "react-router";

export const Notification = ({ message, error, path }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Asegurarse de que la notificación sea visible inicialmente
    setIsVisible(true);
    setIsExiting(false);

    console.log("Hola"  );

    const timer = setTimeout(() => {
      setIsExiting(true);

      setTimeout(() => {
        setIsVisible(false);
        if (path) navigate(path);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, path, message, error]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center p-4 max-w-xs text-sm rounded-lg shadow-lg transition-all duration-500 ${
        error ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"
      } ${
        isExiting ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
      }`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2">
        {error ? (
          <XCircle className="text-red-600" />
        ) : (
          <CheckCircle className="text-green-600" />
        )}
      </div>
      <div className="ml-2 text-sm font-medium">{error || message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300"
        onClick={handleClose}
        aria-label="Cerrar"
      >
        <X size={16} />
      </button>
    </div>
  );
};
