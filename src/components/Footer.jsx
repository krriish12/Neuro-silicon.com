import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h6 className="fw-bold">Neuro-silicon</h6>
            <p className="small text-muted">Practical training and internships for Data Science & VLSI Engineering.</p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-unstyled small">
              <li><a className="footer-link" href="/courses">Courses</a></li>
              <li><a className="footer-link" href="/internships">Internships</a></li>
              <li><a className="footer-link" href="/about">About</a></li>
              <li><a className="footer-link" href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 text-md-end">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-0 small">Email: info@neuro-silicon.com</p>
            <p className="mb-0 small">© {new Date().getFullYear()} Neuro-silicon</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
