import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [myJobs, setMyJobs] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  useEffect(() => {
    const fetchUserAndData = async () => {
      const savedUser = localStorage.getItem('hirenest_user');
      const savedToken = localStorage.getItem('token');
      
      if (!savedToken) {
        navigate('/');
        return;
      }

      if (savedToken === 'admin-token') {
        navigate('/admin-page');
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/auth/profile`, {
          headers: { 'Authorization': `Bearer ${savedToken}` }
        });
        
        if (!res.ok) {
          navigate('/');
          return;
        }
        
        const userData = await res.json();
        setUser(userData);
        
        if (!userData.profileComplete) {
          navigate('/create-profile');
          return;
        }
        
        fetchData(savedToken, userData.role);
      } catch (error) {
        console.error('Error fetching user:', error);
        navigate('/');
      }
    };
    
    fetchUserAndData();
  }, [navigate]);

  const fetchData = async (authToken, userRole) => {
    setLoading(true);
    try {
      if (userRole === 'jobProvider') {
        const res = await fetch(`${API_BASE}/jobs/my-posted`, {
          headers: { 'Authorization': `Bearer ${authToken}` }
        });
        if (res.ok) {
          const data = await res.json();
          setMyJobs(data);
        }
      } else if (userRole === 'jobSeeker') {
        const res = await fetch(`${API_BASE}/jobs/my-applications`, {
          headers: { 'Authorization': `Bearer ${authToken}` }
        });
        if (res.ok) {
          const data = await res.json();
          setMyApplications(data);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseJob = async (jobId) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/jobs/${jobId}/close`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchData(token, user.role);
      }
    } catch (error) {
      console.error('Error closing job:', error);
    }
  };

  if (!user || loading) {
    return (
      <div className="page-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p className="intro-text">
        Welcome back, {user.firstName}! Here's your {user.role === 'jobProvider' ? 'job postings' : 'applications'} overview.
      </p>

      {user.role === 'jobProvider' ? (
        <div className="content-section">
          <div className="dashboard-header">
            <h2>My Posted Jobs</h2>
            <button
              onClick={() => navigate('/post-job')}
              className="btn-modern-primary"
            >
              + Post New Job
            </button>
          </div>

          {myJobs.length === 0 ? (
            <div className="feature-card dashboard-empty-state">
              <span className="dashboard-empty-icon">📋</span>
              <h3 className="dashboard-empty-title">No jobs posted yet</h3>
              <p className="dashboard-empty-text">Start posting jobs to find talented freelancers.</p>
              <button
                onClick={() => navigate('/post-job')}
                className="btn-modern-primary"
              >
                Post Your First Job
              </button>
            </div>
          ) : (
            <div className="dashboard-jobs-grid">
              {myJobs.map(job => (
                <div key={job._id} className="dashboard-job-card">
                  <div className="dashboard-job-header">
                    <div className="dashboard-job-info">
                      <h3 className="dashboard-job-title">{job.title}</h3>
                      <p className="dashboard-job-meta">
                        <span>Field:</span> {job.jobField} | 
                        <span>Budget:</span> {job.budget}
                      </p>
                      <p className="dashboard-job-meta">
                        <span>Status:</span>{' '}
                        <span style={{
                          color: job.status === 'open' ? 'var(--primary-green)' : '#ef4444',
                          fontWeight: '600'
                        }}>
                          {job.status.toUpperCase()}
                        </span>
                        <span>Applicants:</span> {job.applicants.length}
                      </p>
                    </div>
                    {job.status === 'open' && (
                      <button
                        onClick={() => handleCloseJob(job._id)}
                        className="btn-delete-small"
                      >
                        Close Job
                      </button>
                    )}
                  </div>

                  {job.applicants.length > 0 && (
                    <div className="dashboard-applicants-section">
                      <h4 className="dashboard-applicants-title">Applicants ({job.applicants.length})</h4>
                      <div className="dashboard-applicants-grid">
                        {job.applicants.map((applicant, idx) => (
                          <div key={idx} className="dashboard-applicant-card">
                            <div className="dashboard-applicant-header">
                              <div className="dashboard-applicant-info">
                                <p className="dashboard-applicant-name">
                                  {applicant.user?.firstName} {applicant.user?.lastName}
                                </p>
                                <p className="dashboard-applicant-field">
                                  Field: {applicant.user?.jobField}
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  localStorage.setItem('chat_with', JSON.stringify(applicant.user));
                                  navigate('/chat');
                                }}
                                className="dashboard-chat-btn"
                              >
                                💬 Chat
                              </button>
                            </div>
                            {applicant.proposal && (
                              <div className="dashboard-proposal">
                                <p className="dashboard-proposal-label">
                                  📝 Proposal:
                                </p>
                                <p className="dashboard-proposal-text">
                                  {applicant.proposal}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="content-section">
          <h2>My Applications</h2>
          
          {myApplications.length === 0 ? (
            <div className="feature-card dashboard-empty-state">
              <span className="dashboard-empty-icon">📨</span>
              <h3 className="dashboard-empty-title">No applications yet</h3>
              <p className="dashboard-empty-text">Browse jobs and apply to start working.</p>
              <button
                onClick={() => navigate('/browse-apply')}
                className="btn-modern-primary"
              >
                Browse Jobs
              </button>
            </div>
          ) : (
            <div className="dashboard-jobs-grid">
              {myApplications.map(job => (
                <div key={job._id} className="dashboard-job-card">
                  <div className="dashboard-job-header">
                    <div className="dashboard-job-info">
                      <h3 className="dashboard-job-title">{job.title}</h3>
                      <p className="dashboard-job-meta">
                        <span>Field:</span> {job.jobField} | 
                        <span>Budget:</span> {job.budget}
                      </p>
                      <p className="dashboard-job-meta">
                        <span>Posted by:</span> {job.postedBy?.firstName} {job.postedBy?.lastName}
                      </p>
                    </div>
                    <span className={`dashboard-job-status ${job.status}`}>
                      {job.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
