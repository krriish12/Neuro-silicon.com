import React, { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/save-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Thank you! Your details have been submitted.");
    setForm({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <main className="container my-5">
      <h1>Contact Us</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Email" required />
        <input name="phone" value={form.phone} onChange={handleChange} className="form-control" placeholder="Phone" />
        <select name="interest" value={form.interest} onChange={handleChange} className="form-select" required>
          <option value="">Select Course</option>
          <option>Data Science</option>
          <option>VLSI</option>
          <option>AI/ML</option>
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" placeholder="Message" required />
        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
      </form>
    </main>
  );
}
