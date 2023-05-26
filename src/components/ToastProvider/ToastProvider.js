import React, { useEffect } from "react";

export const ToastContext = React.createContext({
  toasts: [],
  setToasts: () => {},
});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    const newToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];

    setToasts(newToasts);
  };

  const dismissToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(newToasts);
  };

  useEffect(() => {
    const dimissAllOnEscape = (event) => {
      if (event.key === "Escape") {
        setToasts([]);
      }
    };
    window.addEventListener("keydown", dimissAllOnEscape);

    return () => window.removeEventListener("keydown", dimissAllOnEscape);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
