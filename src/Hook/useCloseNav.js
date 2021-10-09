import { useEffect } from "react";

export function useCloseNav() {
  useEffect(() => {
    document.getElementById('entionaryNav').style.display = 'none';
    return () => {
      document.getElementById('entionaryNav')?.removeAttribute('style');
    };
  }, []);

  return null;
}