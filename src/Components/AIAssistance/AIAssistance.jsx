import "./AIAssistance.css";
import {FaRobot } from "react-icons/fa";
function AIAssistance() {
  return (
    
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
    
  );
}

export default AIAssistance;
