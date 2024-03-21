// React import
import React, { useEffect, useState } from "react";

// Icon imports
import { RiMenu2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

// React Router Dom imports
import { Form, NavLink, useLocation } from 'react-router-dom';

function Header(props) {
  const { setShowSideMenu, showSideMenu } = props;
  const [ShowSearchBar, setSearchBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSearchBar(location.pathname === '/' || location.pathname === '/hub');
  }, [location]); 


  return (
    <div className="app-header component">
        <button 
          className="menu-btn"
          type="button"
          aria-label="Menu"
          onClick={() => setShowSideMenu(!showSideMenu)}
        >
            <RiMenu2Line className="app-icon" />
        </button>
        {
          ShowSearchBar && (
            <Form method="post">
                <input
                  type="text"
                  name="search"
                  placeholder="Search notes..."
                  aria-label="search"
                />
            </Form>
          )
        }
        <NavLink to={'authentication'} className={'app-link'}>
            <RxAvatar className="app-icon" />
        </NavLink>
    </div>
  )
}

export default React.memo(Header);