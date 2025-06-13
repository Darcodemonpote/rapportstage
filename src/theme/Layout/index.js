import React, {useEffect, useState} from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function Layout(props) {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const isAuth = localStorage.getItem('authenticated');
        if (isAuth === 'true') {
            setAuthenticated(true);
        } else {
            window.location.href = '/'; // Redirection vers la page d’accueil si non connecté
        }
    }, []);

    if (!authenticated) {
        return null; // ou un loader
    }

    return <OriginalLayout {...props} />;
}