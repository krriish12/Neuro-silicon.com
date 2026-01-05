import React from 'react'

export default function CareerPaths() {
  const careers = {
    dataScience: [
      { role: 'Data Scientist', salary: '$95K - $150K', companies: 'Google, Amazon, Microsoft' },
      { role: 'Machine Learning Engineer', salary: '$100K - $160K', companies: 'Meta, Apple, Tesla' },
      { role: 'AI Research Scientist', salary: '$120K - $180K', companies: 'OpenAI, DeepMind, NVIDIA' },
      { role: 'Data Analyst', salary: '$70K - $110K', companies: 'Netflix, Uber, Airbnb' },
      { role: 'MLOps Engineer', salary: '$90K - $140K', companies: 'AWS, Azure, GCP' }
    ],
    vlsi: [
      { role: 'VLSI Design Engineer', salary: '$85K - $140K', companies: 'Intel, AMD, NVIDIA' },
      { role: 'Verification Engineer', salary: '$90K - $145K', companies: 'Qualcomm, Broadcom, Marvell' },
      { role: 'Physical Design Engineer', salary: '$95K - $150K', companies: 'Apple, Samsung, TSMC' },
      { role: 'FPGA Engineer', salary: '$80K - $130K', companies: 'Xilinx, Intel, Microchip' },
      { role: 'Analog IC Designer', salary: '$100K - $160K', companies: 'Texas Instruments, Analog Devices' }
    ]
  }

  const applications = [
    {
      domain: 'Data Science Applications',
      areas: [
        'Healthcare: Predictive diagnostics, drug discovery, medical imaging analysis',
        'Finance: Fraud detection, algorithmic trading, risk assessment',
        'E-commerce: Recommendation systems, demand forecasting, customer analytics',
        'Autonomous Vehicles: Computer vision, sensor fusion, path planning',
        'Manufacturing: Predictive maintenance, quality control, supply chain optimization'
      ]
    },
    {
      domain: 'VLSI Applications',
      areas: [
        'Consumer Electronics: Smartphones, laptops, IoT devices, wearables',
        'Automotive: Advanced driver assistance, infotainment systems, electric vehicles',
        'AI Hardware: Neural processing units, AI accelerators, edge computing chips',
        'Telecommunications: 5G/6G infrastructure, networking equipment, RF systems',
        'Space & Defense: Satellites, avionics, radiation-hardened electronics'
      ]
    }
  ]

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Industry Applications */}
        <div className="mb-5">
          <h2 className="text-center mb-4">Industry Applications</h2>
          <p className="text-center text-muted mb-5">Our training prepares you for cutting-edge applications across multiple industries</p>

          <div className="row g-4">
            {applications.map((app, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h5 card-title text-primary mb-3">{app.domain}</h3>
                    <ul className="small">
                      {app.areas.map((area, i) => (
                        <li key={i} className="mb-2">{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-5">
          <h2 className="text-center mb-4">Career Opportunities</h2>
          <p className="text-center text-muted mb-5">Launch your career in high-demand tech roles with competitive salaries</p>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-header bg-primary text-white">
                  <h3 className="h5 mb-0">Data Science Career Paths</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-sm mb-0">
                      <thead>
                        <tr>
                          <th className="small">Role</th>
                          <th className="small">Salary Range</th>
                          <th className="small">Top Companies</th>
                        </tr>
                      </thead>
                      <tbody>
                        {careers.dataScience.map((career, idx) => (
                          <tr key={idx}>
                            <td className="small"><strong>{career.role}</strong></td>
                            <td className="small text-success">{career.salary}</td>
                            <td className="small text-muted">{career.companies}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-header bg-success text-white">
                  <h3 className="h5 mb-0">VLSI Career Paths</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-sm mb-0">
                      <thead>
                        <tr>
                          <th className="small">Role</th>
                          <th className="small">Salary Range</th>
                          <th className="small">Top Companies</th>
                        </tr>
                      </thead>
                      <tbody>
                        {careers.vlsi.map((career, idx) => (
                          <tr key={idx}>
                            <td className="small"><strong>{career.role}</strong></td>
                            <td className="small text-success">{career.salary}</td>
                            <td className="small text-muted">{career.companies}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center bg-white p-4 rounded">
          <h2 className="h4 mb-3">Our Alumni Success</h2>
          <p className="text-muted mb-4">Join thousands of successful professionals who started their journey with us</p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="border rounded p-3">
                <h3 className="h2 text-primary mb-1">850+</h3>
                <p className="small text-muted mb-0">Alumni at FAANG Companies</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-3">
                <h3 className="h2 text-success mb-1">$105K</h3>
                <p className="small text-muted mb-0">Average Starting Salary</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-3">
                <h3 className="h2 text-info mb-1">92%</h3>
                <p className="small text-muted mb-0">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
