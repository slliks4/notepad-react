// React imports
import { useContext } from "react";

// context Imports
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuthContext used outside scope');
    };

    return context;
};