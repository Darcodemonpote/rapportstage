import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function Home() {
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('auth') === 'true';

  if (!isLoggedIn) {
    return <Redirect to="/rapportstage/login" />;
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenue dans mon rapport de stage</h1>
      <p>Tu es connecté avec succès !</p>
      <Link
        to="/rapportstage/introduction"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: '#25c2a0',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Accéder au rapport
      </Link>
    </main>
  );
}
