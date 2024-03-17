import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const TokenRefresh = () => {
    const { logout } = useAuth();

    const tokenRefresh = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'));
            
            if (token){
                const url = "http://127.0.0.1:8000/token/refresh/";
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        refresh: token.refresh
                    })
                });
    
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data);
                } else if (response.status === 400 || response.status === 401) {
                    await logout(); // Logout on 400 Bad Request
                } else {
                    const errorMessage = await response.text();
                    throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(tokenRefresh, 4 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return null;
};

export default TokenRefresh;
