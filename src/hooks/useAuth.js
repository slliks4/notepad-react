import { useState, useContext } from 'react';
import { useAuthContext } from './useAuthContext';

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (username, password) => {
        try {
            setIsLoading(true);
            setError(null);

            const url = "http://127.0.0.1:8000/token/";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', JSON.stringify(data));
                dispatch({ type: 'LOGIN', payload: data });
                return data;
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (username, email, fullname, password) => {
        try {
            setIsLoading(true);
            setError(null);

            const url = "http://127.0.0.1:8000/create_user/";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    fullname: fullname,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Registration Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            localStorage.removeItem('token');
            dispatch({ type: 'LOGGED_OUT', payload: null });
            return true;
        } catch (error) {
            console.error('Logout Error:', error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, logout, register, isLoading, error };
};
