import "./PostJob.css";

function PostJob() {
  return (
    <div className="pj-master-wrapper">
      
      <section className="pj-hero">
        <div className="pj-hero-inner">
          <h1>Find the Right Talent</h1>
          <p>
            The Job Posting system is a core feature of HireNest, designed to 
            connect employers with skilled professionals quickly.
          </p>
        </div>
      </section>

      <div className="pj-main-body">
        
        <section className="pj-info-section">
          <h2>Clear Requirements, Better Results</h2>
          <p>
            Avoid the struggle of finding professionals. Clearly describe your 
            project requirements, expected outcomes, and payment terms to attract 
            trustworthy candidates.
          </p>
        </section>

        <section className="pj-capabilities">
          <h3 className="pj-label">Main Capabilities </h3>
          <div className="pj-card-grid">
            <div className="pj-card">
              <span className="pj-card-num">01</span>
              <h4>Detailed Listings</h4>
              <p>Create, edit, and delete job posts with comprehensive descriptions.</p>
            </div>
            <div className="pj-card">
              <span className="pj-card-num">02</span>
              <h4>Precise Targeting</h4>
              <p>Specify project category and required technical skills.</p>
            </div>
            <div className="pj-card">
              <span className="pj-card-num">03</span>
              <h4>Flexible Budgeting</h4>
              <p>Define your budget and payment structure clearly.</p>
            </div>
          </div>
        </section>

        <div className="pj-benefits-box">
          <h3>Why HireNest?</h3>
          <p>
            A structured system reduces hiring time and increases project success rates. 
            Freelancers quickly find matches, while employers get relevant proposals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostJob;