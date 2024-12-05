import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setIsLoggedIn(true);
      setUserRole(user.role); // Retrieve user role
    }
  }, [localStorage.getItem("token")]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Schedly
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/seminars">Seminars</Link>
          </li>
          {isLoggedIn ? (
            <>
              {/* Conditional rendering for logged-in users */}
              {userRole === "admin" && (
                <li>
                  <Link to="/admin-dashboard">Admin Dashboard</Link>
                </li>
              )}
              {userRole === "user" && (
                <li>
                  <Link to="/user-dashboard">User Dashboard</Link>
                </li>
              )}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Guest links */}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
