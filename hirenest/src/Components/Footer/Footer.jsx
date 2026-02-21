import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo & About */}
        <div className="footer-section">
          <h2 className="logo">Hirenest</h2>
          <p>Hirenest connects clients with talented freelancers worldwide.</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* Client */}
        <div className="footer-section">
          <h3>Clients</h3>
          <ul>
            <li>Post a Project</li>
            <li>Find Freelancers</li>
            <li>How it Works</li>
          </ul>
        </div>

        {/* Freelancers */}
        <div className="footer-section">
          <h3>Freelancers</h3>
          <ul>
            <li>Create Profile</li>
            <li>Find Jobs</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Hirenest. All Rights Reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
