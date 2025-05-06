import { useState } from "react";
import { useNavigate } from "react-router";

export const useNotification = () => {
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();

  const startNotification = ({ path }) => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
      if (path) {
        navigate(path);
      }
    }, 2000);
  };

  return { notification, startNotification };
};
