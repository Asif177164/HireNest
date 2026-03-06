import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = ({ showSignIn, setShowSignIn, showSignUp, setShowSignUp, user, setUser }) => {
  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "", lastName: "", email: "", username: "",
    password: "", confirmPassword: "", role: ""
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const submitSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signInData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Sign in failed");
      }

      setUser(data);
      setShowSignIn(false);
      setSignInData({ username: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault();

    if (!signUpData.role) {
      alert("Please select Job Seeker or Job Provider!");
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        username: signUpData.username,
        password: signUpData.password,
        role: signUpData.role,
      };

      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Sign up failed");
      }

      setUser(data);
      setShowSignUp(false);
      setSignUpData({
        firstName: "", lastName: "", email: "", username: "",
        password: "", confirmPassword: "", role: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* ─── Header (sits on TOP of the hero background) ─── */}
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore Jobs</a></li>
            <li><a href="#">Admin Panel</a></li>
            {user ? (
              <>
                <li className="nav-user">Hi, {user.firstName || user.username}</li>
                <li>
                  <button className="btn-logout" onClick={() => setUser(null)}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className="btn-signin" onClick={() => setShowSignIn(true)}>
                    Sign In
                  </button>
                </li>
                <li>
                  <button className="btn-signup" onClick={() => setShowSignUp(true)}>
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      {/* ─── Sign In Modal ─────────────────────────────── */}
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            {/* Close button — stops propagation so overlay click doesn't fire too */}
            <button
              className="modal-close"
              onClick={(e) => { e.stopPropagation(); setShowSignIn(false); }}
            >
              ✕
            </button>

            <div className="modal-icon">🔑</div>
            <h2>Welcome Back</h2>
            <p className="modal-subtitle">Sign in to your account</p>

            <form onSubmit={submitSignIn}>
              <div className="input-group">
                <span className="input-icon">👤</span>
                <input
                  name="username"
                  value={signInData.username}
                  onChange={handleSignInChange}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="modal-btn modal-btn--signin">
                Sign In
              </button>
            </form>

            <p className="modal-switch">
              Don't have an account?{" "}
              <span onClick={() => { setShowSignIn(false); setShowSignUp(true); }}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* ─── Sign Up Modal ─────────────────────────────── */}
      {showSignUp && (
        <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            <button
              className="modal-close"
              onClick={(e) => { e.stopPropagation(); setShowSignUp(false); }}
            >
              ✕
            </button>

            <div className="modal-icon">🚀</div>
            <h2>Create Account</h2>
            <p className="modal-subtitle">Join us today, it's free</p>

            <form onSubmit={submitSignUp}>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-icon">✏️</span>
                  <input
                    name="firstName"
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <span className="input-icon">✏️</span>
                  <input
                    name="lastName"
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="input-group">
                <span className="input-icon">👤</span>
                <input
                  name="username"
                  value={signUpData.username}
                  onChange={handleSignUpChange}
                  placeholder="Username"
                  required
                />
              </div>

              <div className="role-selector">
                <button
                  type="button"
                  className={`role-btn ${signUpData.role === "jobSeeker" ? "role-btn--active" : ""}`}
                  onClick={() => setSignUpData({ ...signUpData, role: "jobSeeker" })}
                >
                  <span className="role-icon">🔍</span>
                  <span className="role-label">Job Seeker</span>
                  <span className="role-desc">Looking for work</span>
                </button>
                <button
                  type="button"
                  className={`role-btn ${signUpData.role === "jobProvider" ? "role-btn--active" : ""}`}
                  onClick={() => setSignUpData({ ...signUpData, role: "jobProvider" })}
                >
                  <span className="role-icon">🏢</span>
                  <span className="role-label">Job Provider</span>
                  <span className="role-desc">Hiring talent</span>
                </button>
              </div>

              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="input-group">
                <span className="input-icon">✅</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <button type="submit" className="modal-btn modal-btn--signup">
                Sign Up
              </button>
            </form>

            <p className="modal-switch">
              Already have an account?{" "}
              <span onClick={() => { setShowSignUp(false); setShowSignIn(true); }}>
                Sign In
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;