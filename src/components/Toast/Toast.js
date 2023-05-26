import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, dismissToast }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const variantStyle = styles[variant];
  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {" "}
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={dismissToast}
        ariaLabel="Dismiss message"
        ariaLive="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
