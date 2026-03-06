import "./BrowseApply.css";

function BrowseApply() {
  return (
    <div className="browse-wrapper">
      
      <section className="browse-header">
        <h1>Find Your Next Opportunity</h1>
        <p>Explore thousands of jobs tailored to your professional skills and experience levels.</p>
        
        <div className="search-mockup">
          <input type="text" placeholder="Search by keywords (e.g. Web Development)..." className="search-input" />
          <button className="search-btn">Search Jobs</button>
        </div>

        <div className="filter-chips">
          <span>Popular:</span>
          <button className="chip">React.js</button>
          <button className="chip">Graphic Design</button>
          <button className="chip">Content Writing</button>
          <button className="chip">MERN Stack</button>
        </div>
      </section>

      <section className="discovery-section">
        <div className="section-info">
          <h2>Job Discovery</h2>
          <p>Our intelligent system helps you filter through noise to find the perfect match.</p>
        </div>

        <div className="filters-grid">
          <div className="filter-card">
            <h4>Budget Range</h4>
            <p>Sort jobs based on fixed-price or hourly budgets.</p>
          </div>
          <div className="filter-card">
            <h4>Skill Match</h4>
            <p>Filter by the specific technologies you've mastered.</p>
          </div>
          <div className="filter-card">
            <h4>Project Type</h4>
            <p>Choose between one-time gigs or permanent roles.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>How to Apply</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Find a Job</h3>
            <p>Browse listings that match your category and skills.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Submit Proposal</h3>
            <p>Set your bid amount and write a compelling cover letter.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Hired</h3>
            <p>Employers review your portfolio and select the best fit.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BrowseApply;