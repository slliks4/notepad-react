// React Router Dom imports
import { NavLink } from "react-router-dom";

// Icon imports
import { MdLabel } from "react-icons/md";

export default function Notes() {
  return (
    <div className="note-container">
      <NavLink to={'/'}>
        <span className="label">
          <MdLabel className="app-icon" />
          Poems
        </span>
        <h2>title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio natus sed ipsam sequi deserunt dolorem, voluptate cum qui quod unde recusandae corporis quae tempore architecto rerum mollitia ipsa ipsum.
        </p>
        <span>
          
        </span>
      </NavLink>
    </div>
  )
}
