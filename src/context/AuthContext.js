// react imports
import { createContext, useEffect, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

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
    const [state, dispatch] = useReducer(authReducer, { token: null });
    const [ Loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            dispatch({ type: 'LOGIN', payload: token });
        };
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
