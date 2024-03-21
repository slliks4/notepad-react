// React Imports
import { createContext, useEffect, useReducer, useState } from "react";

export const TrackPageContext = createContext();

export const TrackPageReducer = (state, action)=>{
    switch(action.type){
        case '/':
            return { currentPage: action.payload };
        case '/inbox':
            return { currentPage: action.payload };
        case '/settings':
            return { currentPage: action.payload };
        case '/add-note':
            return {currentPage: action.payload}
        default:
            return state;
    }
}
export const TrackPageProvider = ({children}) =>{
    const [Loading, setLoading] = useState(true);
    const [ state, dispatch ] = useReducer(TrackPageReducer, {
        currentPage: null
    });
    useEffect(()=>{
        setLoading(false);
    }, [])

    if (!Loading){
        // console.log('CurrentPage',state);
    }

    return (
        <TrackPageContext.Provider value={{state, dispatch}}>
            {children}
        </TrackPageContext.Provider>
    )
}