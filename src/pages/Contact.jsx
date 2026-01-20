import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Get existing leads from localStorage
      const existingLeads = JSON.parse(localStorage.getItem("leads") || "[]");

      // Add new lead with timestamp
      const newLead = {
        ...form,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        phone: form.phone || "N/A"
      };

      existingLeads.push(newLead);

      // Save back to localStorage
      localStorage.setItem("leads", JSON.stringify(existingLeads));

      alert("Thank you! Your details have been submitted.");
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <main className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        <div className="col-12">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            type="email"
            required
          />
        </div>

        <div className="col-12">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Phone"
            type="tel"
          />
        </div>

        <div className="col-12">
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Course</option>
            <option value="Data Science">Data Science</option>
            <option value="VLSI">VLSI</option>
            <option value="AI/ML">AI/ML</option>
          </select>
        </div>

        <div className="col-12">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-control"
            rows="4"
            placeholder="Message"
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}
