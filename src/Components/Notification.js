import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-dismiss after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed left-4 bottom-4 w-80 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 hover:opacity-80">
      {message}
    </div>
  );
};

export default Notification;
