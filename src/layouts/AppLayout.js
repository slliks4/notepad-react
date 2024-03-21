// React imports
import { useState, useEffect } from "react";

// React-router-dom imports
import {  
    Outlet,
    useLocation
} from "react-router-dom";

// Components imports
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Header from '../components/Header';

// Import css
import '../assets/css/appLayout.css';

export default function AppLayout() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const location = useLocation()
  useEffect(() => {
    if(showSideMenu){
      setShowSideMenu(!showSideMenu);
    }
  }, [location]);

  return (
    <>
      <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <div 
        className="app-layout"
        style={showSideMenu ? {'opacity':'0.5'} : {}}     
      >
        <Header setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />
          <main>
            <Outlet />
          </main>
        <Navbar />
      </div>
    </>
  )
}
