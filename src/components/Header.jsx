import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaMicrochip } from "react-icons/fa6"

export default function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  const closeMenu = () => {
    const navCollapse = document.getElementById('nav');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
      {/* Announcement Banner */}
      {showAnnouncement && (
        <div className="announcement-banner">
          <div className="announcement-content">
            <div className="announcement-scroll">
              <span className="announcement-text">
                📢 Data Science Awareness Webinar - January 30th, 31st & February 1st | Limited Seats Available!
                <span className="announcement-highlight">Register Now!</span>
                📞 Contact: +91 9000852209
              </span>
              <span className="announcement-text">
                📢 Data Science Awareness Webinar - January 30th, 31st & February 1st | Limited Seats Available!
                <span className="announcement-highlight">Register Now!</span>
                📞 Contact: +91 9000852209
              </span>
            </div>
          </div>
          <button
            className="announcement-close"
            onClick={() => setShowAnnouncement(false)}
            aria-label="Close announcement"
          >
            ×
          </button>
        </div>
      )}

      <nav className="navbar navbar-expand-lg main-nav fixed-top" style={{ top: showAnnouncement ? '40px' : '0' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>

          {/* Logo Icon */}
          <FaMicrochip size={30} color="#0d3b66" />

          {/* Brand Text */}
          <div className="d-flex flex-column" style={{ lineHeight: '1.2' }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#0d3b66',
              letterSpacing: '2px',
              fontFamily: 'Arial, sans-serif'
            }}>
              NEUROSILICON
            </span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#5fad56',
              letterSpacing: '1px',
              marginTop: '-2px',
              marginLeft : '24px',
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
            <li className="nav-item"><NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/courses" onClick={closeMenu}>Courses</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/internships" onClick={closeMenu}>Internships</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            <li className="nav-item ms-3 d-none d-lg-block">
              <Link className="btn btn-cta btn-sm" to="/contact" onClick={closeMenu}>Enroll Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
