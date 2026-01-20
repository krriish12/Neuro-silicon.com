import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const courseData = {
  'data-science': {
    title: 'Data Science & AI/ML',
    subtitle: 'Master Data Science and Artificial Intelligence',
    duration: '6 Months',
    rating: 4.8,
    students: 2500,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    summary: 'Duration: 6 months, designed to develop expertise in Data Science, Machine Learning, and AI technologies with hands-on projects.',
    targetAudience: [
      'Freshers (BE, B.Tech) looking to start a career in Data Science',
      'Professionals from IT/non-IT domains transitioning into Data Science',
      'Anyone interested in AI/ML technologies'
    ],
    coverage: [
      'Python programming fundamentals and advanced concepts',
      'Data analysis with pandas, NumPy, and visualization libraries',
      'Machine Learning algorithms and model building',
      'Deep Learning with TensorFlow and PyTorch',
      'Natural Language Processing and Computer Vision',
      'MLOps and model deployment strategies'
    ],
    assignments: [
      '20+ hands-on assignments curated by industry experts',
      'Real-world projects covering end-to-end ML pipelines',
      'Assignments guided by experienced trainers',
      'Progress evaluation based on project completion'
    ],
    outcome: 'Mastery in Data Science and AI/ML with enhanced readiness for industry roles and interviews',
    highlights: [
      '1-1 mentor support',
      'Mentor guidance support for assignments',
      'Multiple mock interviews',
      'Dedicated live support sessions over weekends',
      'Industry-grade projects',
      'Placement assistance'
    ]
  },
  'vlsi-functional-verification': {
    title: 'VLSI Functional Verification',
    subtitle: 'SystemVerilog and UVM-based Functional Verification',
    duration: '6 Months',
    rating: 4.9,
    students: 2000,
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&h=500&fit=crop',
    summary: 'Duration: 6 months, designed to develop expertise in SystemVerilog language constructs and UVM-based functional verification.',
    targetAudience: [
      'Freshers (BE, ME) and experienced engineers',
      'Professionals from non-VLSI domains transitioning into VLSI',
      'Engineers looking to specialize in functional verification'
    ],
    coverage: [
      'Over 200+ examples covering key SystemVerilog aspects',
      'Data types, operators, OOP (classes), arrays, inter-process synchronization',
      'Interfaces, programs, constraints, randomization, and assertions',
      'Code coverage, functional coverage, and DPI',
      'Focus on 90% of VLSI interview questions',
      'UVM (Universal Verification Methodology) framework',
      'Protocol verification (AXI, AHB, APB)',
      'Industry best practices and debugging techniques'
    ],
    assignments: [
      '15+ detailed assignments curated by industry experts',
      'Assignments cover all language constructs and are guided by trainers',
      'Real-world functional verification scenarios',
      'Progress evaluation based on assignment completion'
    ],
    outcome: 'Mastery in SystemVerilog language and UVM with enhanced readiness for VLSI industry roles and interviews',
    highlights: [
      '1-1 mentor support',
      'Mentor guidance support for assignments',
      'Multiple mock interviews',
      'Dedicated live support sessions over weekends',
      'Access to simulation tools',
      'Placement assistance'
    ]
  },
  'react-frontend': {
    title: 'React Frontend Development',
    subtitle: 'Build Modern Web Applications with React',
    duration: '6 Months',
    rating: 4.7,
    students: 1500,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    summary: 'Duration: 6 months, designed to develop expertise in modern frontend development with React, Redux, TypeScript, and production-ready web applications.',
    targetAudience: [
      'Freshers (BE, B.Tech, BCA, MCA) looking to start a career in Frontend Development',
      'Professionals from non-tech backgrounds transitioning into web development',
      'Backend developers wanting to learn frontend technologies',
      'Anyone interested in building modern web applications'
    ],
    coverage: [
      'HTML5, CSS3, and JavaScript ES6+ fundamentals',
      'React fundamentals: Components, Props, State, Hooks',
      'React Router for navigation and routing',
      'State management with Redux and Context API',
      'TypeScript for type-safe React applications',
      'REST API integration and Axios',
      'Modern CSS: Flexbox, Grid, Tailwind CSS, Material-UI',
      'Testing with Jest and React Testing Library',
      'Build tools: Vite, Webpack, npm/yarn',
      'Deployment and CI/CD pipelines',
      'Performance optimization and best practices'
    ],
    assignments: [
      '25+ hands-on projects and assignments curated by industry experts',
      'Build real-world applications: E-commerce, Dashboard, Social Media',
      'Assignments cover all React concepts and modern development practices',
      'Guided by experienced frontend developers',
      'Progress evaluation based on project completion'
    ],
    outcome: 'Mastery in React and modern frontend development with enhanced readiness for frontend developer roles and interviews',
    highlights: [
      '1-1 mentor support',
      'Mentor guidance support for assignments',
      'Multiple mock interviews',
      'Dedicated live support sessions over weekends',
      'Real-world project portfolio',
      'Placement assistance',
      'Industry-standard development tools access'
    ]
  }
}

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = courseData[courseId]
  const [activeTab, setActiveTab] = useState('about')

  if (!course) {
    return (
      <main className="page-content container my-5 text-center">
        <h1>Course Not Found</h1>
        <Link to="/courses" className="btn btn-primary mt-3">Back to Courses</Link>
      </main>
    )
  }

  return (
    <main className="page-content">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/courses" className="text-white">Courses</Link></li>
              <li className="breadcrumb-item active text-white">{course.title}</li>
            </ol>
          </nav>
          <h1 className="display-5 mb-3">{course.title}</h1>
          <p className="lead">{course.subtitle}</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="card mb-4">
              <img src={course.image} className="card-img-top" alt={course.title} style={{ height: '400px', objectFit: 'cover' }} />
            </div>

            <div className="mb-4">
              <h2 className="h4 mb-3">{course.title} with hands on projects</h2>
              <div className="d-flex align-items-center gap-4 mb-3">
                <div>
                  <i className="bi bi-calendar text-danger"></i>
                  <span className="ms-2">Course Duration: {course.duration}</span>
                </div>
                <div>
                  <i className="bi bi-star-fill text-warning"></i>
                  <span className="ms-2">{course.rating} Star (Rating)</span>
                </div>
                <div>
                  <i className="bi bi-people-fill text-danger"></i>
                  <span className="ms-2">{course.students}+ (Student Enrolled)</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Course</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => setActiveTab('curriculum')}>Course Curriculum</button>
              </li>
            </ul>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <div>
                <h3 className="h5 mb-3">Summary of {course.title} Training Course</h3>
                <p>{course.summary}</p>

                <h4 className="h6 mt-4 mb-2">Target Audience:</h4>
                <ul>
                  {course.targetAudience.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4 className="h6 mt-4 mb-2">Comprehensive Coverage:</h4>
                <ul>
                  {course.coverage.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4 className="h6 mt-4 mb-2">Practical Assignments:</h4>
                <ul>
                  {course.assignments.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h4 className="h6 mt-4 mb-2">Outcome:</h4>
                <p>{course.outcome}</p>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="h5 mb-3">Course Curriculum</h3>
                <p className="text-muted">Detailed curriculum will be provided upon enrollment. Contact us for complete syllabus.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card mb-4 sticky-top" style={{ top: '100px' }}>
              <div className="card-body text-center">
                <Link to="/contact" className="btn btn-danger btn-lg w-100 mb-3">ENROLL NOW</Link>

                <div className="bg-primary text-white p-3 rounded mb-3">
                  <h5 className="mb-3">Course Highlights</h5>
                  <ul className="list-unstyled text-start">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
