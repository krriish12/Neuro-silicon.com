import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("neuro-silicon-leads") || "[]");
      const newLead = {
        id: Date.now(),
        type: "Contact Form",
        name: form.name,
        email: form.email,
        phone: form.phone || "N/A",
        interest: form.interest,
        message: form.message,
        timestamp: new Date().toISOString(),
        formattedDate: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      };
      existingLeads.push(newLead);
      localStorage.setItem("neuro-silicon-leads", JSON.stringify(existingLeads));

      // Send to WhatsApp
      const whatsappNumber = "919000852209";
      const whatsappMessage = `*New Contact Form Submission*\n\n` +
        `*Name:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Phone:* ${form.phone || "N/A"}\n` +
        `*Course Interest:* ${form.interest}\n` +
        `*Message:* ${form.message}\n\n` +
        `_Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}_`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Show success
      setIsSubmitting(false);
      setShowSuccess(true);
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-content" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Circles */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(80px)', animation: 'float 6s ease-in-out infinite' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(80px)', animation: 'float 8s ease-in-out infinite reverse' }}></div>

      {/* Success Modal */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', minWidth: '300px' }}>
            <div className="card-body p-4 text-center">
              <div style={{ fontSize: '4rem', color: '#28a745', animation: 'scaleIn 0.5s ease-in-out' }}>
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h3 className="mt-3 mb-2">Success!</h3>
              <p className="text-muted mb-0">Thank you! Your details have been submitted. We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
      {showSuccess && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9998 }} onClick={() => setShowSuccess(false)}></div>}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <div className="text-center text-white mb-5" style={{ animation: 'fadeInDown 0.8s ease-in-out' }}>
          <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
          <p className="lead mb-0">Let's discuss how we can help you achieve your career goals</p>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { transform: scale(0); }
              to { transform: scale(1); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .form-control:focus, .form-select:focus {
              border-color: #667eea !important;
              box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
            }
            .contact-card {
              animation: fadeInUp 0.8s ease-in-out;
            }
            .contact-card:hover {
              transform: translateY(-5px);
              transition: transform 0.3s ease;
            }
            .info-card {
              transition: all 0.3s ease;
            }
            .info-card:hover {
              transform: translateY(-10px) scale(1.02);
            }
          `}
        </style>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg contact-card" style={{ borderRadius: '20px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 fw-bold">Send us a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">
                          <i className="bi bi-person-fill me-2 text-primary"></i>Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="John Doe"
                          required
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">
                          <i className="bi bi-envelope-fill me-2 text-primary"></i>Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="john@example.com"
                          type="email"
                          required
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          <i className="bi bi-telephone-fill me-2 text-primary"></i>Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="+91 9876543210"
                          type="tel"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="interest" className="form-label fw-semibold">
                          <i className="bi bi-mortarboard-fill me-2 text-primary"></i>Course Interest *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="form-select form-select-lg"
                          required
                          style={{ borderRadius: '10px' }}
                        >
                          <option value="">Select a course</option>
                          <option value="Data Science & AI/ML">Data Science & AI/ML</option>
                          <option value="VLSI Functional Verification">VLSI Functional Verification</option>
                          <option value="React Frontend Development">React Frontend Development</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label fw-semibold">
                          <i className="bi bi-chat-text-fill me-2 text-primary"></i>Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          rows="4"
                          placeholder="Tell us about your goals and how we can help..."
                          required
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-lg py-3 fw-bold text-white"
                      style={{
                        background: isSubmitting ? '#6c757d' : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        position: 'relative'
                      }}
                      onMouseOver={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i>Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              {/* Email Card */}
              <div className="card border-0 shadow-lg text-white info-card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '20px', animation: 'fadeInUp 0.8s ease-in-out 0.2s backwards' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: '#f5576c' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Email Us</h5>
                      <p className="mb-0 small">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <a href="mailto:careers@neuro-silicon.com" className="text-white text-decoration-none fw-semibold">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>careers@neuro-silicon.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="card border-0 shadow-lg text-white info-card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '20px', animation: 'fadeInUp 0.8s ease-in-out 0.4s backwards' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-telephone-fill" style={{ fontSize: '1.5rem', color: '#00f2fe' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Call Us</h5>
                      <p className="mb-0 small">Mon - Sat, 9AM - 6PM</p>
                    </div>
                  </div>
                  <a href="tel:+919000852209" className="text-white text-decoration-none fw-semibold">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>+91 9000852209
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="card border-0 shadow-lg text-white info-card" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', borderRadius: '20px', animation: 'fadeInUp 0.8s ease-in-out 0.6s backwards' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem', color: '#fa709a' }}></i>
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Visit Us</h5>
                      <p className="mb-0 small">Our training center</p>
                    </div>
                  </div>
                  <p className="mb-0 fw-semibold">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>Banglore, India
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="card border-0 shadow-lg info-card" style={{ background: 'white', borderRadius: '20px', animation: 'fadeInUp 0.8s ease-in-out 0.8s backwards' }}>
                <div className="card-body p-4 text-center">
                  <i className="bi bi-clock-fill text-primary mb-3" style={{ fontSize: '2.5rem' }}></i>
                  <h5 className="fw-bold mb-2">Quick Response Time</h5>
                  <p className="text-muted mb-0">Average response time: <span className="text-primary fw-bold">2 hours</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
