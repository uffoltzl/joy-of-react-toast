import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      ariaLive="polite"
      ariaLabel="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            dismissToast={() => dismissToast(toast.id)}
          >
            Example notice toast
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
