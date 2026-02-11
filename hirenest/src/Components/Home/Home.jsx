import React from "react";
import Header from "../Header/Header";


const Home = () => {
  return (
    <div className="hero-container">
      <Header />

      <div className="hero-content">
        <h1>
          Opportunities Here <br />
          Build & Achieve <br />
          Your Way
        </h1>
        <p>Build your skills, learn new tech, and grow your career.</p>

        {/* Button group */}
        <div className="button-group">
          <button className="btn-getStarted">Get Started</button>
          <button className="btn-learnmore">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
