import "./Pages.css";

function UIUXDesign() {
  const services = [
    "Web UI Design",
    "Mobile App UI",
    "Wireframing & Prototyping",
    "User Research",
    "Interaction Design",
    "Design Systems",
  ];

  return (
    <div className="page-container">
      <h1>UI/UX Design</h1>
      <p className="intro-text">
        Find talented designers who create beautiful and user-friendly
        interfaces.
      </p>

      <div className="content-section">
        <h2>Our Design Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-badge">
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Design Process</h2>
        <ol className="process-list">
          <li>Discovery & Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Visual Design</li>
          <li>User Testing & Feedback</li>
          <li>Final Delivery & Support</li>
        </ol>
      </div>
    </div>
  );
}

export default UIUXDesign;
