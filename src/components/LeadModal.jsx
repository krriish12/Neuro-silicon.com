import React, { useEffect, useState } from 'react'

const WHATSAPP_NUMBER = '919000852209' // country code + number (modify if needed)

export default function LeadModal(){
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', course:'Others', status:'Student', message:'' })

  useEffect(()=>{
    const t = setTimeout(()=> setShow(true), 800)
    return ()=> clearTimeout(t)
  },[])

  function update(e){
    const { name, value } = e.target
    setForm(prev=> ({...prev, [name]: value}))
  }

  function handleSubmit(){
    const { name, email, phone, course, status, message } = form

    // Save to localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem("neuro-silicon-leads") || "[]");
      const newLead = {
        id: Date.now(),
        type: "Lead Modal",
        name: name,
        email: email,
        phone: phone,
        course: course,
        status: status,
        message: message || "N/A",
        timestamp: new Date().toISOString(),
        formattedDate: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      };
      existingLeads.push(newLead);
      localStorage.setItem("neuro-silicon-leads", JSON.stringify(existingLeads));
    } catch (error) {
      console.error("Error saving lead:", error);
    }

    // Open WhatsApp
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\nCurrent Status: ${status}\nMessage: ${message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setShow(false)
  }

  if(!show) return null

  return (
    <div className="leadmodal-overlay">
      <div className="leadmodal-modern">
        <button className="leadmodal-close" onClick={()=>setShow(false)} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="leadmodal-content">
          <div className="leadmodal-left">
            <div className="leadmodal-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L10.09 5.26L14.82 5.94L11.41 9.27L12.18 14L8 11.77L3.82 14L4.59 9.27L1.18 5.94L5.91 5.26L8 1Z"/>
              </svg>
              Most Preferred Training Institute
            </div>

            <h2 className="leadmodal-title">
              Transform Your Career in
              <span className="gradient-text"> Tech</span>
            </h2>

            <p className="leadmodal-subtitle">
              Join India's leading VLSI, Data Science & Web Development training institute since 2020
            </p>

            <div className="leadmodal-features">
              <div className="feature-item">
                <div className="feature-icon">💼</div>
                <div className="feature-text">
                  <strong>Highest Placement Rate</strong>
                  <span>Industry-leading job placement assistance</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <strong>Hands-on Training</strong>
                  <span>Lab sessions + Interview preparation</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <strong>50+ Courses</strong>
                  <span>Offline & Online learning options</span>
                </div>
              </div>
            </div>

            <div className="leadmodal-guarantee">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Best Price Guarantee • Expert Faculty • Job Assistance
            </div>
          </div>

          <div className="leadmodal-right">
            <h3 className="leadmodal-form-title">Start Your Journey Today</h3>
            <p className="leadmodal-form-subtitle">Fill the form to unlock exclusive offers</p>

            <form className="leadmodal-form" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  className="form-input"
                  placeholder="+91 xxxxx xxxxx"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Select Course</label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={update}
                  className="form-select"
                >
                  <option value="Others">Others</option>
                  <option value="VLSI Design & Verification">VLSI Design & Verification</option>
                  <option value="Data Science — Python & ML">Data Science — Python & ML</option>
                  <option value="React Development">React Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="status">Current Status</label>
                <select
                  id="status"
                  name="status"
                  value={form.status}
                  onChange={update}
                  className="form-select"
                >
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Looking for Internship">Looking for Internship</option>
                  <option value="Career Change">Career Change</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  className="form-textarea"
                  rows="3"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                <span>Get Started Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
