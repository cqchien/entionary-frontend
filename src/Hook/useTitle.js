import { useEffect } from "react";

export function useTitle(title = "Entionary", isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== "Entionary" ? `${title} - Entionary` : title;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
