import "./Pages.css";

import { useEffect, useState } from "react";

function AppDevelopment() {
  const [platforms, setPlatforms] = useState([]);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch("/api/services/app-development")
      .then((res) => res.json())
      .then((data) => {
        setPlatforms(data.platforms || []);
        setBenefits(data.benefits || []);
      })
      .catch((err) => console.error("Failed to load app dev data", err));
  }, []);

  return (
    <div className="page-container">
      <h1>App Development</h1>
      <p className="intro-text">
        Discover expert app developers for iOS, Android, and cross-platform
        projects.
      </p>

      <div className="content-section">
        <h2>Available Platforms</h2>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-card">
              <div className="platform-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Why Choose Our Developers?</h2>
        <ul className="benefits-list">
          {benefits.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppDevelopment;
