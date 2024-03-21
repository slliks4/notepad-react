// React-router-dom imports
import {  
    Outlet
} from "react-router-dom";

// Import css
import '../assets/css/authLayout.css'

// Import components
import Language from "../components/Language";

// Import Icons
import { IoMdArrowDropdown } from "react-icons/io";

// Authentication Layout Actions
export const authLayoutActions = async ({request}) => {
    const data = request.formData();

    console.log({data, request});
};

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <button 
        type="button" 
        className="select-language"
        onClick={((event)=>{
        event.preventDefault();
        console.log("clicked");
      })}>
        <span>English (Nigeria)</span>
        <IoMdArrowDropdown />
      </button>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
