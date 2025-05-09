import { useState } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const startNotification = ({ message, error, path }) => {
    setNotification({ message, error, path });

    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  return { notification, startNotification };
};
