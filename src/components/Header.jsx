import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg main-nav fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <Logo height={50} />
          <div className="d-flex flex-column" style={{ lineHeight: '1.2' }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#0d3b66',
              letterSpacing: '2px',
              fontFamily: 'Arial, sans-serif'
            }}>
              NEURO SILICON
            </span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#5fad56',
              letterSpacing: '1px',
              marginTop: '-2px'
            }}>
              BUILDING TOMORROW
            </span>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/internships">Internships</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item ms-3 d-none d-lg-block">
              <Link className="btn btn-cta btn-sm" to="/contact">Enroll Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
