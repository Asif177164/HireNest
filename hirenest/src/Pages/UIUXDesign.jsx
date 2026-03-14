import "./Pages.css";

import { useEffect, useState } from "react";

function UIUXDesign() {
  const [services, setServices] = useState([]);
  const [process, setProcess] = useState([]);

  useEffect(() => {
    fetch("/api/services/ui-ux-design")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services || []);
        setProcess(data.process || []);
      })
      .catch((err) => console.error("Failed to load UI/UX data", err));
  }, []);

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
          {process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default UIUXDesign;
