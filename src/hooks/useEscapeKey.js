import { useEffect } from "react";

export const useEscapeKey = (callback) => {
  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", onEscape);

    return () => window.removeEventListener("keydown", onEscape);
  }, [callback]);
};
