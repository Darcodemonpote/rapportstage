import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const baseUrl = useBaseUrl('/'); // "/rapportstage/"
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setLoggedIn(auth === 'true');
  }, []);

  if (!loggedIn) {
    // Redirige vers la page login avec baseUrl
    window.location.href = `${baseUrl}login`;
    return null;
  }

  return (
    <div>
      <h1>Bienvenue dans mon rapport de stage</h1>
      <p>Tu es connecté avec succès !</p>
      {/* Ajoute ici des liens vers tes pages importantes, par exemple : */}
      <nav>
        <ul>
          <li><a href={`${baseUrl}0-introduction`}>Introduction</a></li>
          <li><a href={`${baseUrl}competences`}>Compétences</a></li>
          {/* etc. */}
        </ul>
      </nav>
    </div>
  );
}
