import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="/logo.png"
            alt="NeuroSilicon logo"
            style={{ height: 44 }}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }}
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/internships">Internships</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item ms-3 d-none d-lg-block">
              <Link className="btn btn-outline-light btn-sm" to="/contact">Enroll Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
