// React Router Dom imports
import { NavLink } from "react-router-dom";

// Icon imports
import { MdLabel } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

// Import styles
import "../assets/css/Notes.css"

// React imports
import { useState } from "react";

export default function Notes() {
  const [isFollowing, setIsFollowing] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [label, setLabel] = useState(true);
  const [profile_picture, setProfilePicture] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const note = {
    slug: "notes",
  }
  return (
    <div className="note-container">
      <div className="note">
        <div className="note-dir">
          <div>
            {
              profile_picture?(
                <img src={profile_picture} alt="profile_picture" />
              ):(
                <RxAvatar className="app-icon" />
              )
            }
            <span>slliks4</span>
            <span className="time-stamp">4d</span>
          </div>
          {
            !isUser?(
              label && (
                <span className="label">
                  <MdLabel className="app-icon" />
                  <span>
                    label
                  </span>
                </span> 
              )
            ):(
              <button>
                {isFollowing? "Unfollow" : "Follow"}
              </button>
            )
          }
        </div>
        <NavLink to={`${note.slug}`} className={'app-link note-link'}>
          <h2>
            This is the title lmao
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio natus sed ipsam sequi deserunt dolorem, voluptate cum qui quod unde recusandae corporis quae tempore architecto rerum mollitia ipsa ipsum.
          </p>
        </NavLink>
        {
          isHomePage && (
            <div className="note-spec">
                <div>
                  <span>
                    {/* <AiFillDislike className="app-icon" /> */}
                    <AiFillLike className="app-icon" />
                    202
                  </span>
                  <span>
                    <FaCommentAlt className="app-icon" />
                    5 comments
                  </span>
                </div>
                <span>
                  <FaShare className="app-icon" />
                  92.7k
                </span>
            </div>
          )
        }
      </div>
    </div>
  )
}
