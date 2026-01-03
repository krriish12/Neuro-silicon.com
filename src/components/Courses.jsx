import React from 'react'
import { Link } from 'react-router-dom'

const sampleCourses = [
  {
    title: 'Data Science — Python & ML',
    desc: 'Hands-on projects covering Python, pandas, scikit-learn, and model deployment.'
  },
  {
    title: 'VLSI Design & Verification',
    desc: 'Practical RTL design, synthesis, static timing, and UVM-based verification.'
  },
  {
    title: 'Advanced Machine Learning',
    desc: 'Deep learning workflows, transfer learning and deployment pipelines.'
  },
  {
    title: 'RTL to GDS Flow (Intro)',
    desc: 'Overview of the digital design flow from RTL through physical implementation.'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Popular Courses</h2>
          <a href="#contact" className="btn btn-outline-primary">Request Syllabus</a>
        </div>

        <div className="row g-4">
          {sampleCourses.map((c, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className="card course-card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text small text-muted">{c.desc}</p>
                  <div className="mt-auto">
                    <Link to="/contact" className="btn btn-primary btn-sm">Enroll</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
