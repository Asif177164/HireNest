import { useState, useEffect } from "react";
import Header from "../Header/Header";

function Layout({ children }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

  // Check for existing user session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("hirenest_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("hirenest_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("hirenest_user");
    }
  }, [user]);

  return (
    <>
      <Header
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
        user={user}
        setUser={setUser}
        isHome={false}
      />
      <div style={{ paddingTop: '80px' }}>
        {children}
      </div>
    </>
  );
}

export default Layout;

