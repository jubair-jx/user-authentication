import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">FireBase Bhai</a>
        </div>

        {user ? (
          <div>
            <span>{user.email}</span>{" "}
            <button
              onClick={handleSignOut}
              className=" ml-10 btn btn-xs bg-red-500"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-xs bg-emerald-500">
            {" "}
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
