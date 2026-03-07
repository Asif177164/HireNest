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
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Complaint Submitted Successfully!</h2>
          <p>Thank you for your feedback. We will review your complaint and get back to you soon.</p>
          <button 
            className="modal-btn modal-btn--signin" 
            onClick={() => setSubmitted(false)}
          >
            Submit Another Complaint
          </button>
        </div>
      ) : (
        <div className="content-section">
          <div className="complaint-card">
            <div className="complaint-header">
              <span className="complaint-icon">📝</span>
              <h2>Submit Your Complaint</h2>
            </div>
            <form onSubmit={handleSubmit} className="complaint-form">
              <div className="textarea-wrapper">
                <textarea
                  value={complaint}
                  onChange={handleChange}
                  placeholder="Write your complaint here..."
                  rows="8"
                  required
                />
              </div>

              <button type="submit" className="modal-btn modal-btn--signup complaint-submit">
                Submit Complaint
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="content-section">
        <h2>Contact Information</h2>
        <div className="process-columns">
          <div className="process-card">
            <div className="process-step">📧</div>
            <p>Email: support@hirenest.com</p>
          </div>
          <div className="process-card">
            <div className="process-step">📞</div>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="process-card">
            <div className="process-step">⏰</div>
            <p>Response Time: 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

