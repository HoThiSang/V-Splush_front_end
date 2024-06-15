import { Link } from "react-router-dom"

const ProfileLayout=({ children, image, username})=>{

    return (
      <div className="container-fluid profile-container">
      <div className="row">
        <div className="col-md-2 sidebar-user">
          <div className="side-menu text-center">
            <div className="user-icon">
              <img
                src={image}
                alt="user-avatar"
                className="d-block rounded-circle mx-auto"
                height="100px"
                width="100px"
              />
            </div>
            <p className="mt-2">{username}</p>
          </div>
          <div className="sidebar-module-container">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/profile-user">Personal Info</Link>
              </li>
              <li className="list-group-item">
                <Link to="/order-history">Order List</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10 main-content">{children}</div>
        </div>
        </div>
    )
}

export default ProfileLayout