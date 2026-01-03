import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header id="home" className="hero-section text-light">
      <div className="container py-6">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">Practical Training & Internships</h1>
            <p className="lead">Industry-aligned Data Science and VLSI Engineering courses with mentorship and real projects.</p>
            <div className="mt-4">
              <Link className="btn btn-primary btn-lg me-3" to="/courses">Explore Courses</Link>
              <Link className="btn btn-outline-light btn-lg" to="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-card p-4 shadow-sm bg-white text-dark">
              <h5 className="mb-2">Next Batch: Jan 2026</h5>
              <p className="small mb-0">Short, practical batches — limited seats. Apply to secure your spot.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
