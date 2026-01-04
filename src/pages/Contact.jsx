import React from 'react'

export default function Contact(){
  return (
    <main className="page-content container my-5">
      <h1 className="mb-4">Contact</h1>
      <p>For enquiries, email <a href="mailto:info@neuro-silicon.com">info@neuro-silicon.com</a> or use the form below.</p>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" placeholder="Your name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" placeholder="you@example.com" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" />
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary">Send</button>
        </div>
      </form>
    </main>
  )
}
