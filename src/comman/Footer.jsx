import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaInstagram, FaPinterest, 
  FaYoutube, FaTwitter, FaPhoneAlt, 
  FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';
import { BsClockFill, BsDownload } from 'react-icons/bs';
import '../assets/css/footer.css';

export default function Footer() {
  const quickLinks = [
    { label: "Explore Recipes", icon: "🍽️", path: "/explore-recipes" },
    { label: "New Additions", icon: "🆕", path: "/new-additions" },
    { label: "Top Rated", icon: "⭐", path: "/top-rated" },
    { label: "Submit Your Recipe", icon: "📤", path: "/submit-recipe" },
    { label: "Health Tips", icon: "🥗", path: "/health-tips" },
    { label: "Contact Support", icon: "📞", path: "/contact-support" }
  ];

  const customerServices = [
    { label: "Help Center", icon: "❓", path: "/help-center" },
    { label: "Feedback", icon: "📝", path: "/feedback" },
    { label: "Terms & Conditions", icon: "📜", path: "/terms-conditions" },
    { label: "Privacy Policy", icon: "🔒", path: "/privacy-policy" },
    { label: "Contact Us", icon: "📧", path: "/contact-us" },
    { label: "FAQs", icon: "💡", path: "/faqs" }
  ];

  const socialLinks = [
    { platform: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/vidani.dipak" },
    { platform: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/gj_rolex_live/" },
    { platform: "Pinterest", icon: <FaPinterest />, url: "https://www.pinterest.com/delightfuleats/" },
    { platform: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@SoupedUpRecipes" },
    { platform: "Twitter", icon: <FaTwitter />, url: "https://x.com/EatsDelightful" }
  ];

  return (
    <footer className="footer-section bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="g-4">
          {/* Quick Links Section */}
          <Col lg={3} md={6}>
            <h5 className="section-title text-warning mb-4">🍴 Quick Links</h5>
            <ul className="footer-list list-unstyled">
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link to={item.path} className="text-white-50 text-decoration-none hover-text-warning">
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Customer Service Section */}
          <Col lg={3} md={6}>
            <h5 className="section-title text-warning mb-4">🛎️ Customer Service</h5>
            <ul className="footer-list list-unstyled">
              {customerServices.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link to={item.path} className="text-white-50 text-decoration-none hover-text-warning">
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Details */}
          <Col lg={3} md={6}>
            <h5 className="section-title text-warning mb-4">📍 Contact Us</h5>
            <div className="contact-info">
              <p className="text-white-50 mb-3">
                <FaMapMarkerAlt className="me-2 text-warning" />
                <span>DelightfulEats Plaza, Gourmet Street, Ahmedabad, India</span>
              </p>
              <p className="text-white-50 mb-3">
                <FaPhoneAlt className="me-2 text-warning" />
                <span>+91 12345 67890</span>
              </p>
              <p className="text-white-50 mb-3">
                <FaEnvelope className="me-2 text-warning" />
                <span>support@delightfuleats.com</span>
              </p>
              <p className="text-white-50">
                <BsClockFill className="me-2 text-warning" />
                <span>Mon - Fri: 9 AM - 6 PM</span>
              </p>
            </div>
          </Col>

          {/* Social Links and App Section */}
          <Col lg={3} md={6}>
            <div className="text-center text-md-start">
              <h5 className="section-title text-warning mb-4">🌐 Follow Us</h5>
              <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mb-4">
                {socialLinks.map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url} 
                    className="text-white bg-warning bg-opacity-10 rounded-circle p-2 hover-bg-warning hover-text-dark"
                    aria-label={platform.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
              
              <h5 className="section-title text-warning mt-4 mb-3">📱 Download Our App</h5>
              <div className="app-icons d-flex flex-column flex-md-row gap-2 justify-content-center justify-content-md-start">
                <a href="#" className="btn btn-outline-warning btn-sm d-flex align-items-center">
                  <BsDownload className="me-1" />
                  <span>Google Play</span>
                </a>
                <a href="#" className="btn btn-outline-warning btn-sm d-flex align-items-center">
                  <BsDownload className="me-1" />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5">
          <Col className="text-center">
            <hr className="border-secondary" />
            <p className="mb-0 text-white-50">
              © {new Date().getFullYear()} DelightfulEats | Made with ❤️ by Dipak
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}