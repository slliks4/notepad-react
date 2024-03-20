// Icon imports
import { RiMenu2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

// React Router Dom imports
import { Form } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="app-header component">
        <button className="menu-btn">
            <RiMenu2Line className="app-icon" />
        </button>
        <Form method="post">
            <input
              type="text"
              name="search"
              placeholder="Search notes..."
              aria-label="search"
            />
        </Form>
        <NavLink to={'authentication'} className={'app-link'}>
            <RxAvatar className="app-icon" />
        </NavLink>
    </div>
  )
}
