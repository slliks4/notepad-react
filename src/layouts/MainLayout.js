// React-router-dom imports
import {  
    Outlet
} from "react-router-dom";

// Components imports
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
