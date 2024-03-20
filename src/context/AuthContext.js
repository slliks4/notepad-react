// react imports
import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return { token: action.payload };
        case 'LOGGED_OUT':
            return { token:null };
        default:
            return state;
    };
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { 
        token: null 
    });
    const [ Loading, setLoading ] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (typeof token === 'string' && token.length > 0 && /^[\],:{}\s]*$/.test(token.replace(/\\["\\\/bfnrtu]/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                try {
                    dispatch({ type: 'LOGIN', payload: JSON.parse(token) });
                } catch (error) {
                    console.error('Error parsing token:', error);
                    console.error('Token:', token); // Log the token for debugging
                }
        } else {
            console.error('Invalid token');
        }
        setLoading(false);
    }, []);
    

    if (!Loading){
        console.log('Authentication state', state);
    }

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
