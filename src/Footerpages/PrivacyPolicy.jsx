import React from 'react';
import { Footer, Header } from '../comman';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(to bottom, #FFB347, #FFCC33)' }}>
        <div className="container">
          <div className="card shadow-lg p-4 text-white" style={{ backgroundColor: '#8B4513' }}>
            <h1 className="text-center text-light mb-4">
              <i className="bi bi-shield-lock-fill"></i> Privacy Policy
            </h1>
            <p className="text-center text-warning mb-5">
              Your privacy is the secret ingredient at <strong>DelightfulEats</strong>.
            </p>
            
            {/* Information We Collect */}
            <h3 className="text-warning">
              <i className="bi bi-basket3-fill"></i> Information We Collect
            </h3>
            <p>We collect different types of information to serve you the best recipes and experiences:</p>
            <ul>
              <li><i className="bi bi-person-circle text-danger"></i> <strong>Personal Information:</strong> Name, email, and phone number.</li>
              <li><i className="bi bi-credit-card-2-back-fill text-primary"></i> <strong>Payment Details:</strong> For recipe purchases or ingredient deliveries.</li>
              <li><i className="bi bi-clipboard-data text-success"></i> <strong>Recipe Preferences:</strong> Favorite cuisines and saved recipes.</li>
              <li><i className="bi bi-laptop text-info"></i> <strong>Device and Usage Data:</strong> To improve your browsing experience.</li>
            </ul>

            {/* How We Use Your Information */}
            <h3 className="text-light mt-4">
              <i className="bi bi-egg-fried"></i> How We Use Your Information
            </h3>
            <p>We use your information for purposes like:</p>
            <ul>
              <li><i className="bi bi-bag-heart-fill text-danger"></i> Delivering your favorite recipes and meals.</li>
              <li><i className="bi bi-chat-left-text-fill text-warning"></i> Offering personalized culinary tips and cooking suggestions.</li>
              <li><i className="bi bi-star-fill text-info"></i> Improving our service with feedback and insights.</li>
              <li><i className="bi bi-lock-fill text-success"></i> Keeping your data secure and ensuring privacy.</li>
            </ul>

            {/* Sharing Your Information */}
            <h3 className="text-warning mt-4">
              <i className="bi bi-people-fill"></i> Sharing Your Information
            </h3>
            <p>We only share your data when necessary with:</p>
            <ul>
              <li><i className="bi bi-truck text-success"></i> Delivery partners for order fulfillment.</li>
              <li><i className="bi bi-bar-chart-line-fill text-primary"></i> Analytics providers to improve your experience.</li>
              <li><i className="bi bi-bank2 text-info"></i> Payment processors for secure transactions.</li>
            </ul>

            {/* Security and Data Protection */}
            <h3 className="text-danger mt-4">
              <i className="bi bi-shield-check"></i> Security and Data Protection
            </h3>
            <p>Your data is encrypted and securely stored using the latest technologies. We constantly monitor our systems to ensure protection.</p>

            {/* Your Rights */}
            <h3 className="text-success mt-4">
              <i className="bi bi-check-circle-fill"></i> Your Rights
            </h3>
            <p>You have the right to:</p>
            <ul>
              <li><i className="bi bi-pencil-square text-warning"></i> Update or correct your information.</li>
              <li><i className="bi bi-trash-fill text-danger"></i> Request data deletion.</li>
              <li><i className="bi bi-envelope-exclamation text-info"></i> Manage your communication preferences.</li>
            </ul>
            <p>Contact us at <a href="mailto:support@delightfuleats.com" className="text-light">support@delightfuleats.com</a> for any requests.</p>

            {/* Contact Us */}
            <h3 className="text-info mt-4">
              <i className="bi bi-telephone-fill"></i> Contact Us
            </h3>
            <p>We're always happy to assist you. Get in touch with our support team:</p>
            <address>
              <strong>DelightfulEats Support Team</strong><br />
              <i className="bi bi-envelope-at-fill text-warning"></i> Email: <a href="mailto:support@delightfuleats.com" className="text-light">support@delightfuleats.com</a><br />
              <i className="bi bi-telephone-fill text-success"></i> Phone: +1-234-567-890
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
