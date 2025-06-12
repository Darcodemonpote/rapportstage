import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    // ⛔️ Vérifie bien que le code s'exécute côté client
    if (typeof window !== 'undefined') {
      const access = localStorage.getItem('access_granted') === 'true';
      const isLoginPage = window.location.pathname.includes('/login');

      if (!access && !isLoginPage) {
        window.location.href = '/rapportstage/login'; // ✅ adapte au chemin GitHub Pages
      } else {
        setAuthorized(true);
      }
    }
  }, []);

  if (authorized === null) return null; // Ne rien afficher pendant le check

  return <OriginalLayout {...props} />;
}
