// React-router-dom imports
import {  
    Outlet
} from "react-router-dom";

// Components imports
import Navbar from "../components/Navbar";

// Import css
import '../assets/css/appLayout.css'
import Header from '../components/Header';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
        <main>
          <Outlet />
        </main>
      <Navbar />
    </div>
  )
}
