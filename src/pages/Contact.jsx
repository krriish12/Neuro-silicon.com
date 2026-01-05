import React from 'react'

export default function Contact(){
  return (
    <main className="page-content container my-5">
      <h1 className="mb-4">Get in Touch</h1>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="mb-4">
            <h2 className="h4 mb-3">Contact Information</h2>
            <p className="mb-4">Ready to start your journey in Data Science or VLSI Engineering? Reach out to us for course details, enrollment, or any questions.</p>

            <div className="mb-3">
              <h3 className="h6 text-primary">Email</h3>
              <p><a href="mailto:info@neuro-silicon.com">info@neuro-silicon.com</a></p>
            </div>

            <div className="mb-3">
              <h3 className="h6 text-primary">Phone</h3>
              <p>+91-XXXX-XXXXXX (Mon-Sat, 9 AM - 6 PM IST)</p>
            </div>

            <div className="mb-4">
              <h3 className="h6 text-primary">Office Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
            </div>

            <div className="card bg-light">
              <div className="card-body">
                <h3 className="h6 mb-3">What to Expect</h3>
                <ul className="small mb-0">
                  <li>Response within 24 hours</li>
                  <li>Free course counseling session</li>
                  <li>Detailed syllabus and course structure</li>
                  <li>Information on payment plans and scholarships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="h5 mb-4">Send us a Message</h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name *</label>
                  <input className="form-control" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" placeholder="you@example.com" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="+91-XXXXXXXXXX" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Interest Area *</label>
                  <select className="form-select" required>
                    <option value="">Select...</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="vlsi">VLSI Design & Verification</option>
                    <option value="ai">Advanced AI/ML</option>
                    <option value="physical-design">Physical Design</option>
                    <option value="internship">Internship Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Message *</label>
                  <textarea className="form-control" rows="5" placeholder="Tell us about your background and what you'd like to learn..." required />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  <p className="small text-muted mt-2 mb-0">* Required fields</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="h5 mb-3">Frequently Asked Questions</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <h3 className="h6 text-primary">Do I need prior experience?</h3>
                <p className="small mb-0">Most courses are designed for beginners to intermediate levels. We offer foundational courses that start from basics.</p>
              </div>
              <div className="col-md-6">
                <h3 className="h6 text-primary">Are classes online or offline?</h3>
                <p className="small mb-0">We offer both online and hybrid options to accommodate different learning preferences and locations.</p>
              </div>
              <div className="col-md-6">
                <h3 className="h6 text-primary">What is the duration of courses?</h3>
                <p className="small mb-0">Course duration ranges from 10-16 weeks depending on the program, with flexible weekend and evening batches.</p>
              </div>
              <div className="col-md-6">
                <h3 className="h6 text-primary">Do you provide placement assistance?</h3>
                <p className="small mb-0">Yes, we offer comprehensive placement support including resume building, interview prep, and connections with hiring partners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
