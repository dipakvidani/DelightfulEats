import React, { useState } from 'react';
import { Footer, Header } from '../comman';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    
    // Show success toast
    toast.success('Thank you for your feedback!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-header  text-dark">
                <h2 className="mb-0 text-center">
                  <FaComment className="me-2" />
                  Feedback Form
                </h2>
              </div>
              
              <div className="card-body">
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="alert alert-success" role="alert">
                      <h4 className="alert-heading">Feedback Submitted!</h4>
                      <p>We appreciate your time and valuable feedback.</p>
                      <hr />
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="btn btn-primary"
                      >
                        Submit Another Feedback
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        <FaUser className="me-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        <FaEnvelope className="me-2" />
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="feedback" className="form-label">
                        <FaComment className="me-2" />
                        Your Feedback
                      </label>
                      <textarea
                        className="form-control"
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Share your thoughts with us..."
                      />
                    </div>
                    
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        <FaPaperPlane className="me-2" />
                        Submit Feedback
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}