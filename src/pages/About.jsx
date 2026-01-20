import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <main className="page-content">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container text-white position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 fw-bold mb-4" style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.2)',
                animation: 'fadeInUp 0.8s ease-out'
              }}>
                Building Tomorrow's Tech Leaders
              </h1>
              <p className="lead fs-4 mb-4 opacity-90" style={{
                animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
              }}>
                Bridging the gap between academia and industry through cutting-edge training in Data Science & VLSI Engineering
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap" style={{
                animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
              }}>
                <Link to="/courses" className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                  Explore Courses
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-4">
                <div className="display-4 fw-bold text-primary mb-2">500+</div>
                <div className="text-muted fw-medium">Students Trained</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <div className="display-4 fw-bold text-primary mb-2">50+</div>
                <div className="text-muted fw-medium">Industry Projects</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <div className="display-4 fw-bold text-primary mb-2">95%</div>
                <div className="text-muted fw-medium">Satisfaction Rate</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4">
                <div className="display-4 fw-bold text-primary mb-2">10+</div>
                <div className="text-muted fw-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)'
                }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Our Mission
              </div>
              <h2 className="display-5 fw-bold mb-4">Transforming Learners into Industry Professionals</h2>
              <p className="lead text-muted mb-4">
                We bridge the gap between academic learning and industry requirements through hands-on, project-based training in semiconductor design and artificial intelligence.
              </p>
              <p className="text-muted">
                Our mission is to create industry-ready professionals who can contribute from day one in cutting-edge technology companies. We combine theoretical knowledge with practical skills to ensure our students are prepared for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <div className="badge bg-light bg-opacity-10 text-white px-3 py-2 rounded-pill mb-3">
              Our Expertise
            </div>
            <h2 className="display-5 fw-bold">What We Teach</h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Industry-relevant curriculum designed by experts
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card bg-white bg-opacity-10 border-0 h-100 backdrop-blur">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-25 rounded-3 p-3 me-3">
                      <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                    </div>
                    <h3 className="h4 mb-0">Data Science & AI/ML</h3>
                  </div>
                  <ul className="list-unstyled mb-0 ms-2">
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>Machine Learning & Deep Learning</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>Computer Vision & Image Processing</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>Big Data Analytics & Engineering</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>MLOps & Model Deployment</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">✓</span>
                      <span>Statistical Analysis & Data Visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card bg-white bg-opacity-10 border-0 h-100 backdrop-blur">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-success bg-opacity-25 rounded-3 p-3 me-3">
                      <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                      </svg>
                    </div>
                    <h3 className="h4 mb-0">VLSI Engineering</h3>
                  </div>
                  <ul className="list-unstyled mb-0 ms-2">
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>RTL Design & Verification (Verilog/SystemVerilog)</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>Physical Design (RTL to GDSII)</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>Analog & Mixed-Signal IC Design</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>FPGA Design & Prototyping</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>Static Timing Analysis & DFT</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-success me-2">✓</span>
                      <span>UVM-based Functional Verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
              Why Choose Us
            </div>
            <h2 className="display-5 fw-bold">What Sets Us Apart</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift" style={{ transition: 'transform 0.3s ease' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <svg width="40" height="40" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                  </div>
                  <h3 className="h5 mb-3">Industry Expert Instructors</h3>
                  <p className="text-muted mb-0">Learn from professionals with 10+ years of experience in top semiconductor and tech companies including Intel, Qualcomm, Google, and Amazon.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift" style={{ transition: 'transform 0.3s ease' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <svg width="40" height="40" fill="currentColor" className="text-success" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                    </svg>
                  </div>
                  <h3 className="h5 mb-3">Real-World Projects</h3>
                  <p className="text-muted mb-0">Work on industry-grade projects using professional tools and methodologies. Build a portfolio that showcases your skills to employers.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-lift" style={{ transition: 'transform 0.3s ease' }}>
                <div className="card-body p-4 text-center">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <svg width="40" height="40" fill="currentColor" className="text-warning" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg>
                  </div>
                  <h3 className="h5 mb-3">Career Support</h3>
                  <p className="text-muted mb-0">Resume building, interview preparation, and placement assistance. Our alumni work at leading tech companies worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Our Approach
              </div>
              <h2 className="display-5 fw-bold mb-4">Learning by Doing</h2>
              <p className="lead text-muted mb-4">
                Every course is structured around practical application and real-world experience.
              </p>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Hands-on Labs</h4>
                    <p className="text-muted mb-0 small">Practical exercises using industry-standard tools and software</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Live Projects</h4>
                    <p className="text-muted mb-0 small">Real-world problems that mirror actual industry challenges</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Expert Mentorship</h4>
                    <p className="text-muted mb-0 small">One-on-one guidance from experienced professionals</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Continuous Assessment</h4>
                    <p className="text-muted mb-0 small">Regular evaluations to track progress and ensure mastery</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 mb-1">Industry Connections</h4>
                    <p className="text-muted mb-0 small">Guest lectures, workshops, and networking opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                  alt="Hands-on learning"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="card border-0 shadow-lg overflow-hidden" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}>
            <div className="card-body p-5 text-center text-white">
              <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
              <p className="lead mb-4 opacity-90">Join hundreds of students who have transformed their careers with us</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/courses" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                  View All Courses
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
