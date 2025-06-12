import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const access = localStorage.getItem('access_granted') === 'true';
    const isLoginPage = window.location.pathname.includes('/login');
    if (!access && !isLoginPage) {
      window.location.href = '/rapportstage/login'; // ✅ Attention au chemin GitHub Pages
    } else {
      setAuthorized(true);
    }
  }, []);

  if (authorized === null) return null; // Ne rien afficher pendant le check

  return <OriginalLayout {...props} />;
}
