import "./Pages.css";

function AppDevelopment() {
  console.log("AppDevelopment rendered");
  const platforms = [
    { name: "iOS Development", icon: "📱" },
    { name: "Android Development", icon: "🤖" },
    { name: "Cross-Platform (React Native)", icon: "⚛️" },
    { name: "Flutter Development", icon: "🎯" },
  ];

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
          <li>✓ Experienced in latest mobile frameworks</li>
          <li>✓ Portfolio of successful apps in app stores</li>
          <li>✓ Fast deployment and iteration</li>
          <li>✓ 24/7 support and maintenance</li>
        </ul>
      </div>
    </div>
  );
}

export default AppDevelopment;
