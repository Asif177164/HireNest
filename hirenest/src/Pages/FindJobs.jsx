import "./Pages.css";

function FindJobs() {
  const jobCategories = [
    { name: "Recent Jobs", count: 245 },
    { name: "Top Paying", count: 89 },
    { name: "Entry Level", count: 156 },
    { name: "Long-term", count: 234 },
  ];

  return (
    <div className="page-container">
      <h1>Find Jobs</h1>
      <p className="intro-text">
        Browse available projects and apply to jobs that match your skills.
      </p>

      <div className="content-section">
        <h2>Job Categories</h2>
        <div className="job-categories-grid">
          {jobCategories.map((cat, index) => (
            <div key={index} className="job-category">
              <h3>{cat.name}</h3>
              <p className="job-count">{cat.count} Available</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>How to Apply for Jobs</h2>
        <ol className="apply-steps">
          <li>Browse available projects in your field</li>
          <li>Read project requirements carefully</li>
          <li>Prepare a compelling proposal</li>
          <li>Include relevant portfolio links</li>
          <li>Submit and wait for client response</li>
        </ol>
      </div>
    </div>
  );
}

export default FindJobs;
