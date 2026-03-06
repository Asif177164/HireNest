import "./Pages.css";

function CreateProfile() {
  const profileSections = [
    "Professional Photo",
    "Bio & Skills",
    "Work Portfolio",
    "Hourly Rate",
    "Availability",
  ];

  return (
    <div className="page-container">
      <h1>Create Your Freelancer Profile</h1>
      <p className="intro-text">
        Build your freelancer profile and start receiving job opportunities.
      </p>

      <div className="content-section">
        <h2>Profile Essentials</h2>
        <div className="essentials-grid">
          {profileSections.map((section, index) => (
            <div key={index} className="essential-card">
              <div className="essential-number">{index + 1}</div>
              <h4>{section}</h4>
              <p>Complete this section to maximize visibility</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Tips for Success</h2>
        <ul className="tips-list">
          <li>📸 Use a professional, clear profile photo</li>
          <li>✍️ Write a compelling bio highlighting your expertise</li>
          <li>🎯 Showcase your best work in portfolio</li>
          <li>⭐ Request reviews from happy clients</li>
          <li>📈 Keep your profile updated and active</li>
        </ul>
      </div>
    </div>
  );
}

export default CreateProfile;
