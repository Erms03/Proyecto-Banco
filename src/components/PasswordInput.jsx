
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const PasswordInput = ({ label, value, handleChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name || "password"}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          required
          name={name || "password"}
          id={name || "password"}
          placeholder="••••••••"
          className="w-full border border-gray-200 shadow-sm px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm"
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={
            showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
          }
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};
