import "./Pages.css";

function WebDevelopment() {
  const developers = [
    { name: "React Specialist", rating: 4.9, projects: 150 },
    { name: "Full Stack Developer", rating: 4.8, projects: 120 },
    { name: "Node.js Expert", rating: 4.7, projects: 95 },
  ];

  return (
    <div className="page-container">
      <h1>Web Development</h1>
      <p className="intro-text">
        Browse talented web developers and find the perfect match for your
        project.
      </p>

      <div className="content-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Frontend Development</h3>
            <p>React, Vue, Angular experts for stunning user interfaces</p>
          </div>
          <div className="feature-card">
            <h3>Backend Development</h3>
            <p>Node.js, Python, Java specialists for robust server solutions</p>
          </div>
          <div className="feature-card">
            <h3>Full Stack Solutions</h3>
            <p>Complete end-to-end development with modern tech stack</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Top Developers</h2>
        <div className="developers-list">
          {developers.map((dev, index) => (
            <div key={index} className="developer-card">
              <h4>{dev.name}</h4>
              <p>⭐ Rating: {dev.rating}</p>
              <p>Projects Completed: {dev.projects}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
