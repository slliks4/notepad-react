// React Router Dom imports
import { NavLink } from "react-router-dom"

// Icon
import { GoHomeFill } from "react-icons/go";
import { IoMdAddCircle } from "react-icons/io";
import { RiFunctionFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav-bar component">
      <NavLink to={'/'} className="app-link">
        <GoHomeFill className="app-icon"/>
        <span>home</span>
      </NavLink>
      <NavLink to={'hub'} className="app-link">
        <RiFunctionFill className="app-icon" />
        <span>hub</span>
      </NavLink>
      <NavLink to={'add'} className="app-link">
        <IoMdAddCircle className="app-icon" />
        <span>add</span>
      </NavLink>
      <NavLink to={'search'} className="app-link">
        <FaBell className="app-icon" />
        <span>inbox</span>
      </NavLink>
      <NavLink to={'settings'} className="app-link">
        <IoSettingsSharp className="app-icon" />
        <span>settings</span>
      </NavLink>
    </div>
  )
}
