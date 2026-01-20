import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="hero-container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-left">
            <h1 className="hero-title">Master <span className="accent">Data Science</span> & <span className="accent">VLSI Engineering</span> for Tomorrow's Tech Industry</h1>
            <p className="hero-lead">Transform from learner to industry professional with hands-on training in AI/ML, semiconductor design, and advanced chip verification. Build real-world projects with expert mentorship.</p>

            <div className="hero-ctas">
              <Link className="btn btn-cta btn-lg" to="/courses">Explore Courses</Link>
              <Link className="btn btn-outline-ghost btn-lg" to="/contact">Talk to Advisor</Link>
            </div>

            <div className="d-flex gap-4 mt-4 small text-light stats-row">
              <div><strong>Placements</strong><div className="small text-muted">4500+</div></div>
              <div><strong>Students Trained</strong><div className="small text-muted">10000+</div></div>
              <div><strong>Industry Projects</strong><div className="small text-muted">500+</div></div>
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-visual">
              <div className="visual-card card-a" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop"
                  alt="AI and Machine Learning"
                  className="visual-image"
                />
              </div>
              <div className="visual-card card-b" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&h=350&fit=crop"
                  alt="Semiconductor Technology"
                  className="visual-image"
                />
              </div>
              <div className="visual-card phone-mock" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=160&h=320&fit=crop"
                  alt="Tech Innovation"
                  className="visual-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
