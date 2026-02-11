import React from "react";
import logo from "../../assets/logo.png";  
import "./Header.css"

const Header = () => {
  return (
    <header className="hero-container">
      <div className="logo">
        <img src={logo} alt="logo"  />
      </div>

      <nav>
         <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Explore Jobs</a></li>
    <li><a href="#">Admin Panel</a></li>
    <li><button className="btn-signin">Sign In</button></li>
      <li><button className="btn-signup">Sign Up</button></li>
      
  </ul>
</nav>
    </header>
  );
};

export default Header;
