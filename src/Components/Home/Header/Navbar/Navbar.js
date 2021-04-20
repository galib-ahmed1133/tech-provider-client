import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import './Navbar.css'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          TECH PROVIDER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item ml-3  ">
              <Link className="nav-link nav-list" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item ml-3  ">
              <a className="nav-link nav-list" href="#">
                Company
              </a>
            </li>
            <li className="nav-item ml-3  ">
              <a
                className="nav-link nav-list"
                href="#"
              >
                IT Solutions
              </a>
            </li>
            <li className="nav-item ml-3  ">
              <a
                className="nav-link nav-list"
                href="#"
              >
                News & Media
              </a>
            </li>
            <li className="nav-item ml-3  ">
              <Link
                className="nav-link nav-list"
                to='dashboard'
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item ml-3  ">
              <a
                className="nav-link nav-list"
                href="#"
              >
                Contacts
              </a>
            </li>
            <li className="nav-item ml-3 mr-3  ">
            {loggedInUser.email ? <Link className="link-style-name" to="/dashboard">{loggedInUser.displayName}</Link> : <Link className="link-style" to="/login"><button className="btn login-btn btn-primary">Login</button></Link>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
