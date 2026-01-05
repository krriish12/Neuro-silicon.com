import React from 'react'
import { Link } from 'react-router-dom'

export default function InternshipsPage(){
  const internshipPrograms = [
    {
      title: 'Data Science Internship',
      duration: '3-6 Months',
      focus: ['Machine Learning Model Development', 'Data Analysis & Visualization', 'Real-world Dataset Projects', 'ML Pipeline & Deployment'],
      outcomes: 'Build production-ready ML models, create comprehensive data analysis reports, and deploy models to cloud platforms.'
    },
    {
      title: 'VLSI Design Internship',
      duration: '4-6 Months',
      focus: ['RTL Design using Verilog/SystemVerilog', 'Design Verification & Testing', 'Synthesis & Timing Analysis', 'FPGA Implementation'],
      outcomes: 'Complete end-to-end chip design projects, create verification test benches, and optimize designs for performance.'
    },
    {
      title: 'AI/ML Research Internship',
      duration: '6 Months',
      focus: ['Deep Learning Research', 'Computer Vision or NLP Projects', 'Algorithm Development', 'Research Paper Writing'],
      outcomes: 'Develop novel AI solutions, contribute to research publications, and work on cutting-edge AI problems.'
    },
    {
      title: 'Physical Design Internship',
      duration: '4-6 Months',
      focus: ['Floor Planning & Placement', 'Clock Tree Synthesis', 'Routing & Optimization', 'Sign-off Analysis'],
      outcomes: 'Complete RTL-to-GDSII implementation, optimize chip performance, and meet industry design specifications.'
    }
  ]

  return (
    <main className="page-content container my-5">
      <h1 className="mb-4">Internship Programs</h1>

      <section className="mb-5">
        <div className="alert alert-info">
          <h2 className="h5 mb-2">Industry-Focused Internships in Data Science & VLSI</h2>
          <p className="mb-0">Our internship programs provide hands-on experience working on real-world projects under expert mentorship. Gain practical skills that make you job-ready and build a professional portfolio.</p>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Available Internship Programs</h2>
        <div className="row g-4">
          {internshipPrograms.map((program, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 card-title">{program.title}</h3>
                  <p className="text-muted small mb-3">Duration: {program.duration}</p>

                  <h4 className="h6 mb-2">Focus Areas:</h4>
                  <ul className="mb-3">
                    {program.focus.map((item, i) => (
                      <li key={i} className="small">{item}</li>
                    ))}
                  </ul>

                  <h4 className="h6 mb-2">Learning Outcomes:</h4>
                  <p className="small text-muted">{program.outcomes}</p>

                  <Link to="/contact" className="btn btn-primary btn-sm mt-2">Apply Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Internship Benefits</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Real Industry Projects</h3>
                <p className="card-text small">Work on actual industry problems, not just theoretical exercises. Build projects that you can showcase to employers.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Expert Mentorship</h3>
                <p className="card-text small">Get weekly one-on-one guidance from industry professionals. Receive code reviews, technical feedback, and career advice.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Certificate & LOR</h3>
                <p className="card-text small">Earn an industry-recognized certificate upon completion. Top performers receive letters of recommendation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">How It Works</h2>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <div className="display-6 text-primary mb-2">1</div>
                <h3 className="h6">Application</h3>
                <p className="small mb-0">Submit your application with resume and statement of interest</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <div className="display-6 text-primary mb-2">2</div>
                <h3 className="h6">Selection</h3>
                <p className="small mb-0">Technical screening and interview with domain experts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <div className="display-6 text-primary mb-2">3</div>
                <h3 className="h6">Project Work</h3>
                <p className="small mb-0">Work on assigned projects with weekly mentorship and reviews</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <div className="display-6 text-primary mb-2">4</div>
                <h3 className="h6">Completion</h3>
                <p className="small mb-0">Final presentation, evaluation, and certificate issuance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 bg-primary text-white p-4 rounded">
        <h2 className="h4 mb-3">Eligibility Criteria</h2>
        <ul className="mb-3">
          <li>Students in final year of engineering or recent graduates</li>
          <li>Basic programming knowledge (Python for Data Science, Verilog/C for VLSI)</li>
          <li>Strong motivation to learn and work on challenging projects</li>
          <li>Minimum 15-20 hours per week commitment</li>
        </ul>
        <Link to="/contact" className="btn btn-light">Apply for Internship</Link>
      </section>
    </main>
  )
}
