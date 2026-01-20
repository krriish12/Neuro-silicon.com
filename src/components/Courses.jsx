import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'data-science',
    title: 'Data Science & AI/ML',
    instructor: 'Industry Experts',
    rating: 4.8,
    students: 2500,
    duration: '6 Months',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Master Python, Machine Learning, Deep Learning, and AI technologies to become an industry-ready data scientist.'
  },
  {
    id: 'vlsi-functional-verification',
    title: 'VLSI Functional Verification',
    instructor: 'Industry Experts',
    rating: 4.9,
    students: 2000,
    duration: '6 Months',
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=600&h=400&fit=crop',
    description: 'Learn SystemVerilog, UVM, and advanced functional verification methodologies to become a skilled verification engineer.'
  },
  {
    id: 'react-frontend',
    title: 'React Frontend Development',
    instructor: 'Industry Experts',
    rating: 4.7,
    students: 1500,
    duration: '6 Months',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    description: 'Master modern frontend development with React, Redux, TypeScript, and build production-ready web applications.'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Popular Courses</h2>

        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-12 col-md-6 col-lg-4" key={course.id}>
              <div className="card h-100 shadow-sm course-card">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="text-muted small mb-2">By {course.instructor}</p>

                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      {'★'.repeat(Math.floor(course.rating))}
                      {course.rating % 1 >= 0.5 ? '½' : ''}
                    </span>
                    <span className="small text-muted">{course.rating} ({course.students}+ students)</span>
                  </div>

                  <p className="card-text small mb-3">{course.description}</p>

                  <div className="small text-muted mb-3">
                    <i className="bi bi-clock me-1"></i>
                    Duration: {course.duration}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <Link
                      to={`/course/${course.id}`}
                      className="btn btn-outline-primary flex-grow-1"
                    >
                      More Details
                    </Link>
                    <Link
                      to="/contact"
                      className="btn btn-primary flex-grow-1"
                    >
                      Enroll Now
                    </Link>
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
