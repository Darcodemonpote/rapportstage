import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoginPage = window.location.pathname.includes('/login');
      const isAuthenticated = localStorage.getItem('auth') === 'true';

      if (!isAuthenticated && !isLoginPage) {
        window.location.href = '/rapportstage/login'; // adapte à GitHub Pages
      } else {
        setAuthorized(true);
      }
    }
  }, []);

  if (authorized === null) return null; // Evite un flash

  return <OriginalLayout {...props} />;
}
