import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="fw-bold">Neuro-silicon</h6>
            <p className="small text-muted">Practical training and internships for Data Science & VLSI Engineering.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small">Email: info@neuro-silicon.com</p>
            <p className="mb-0 small">© {new Date().getFullYear()} Neuro-silicon</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
