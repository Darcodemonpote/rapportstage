
import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Login() {
    const baseUrl = useBaseUrl('/');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'lestournesolsVG') {
            localStorage.setItem('auth', 'true');
            window.location.replace(baseUrl); // redirige à la racine
        } else {
            setError('Mauvais mot de passe');
        }
    };

    return (
        <div style={{padding: '2rem'}}>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Se connecter</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}