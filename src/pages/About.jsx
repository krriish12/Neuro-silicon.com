import React from 'react'

export default function About(){
  return (
    <main className="page-content container my-5">
      <h1 className="mb-4">About Neuro-Silicon</h1>

      <section className="mb-5">
        <h2 className="h3 mb-3">Bridging Academia and Industry</h2>
        <p>Neuro-Silicon is a premier training institute specializing in <strong>Data Science</strong> and <strong>VLSI Engineering</strong> education. We bridge the gap between academic learning and industry requirements by providing hands-on, project-based training that prepares students for real-world challenges in semiconductor design and artificial intelligence.</p>
        <p>Our mission is to create industry-ready professionals who can contribute from day one in cutting-edge technology companies.</p>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Our Expertise</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">Data Science & AI/ML</h3>
                <ul className="mb-0">
                  <li>Machine Learning & Deep Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision & Image Processing</li>
                  <li>Big Data Analytics & Engineering</li>
                  <li>MLOps & Model Deployment</li>
                  <li>Statistical Analysis & Data Visualization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">VLSI Engineering</h3>
                <ul className="mb-0">
                  <li>RTL Design & Verification (Verilog/SystemVerilog)</li>
                  <li>Physical Design (RTL to GDSII)</li>
                  <li>Analog & Mixed-Signal IC Design</li>
                  <li>FPGA Design & Prototyping</li>
                  <li>Static Timing Analysis & DFT</li>
                  <li>UVM-based Functional Verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Why Choose Us?</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Industry Expert Instructors</h3>
                <p className="card-text small mb-0">Learn from professionals with 10+ years of experience in top semiconductor and tech companies including Intel, Qualcomm, Google, and Amazon.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Real-World Projects</h3>
                <p className="card-text small mb-0">Work on industry-grade projects using professional tools and methodologies. Build a portfolio that showcases your skills to employers.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h6 card-title">Career Support</h3>
                <p className="card-text small mb-0">Resume building, interview preparation, and placement assistance. Our alumni work at leading tech companies worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Our Approach</h2>
        <p>We believe in <strong>learning by doing</strong>. Every course is structured around:</p>
        <ul>
          <li><strong>Hands-on Labs:</strong> Practical exercises using industry-standard tools and software</li>
          <li><strong>Live Projects:</strong> Real-world problems that mirror actual industry challenges</li>
          <li><strong>Mentorship:</strong> One-on-one guidance from experienced professionals</li>
          <li><strong>Continuous Assessment:</strong> Regular evaluations to track progress and ensure mastery</li>
          <li><strong>Industry Connections:</strong> Guest lectures, workshops, and networking opportunities</li>
        </ul>
      </section>

      <section className="mb-5 bg-light p-4 rounded">
        <h2 className="h3 mb-3">Our Track Record</h2>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="display-6 text-primary">10,000+</div>
            <div className="text-muted">Students Trained</div>
          </div>
          <div className="col-md-3">
            <div className="display-6 text-primary">4,500+</div>
            <div className="text-muted">Successful Placements</div>
          </div>
          <div className="col-md-3">
            <div className="display-6 text-primary">500+</div>
            <div className="text-muted">Industry Projects</div>
          </div>
          <div className="col-md-3">
            <div className="display-6 text-primary">95%</div>
            <div className="text-muted">Satisfaction Rate</div>
          </div>
        </div>
      </section>
    </main>
  )
}
