import "./Chat.css";

function Chat() {
  return (
    <div className="chat-page-wrapper">
      
      <div className="chat-header-section">
        <h1 className="chat-main-title">Secure Collaboration Hub</h1>
        <p className="chat-description">
          HireNest provides integrated real-time communication to ensure clients and freelancers 
          can collaborate without needing external tools.
        </p>
      </div>

      <div className="chat-main-content">
        
        <div className="chat-visual-container">
          <div className="mock-chat-box">
            <div className="mock-chat-top">
              <div className="mock-user-icon">JD</div>
              <div className="mock-user-info">
                <strong>John Doe (Client)</strong>
                <span className="status-dot">Online</span>
              </div>
            </div>
            <div className="mock-chat-body">
              <div className="bubble received">Hi! I saw your proposal for the MERN project.</div>
              <div className="bubble sent">Hello! I'm glad to hear that. I'm ready to discuss the details.</div>
              <div className="bubble received">Great! Can we clarify the deadline?</div>
            </div>
            <div className="mock-chat-footer">
              <span>Type a message...</span>
              <button className="mock-send-btn">➤</button>
            </div>
          </div>
        </div>

        <div className="chat-features-list">
          <div className="feature-item">
            <h3>Instant Messaging</h3>
            <p>Engage in real-time messaging to discuss project details and clarify requirements.</p>
          </div>
          <div className="feature-item">
            <h3>Integrated Security</h3>
            <p>Keep your conversations secure inside the platform to maintain transparency and trust.</p>
          </div>
          <div className="feature-item">
            <h3>Workflow Integration</h3>
            <p>Chat becomes available as soon as an employer reviews a proposal.</p>
          </div>
          <div className="feature-item">
            <h3>Efficiency</h3>
            <p>Reduce misunderstandings through direct coordination and instant feedback.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chat;