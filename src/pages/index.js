import React, {useState, useEffect} from 'react';

export default function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');

    useEffect(() => {
        const isAuth = localStorage.getItem('authenticated');
        if (isAuth === 'true') {
            setAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        if (passwordInput === 'lestournesolsVG') {
            localStorage.setItem('authenticated', 'true');
            setAuthenticated(true);
        } else {
            alert('Mot de passe incorrect');
        }
    };

    if (!authenticated) {
        return (
            <div style={{padding: '2rem', textAlign: 'center'}}>
                <h1>Bienvenue !</h1>
                <p>Veuillez entrer le mot de passe pour accéder aux documents :</p>
                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Mot de passe"
                    style={{padding: '0.5rem', fontSize: '1rem'}}
                />
                <button
                    onClick={handleLogin}
                    style={{marginLeft: '1rem', padding: '0.5rem 1rem'}}
                >
                    Entrer
                </button>
            </div>
        );
    }

    // Si authentifié, rediriger vers la documentation
    if (typeof window !== 'undefined') {
        window.location.href = '/rapportstage/introduction';
    }

    return null;
}