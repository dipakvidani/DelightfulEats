import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Footer, Header } from '../comman';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        padding: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px'
    };

    const formStyle = {
        flex: '1',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '12px',
        fontSize: '18px',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '100%',
    };

    const contactInfoStyle = {
        flex: '1',
        padding: '30px',
        backgroundColor: '#007baa',
        color: '#fff',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const iconStyle = {
        marginRight: '10px',
        color: '#ffc107'
    };

    return (
        <>
            <Header />
            <div style={containerStyle}>
                {/* Contact Form Section */}
                <div style={formStyle}>
                    <h1 style={{ color: '#007bff' }}>Contact Us</h1>
                    <p style={{ color: '#666' }}>Fill out the form below and our support team will reach out to you as soon as possible.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={inputStyle}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={inputStyle}
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            rows="5"
                            style={inputStyle}
                            required
                        ></textarea>
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div style={contactInfoStyle}>
                    <h2>Get in Touch</h2>
                    <p>We are here to help you. Contact us through any of the following channels:</p>
                    <div>
                        <FaMapMarkerAlt style={iconStyle} />
                        DelightfulEats Plaza, Gourmet Street, Ahmedabad, India
                    </div>
                    <div>
                        <FaPhoneAlt style={iconStyle} />
                        +91 12345 67890
                    </div>
                    <div>
                        <FaEnvelope style={iconStyle} />
                        support@delightfuleats.com
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
