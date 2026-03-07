import { useState } from "react";
import "./Pages.css";

function AdminPanel() {
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint submitted:", complaint);
    setSubmitted(true);
    setComplaint("");
  };

  return (
    <div className="page-container">
      <h1>Admin Panel</h1>
      <p className="intro-text">
        Submit your complaints or feedback to the admin team.
      </p>

      {submitted ? (
        <div className="success-message-modern">
          <div className="success-icon-modern">✓</div>
          <h2>Complaint Submitted Successfully!</h2>
          <p>Thank you for your feedback. We will review your complaint and get back to you soon.</p>
          <button 
            className="btn-modern-primary" 
            onClick={() => setSubmitted(false)}
          >
            Submit Another Complaint
          </button>
        </div>
      ) : (
        <div className="content-section">
          <div className="complaint-card-modern">
            <div className="complaint-header-modern">
              <div className="complaint-icon-modern">📝</div>
              <div>
                <h2>Submit Your Complaint</h2>
                <p className="complaint-subtitle">We value your feedback and are here to help</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="complaint-form-modern">
              <div className="textarea-wrapper-modern">
                <textarea
                  value={complaint}
                  onChange={handleChange}
                  placeholder="Describe your issue in detail. Our team will review it promptly..."
                  rows="6"
                  required
                  className="complaint-textarea"
                />
                <span className="textarea-char-count">{complaint.length} characters</span>
              </div>

              <div className="complaint-actions">
                <button type="submit" className="btn-modern-primary">
                  <span className="btn-icon">✈️</span>
                  Submit Complaint
                </button>
                <button type="button" className="btn-modern-secondary" onClick={() => setComplaint("")}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="content-section">
        <h2>Contact Information</h2>
        <div className="process-columns">
          <div className="process-card contact-card">
            <div className="process-step">📧</div>
            <p>Email: support@hirenest.com</p>
          </div>
          <div className="process-card contact-card">
            <div className="process-step">📞</div>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="process-card contact-card">
            <div className="process-step">⏰</div>
            <p>Response Time: 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

