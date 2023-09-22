import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/navbar.css';

const Navbottom = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand font-cursive" to="#">
          Dribbble
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                For Designers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Hire Talent
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Inspiration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Advertising
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Support
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ms-auto">
            <span>
              <i className="p-2 bi bi-twitter"></i>
            </span>
            <span>
              <i className="p-2 bi bi-facebook"></i>
            </span>
            <span>
              <i className="p-2 bi bi-instagram"></i>
            </span>
            <span>
              <i className="p-2 bi bi-pinterest"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbottom;
