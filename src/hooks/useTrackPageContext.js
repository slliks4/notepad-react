// React Imports
import { useContext } from "react"

// Context imports
import { TrackPageContext } from "../context/TrackPageContext"

export const useTrackPageContext = ()=>{
    const context = useContext(TrackPageContext);

    if(!context){
        throw new Error('useTrackPageContext used outside scope');
    }

    return context;
}