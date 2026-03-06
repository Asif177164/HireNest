import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AIAssistance from "./Components/AIAssistance/AIAssistance";

// Pages
import WebDevelopment from "./Pages/WebDevelopment";
import AppDevelopment from "./Pages/AppDevelopment";
import UIUXDesign from "./Pages/UIUXDesign";
import Marketing from "./Pages/Marketing";
import PostProject from "./Pages/PostProject";
import FindFreelancers from "./Pages/FindFreelancers";
import HowItWorks from "./Pages/HowItWorks";
import CreateProfile from "./Pages/CreateProfile";
import FindJobs from "./Pages/FindJobs";
import FreelancerSupport from "./Pages/FreelancerSupport";
import Privacy from "./Pages/Privacy";
import TermsOfService from "./Pages/TermsOfService";
import Help from "./Pages/Help";
import PostJob from "./Pages/PostJob";
import BrowseApply from "./Pages/BrowseApply";
import Payments from "./Pages/Payments";
import Chat from "./Pages/Chat";
import Reviews from "./Pages/Reviews";
import AIAssistant from "./Pages/AIAssistant";
import AdminPanel from "./Pages/AdminPanel";

function App() {
  // Persist user state in localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("hirenest_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("hirenest_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("hirenest_user");
    }
  }, [user]);

  return (
    <Router>
      {/* Header appears on all pages */}
      <Header
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
        user={user}
        setUser={setUser}
      />

<Routes>
        <Route path="/" element={<Home 
          showSignIn={showSignIn} 
          setShowSignIn={setShowSignIn}
          showSignUp={showSignUp} 
          setShowSignUp={setShowSignUp}
          user={user}
          setUser={setUser}
        />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/find-freelancers" element={<FindFreelancers />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/support" element={<FreelancerSupport />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/help" element={<Help />} />
        <Route path="/post-job" element={<PostJob/>}/>
        <Route path="/browse-apply" element={<BrowseApply/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/ai-assistant" element={<AIAssistant/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>
      </Routes>

      {/* Footer stays outside Routes so it shows on all pages */}
      <Footer 
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
      />
      <AIAssistance />
    </Router>
  );
}

export default App;
