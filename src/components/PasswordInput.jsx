import React from "react";
import { useState } from "react";

export const PasswordInput = ({ label, value, handleChange }) => {
  const [revealPassword, setRevealPassword] = useState(false);

  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="text-sm md:text-base font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          type={revealPassword ? "text" : "password"}
          name={label === "Contraseña" ? "password" : "confirmPassword"}
          id="password"
          placeholder="********"
          minLength={8}
          className="border border-black/10 shadow px-3 py-2 rounded-lg focus:outline-none w-full text-sm md:text-base"
          required
          value={value}
          onChange={handleChange}
        />
        {revealPassword ? (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={handleRevealPassword}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={handleRevealPassword}
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
