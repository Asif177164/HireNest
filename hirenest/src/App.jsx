import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>

      {/* Footer stays outside Routes so it shows on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
