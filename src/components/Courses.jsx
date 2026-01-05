import React from 'react'
import { Link } from 'react-router-dom'

const sampleCourses = [
  {
    title: 'Data Science — Python & ML',
    desc: 'Master Python programming, pandas, NumPy, scikit-learn, and deployment of ML models. Includes real-world case studies in predictive analytics.',
    duration: '12 Weeks',
    level: 'Beginner to Advanced'
  },
  {
    title: 'VLSI Design & Verification',
    desc: 'Comprehensive training in RTL design using Verilog/SystemVerilog, synthesis, STA, DFT, and UVM-based functional verification methodologies.',
    duration: '16 Weeks',
    level: 'Intermediate'
  },
  {
    title: 'Advanced Machine Learning & AI',
    desc: 'Deep learning with TensorFlow/PyTorch, CNN, RNN, NLP, computer vision, and MLOps. Build production-ready AI systems.',
    duration: '14 Weeks',
    level: 'Advanced'
  },
  {
    title: 'Physical Design (RTL to GDS)',
    desc: 'Complete ASIC design flow: floorplanning, placement, CTS, routing, DRC/LVS. Hands-on with industry-standard EDA tools.',
    duration: '12 Weeks',
    level: 'Advanced'
  },
  {
    title: 'Big Data & Analytics',
    desc: 'Apache Spark, Hadoop, data warehousing, SQL/NoSQL databases, and building scalable data pipelines for enterprise applications.',
    duration: '10 Weeks',
    level: 'Intermediate'
  },
  {
    title: 'Analog IC Design',
    desc: 'CMOS circuit design, op-amps, ADC/DAC, PLLs, and layout techniques. Learn SPICE simulation and design optimization.',
    duration: '14 Weeks',
    level: 'Advanced'
  },
  {
    title: 'Deep Learning for Computer Vision',
    desc: 'Image classification, object detection, segmentation, GANs. Work on real projects in autonomous systems and medical imaging.',
    duration: '12 Weeks',
    level: 'Advanced'
  },
  {
    title: 'FPGA Design & Prototyping',
    desc: 'HDL coding, FPGA architecture, timing closure, and rapid prototyping. Includes hands-on projects on Xilinx/Intel platforms.',
    duration: '10 Weeks',
    level: 'Intermediate'
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
                  <div className="mt-3">
                    <div className="d-flex justify-content-between small mb-2">
                      <span className="text-primary"><strong>Duration:</strong> {c.duration}</span>
                    </div>
                    <div className="small mb-3">
                      <span className="badge bg-secondary">{c.level}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to="/contact" className="btn btn-primary btn-sm w-100">Enroll Now</Link>
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
