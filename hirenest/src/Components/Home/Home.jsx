import { useState } from "react";
import Header from "../Header/Header";
import { FaBriefcase, FaSearch, FaCreditCard, FaComments, FaStar, FaRobot } from "react-icons/fa";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <div className="hero-container">
        <Header
          showSignIn={showSignIn}
          setShowSignIn={setShowSignIn}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />

        <div className="hero-content">
          <h1>
            Opportunities Here <br />
            Build & Achieve <br />
            Your Way
          </h1>
          <p>Build your skills, learn new tech, and grow your career.</p>

          <div className="button-group">
            <button className="btn-getStarted" onClick={() => setShowSignUp(true)}>
              Get Started
            </button>
            <button className="btn-learnmore">Learn More</button>
          </div>
        </div>
      </div>

      <section className="middle-section">
        <div className="middle-container">
          <div className="section-header">
            <h2>How HireNest Works</h2>
            <p>Discover the power of seamless hiring and freelancing</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaBriefcase /></div>
              <h3>Post a Job</h3>
              <p>Create and publish job listings with detailed requirements and budget</p>
              <button className="feature-btn">Learn More</button>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaSearch /></div>
              <h3>Browse & Apply</h3>
              <p>Find perfect freelancers or discover opportunities that match your skills</p>
              <button className="feature-btn">Learn More</button>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaCreditCard /></div>
              <h3>Secure Payments</h3>
              <p>Escrow-based transactions ensuring safety for both parties</p>
              <button className="feature-btn">Learn More</button>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaComments /></div>
              <h3>Real-time Chat</h3>
              <p>Communicate directly with clients or freelancers in real-time</p>
              <button className="feature-btn">Learn More</button>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaStar /></div>
              <h3>Ratings & Reviews</h3>
              <p>Build trust through transparent reviews and performance ratings</p>
              <button className="feature-btn">Learn More</button>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaRobot /></div>
              <h3>AI Assistant</h3>
              <p>Get help with job searches, application tips, and career advice</p>
              <button className="feature-btn">Learn More</button>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Transform Your Career or Hiring?</h3>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => setShowSignUp(true)}>
                I'm a Job Seeker
              </button>
              <button className="btn-secondary" onClick={() => setShowSignUp(true)}>
                I'm Hiring
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="ai-assist">
        <div className="ai-content">
          <div className="ai-icon"><FaRobot /></div>
          <div className="ai-text">
            <strong>AI Assistance</strong>
            <p>Need help? Ask our assistant.</p>
            <button className="ai-btn">Get AI Assistance</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;