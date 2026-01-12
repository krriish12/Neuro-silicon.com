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
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\nCurrent Status: ${status}\nMessage: ${message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setShow(false)
  }

  if(!show) return null

  return (
    <div className="leadmodal-overlay">
      <div className="leadmodal card shadow-lg">
        <div className="row g-0">
          <div className="col-lg-6 p-4 bg-white">
            <div className="mb-3 badge bg-warning text-dark">Most preferred</div>
            <h3 className="fw-bold">VLSI & Data Science Training Institute<br/><span className="text-primary">Since 2020</span></h3>
            <ul className="mt-3 small text-muted">
              <li>Best Price Assured</li>
              <li>Highest Placement Record</li>
              <li>Lab Sessions + Interview Prep</li>
              <li>50+ VLSI Courses Offline/Online</li>
            </ul>
            <div className="mt-4 p-3 bg-dark text-white rounded">Training + Lab + Interview prep = Highest Placement Records</div>
          </div>

          <div className="col-lg-6 p-4 bg-primary text-light">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h5 className="mb-0">Become the highest-paying VLSI engineer!</h5>
              <button className="btn-close btn-close-white" onClick={()=>setShow(false)} aria-label="Close"></button>
            </div>

            <div className="mt-3">
              <div className="mb-2">
                <input name="name" value={form.name} onChange={update} className="form-control" placeholder="Full Name" />
              </div>
              <div className="mb-2">
                <input name="email" value={form.email} onChange={update} className="form-control" placeholder="Email" />
              </div>
              <div className="mb-2">
                <input name="phone" value={form.phone} onChange={update} className="form-control" placeholder="Phone number" />
              </div>
              <div className="mb-2">
                <select name="course" value={form.course} onChange={update} className="form-select">
                  <option>Others</option>
                  <option>Data Science — Python & ML</option>
                  <option>VLSI Design & Verification</option>
                  <option>Advanced Machine Learning</option>
                </select>
              </div>
              <div className="mb-2">
                <select name="status" value={form.status} onChange={update} className="form-select">
                  <option>Student</option>
                  <option>Working Professional</option>
                  <option>Looking for Internship</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea name="message" value={form.message} onChange={update} className="form-control" rows="3" placeholder="Message (optional)"></textarea>
              </div>
              <div className="d-grid">
                <button className="btn btn-light text-primary" onClick={handleSubmit}>Submit Now & Unlock Your Offer!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
