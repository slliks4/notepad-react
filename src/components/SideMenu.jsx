// react router dom imports
import { NavLink } from "react-router-dom";

// Icon imports
import { MdLabel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdPublic } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function SideMenu(props) {
  const { setShowSideMenu, showSideMenu } = props;

  return (
    <div className={`side-nav ${showSideMenu?'show':''}`}>
      <div>
        <div>
          <h1>slliks note</h1>
          <ul className="link-container">
            <li>
              <NavLink to={'/'} className={'app-link'}>
              <FaFolderOpen className="app-icon" />
              <span> all notes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'private'} className={'app-link'}>
              <RiGitRepositoryPrivateFill className={'app-icon'} />
              <span> private </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'public'} className={'app-link'}>
              <MdPublic className={'app-icon'} />
              <span> public </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="label-top">
            <span>Labels</span>
            <NavLink to={'note-labels'} className={'app-link'}>
              <FaEdit className="app-icon" />
            </NavLink>
          </div>
          <div>
            <ul className="link-container label-container">
              <li>
                <NavLink to={'note-label/poem'} className={'app-link'}>
                  <MdLabel className="app-icon"/>
                  <span> poem </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'note-label/schools'} className={'app-link'}>
                  <MdLabel className="app-icon"/>
                  <span> school </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'note-labels'} className={'app-link'}>
                  <IoMdAdd className="app-icon"/>
                  <span>Create new label</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ul className="link-container">
          <li>
            <NavLink to={'archive'} className={'app-link'}>
              <IoMdArchive className="app-icon"/>
              <span>archive</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'trash'} className={'app-link'}>
              <FaTrashAlt className="app-icon" />
              <span>deleted</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'synced'} className={'app-link'}>
              <FaSync className={'app-icon'} />
              <span>synced</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div onClick={()=>setShowSideMenu(!showSideMenu)} />
    </div>
  )
}
