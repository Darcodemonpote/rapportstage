import React, {useEffect, useState} from 'react';
import OriginalDocPage from '@theme-original/DocPage';

export default function ProtectedDocPage(props) {
    const [authorized, setAuthorized] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isLoginPage = window.location.pathname.includes('/login');
            const isAuthenticated = localStorage.getItem('auth') === 'true';

            if (!isAuthenticated && !isLoginPage) {
                window.location.replace('/rapportstage/login'); // adapte à ton baseUrl
            } else {
                setAuthorized(true);
            }
        }
    }, []);

    if (authorized === null) return null;

    return <OriginalDocPage {...props} />;
}