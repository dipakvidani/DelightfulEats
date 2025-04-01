import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from '../comman';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Login successful!");
      navigate('/recipes');
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header />
    <div className="container py-5">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-danger text-white text-center py-3">
              <h2 className="mb-0">
                Welcome Back to DelightfulEats <span className="emoji">👨‍🍳</span>
              </h2>
              <p className="mb-0">Sign in to access your saved recipes</p>
            </div>
            
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="me-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <FaLock className="me-2" />
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-danger small">
                    Forgot password?
                  </Link>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-danger w-100 py-2 mb-3"
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Sign In'}
                </button>
                
                <div className="position-relative text-center mb-4">
                  <hr />
                  <span className="position-absolute bg-white px-2" style={{top: '-10px', left: '50%', transform: 'translateX(-50%)'}}>
                    OR
                  </span>
                </div>
                
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-outline-danger">
                    <FaGoogle className="me-2" />
                    Continue with Google
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <FaFacebook className="me-2" />
                    Continue with Facebook
                  </button>
                </div>
              </form>
            </div>
            
            <div className="card-footer text-center py-3">
              New to DelightfulEats? <Link to="/sign-up" className="text-danger">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LoginPage;