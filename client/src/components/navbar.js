import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import collapse from "bootstrap/js/src/collapse";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-md-transparent px-sm-5 px-3 position-fixed w-100 front-z-index navbar-expand-sm">
      <a className="navbar-brand" href="/">
        MyCulinae
      </a>
      <button
        className="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link disabled text-light" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-light" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-light" href="#">
              Partners
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-light" href="#">
              Bargains
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-light" href="#">
              Chefs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
