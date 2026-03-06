import "./Pages.css";

function FindFreelancers() {
  const filterOptions = [
    "By Skills",
    "By Budget",
    "By Rating",
    "By Availability",
    "By Location",
    "By Experience Level",
  ];

  return (
    <div className="page-container">
      <h1>Find Freelancers</h1>
      <p className="intro-text">
        Search and hire talented freelancers for your projects.
      </p>

      <div className="content-section">
        <h2>Search Filters</h2>
        <div className="filters-grid">
          {filterOptions.map((filter, index) => (
            <div key={index} className="filter-card">
              <h4>{filter}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>Finding the Right Freelancer</h2>
        <ul className="benefits-list">
          <li>✓ View detailed portfolios and work samples</li>
          <li>✓ Check verified reviews and ratings</li>
          <li>✓ Review hourly rates and project estimates</li>
          <li>✓ Test with a small project first</li>
          <li>✓ Build long-term working relationships</li>
        </ul>
      </div>
    </div>
  );
}

export default FindFreelancers;
