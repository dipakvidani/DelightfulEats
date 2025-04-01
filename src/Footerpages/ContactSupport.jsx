import React, { useState } from 'react';
import { Footer, Header } from '../comman';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSupport = () => {
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
        console.log('Form Data Submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Header />
            <div style={{ padding: '50px', backgroundColor: '#f8f9fa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {/* Contact Form Section */}
                    <div style={{ width: '45%', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h1 style={{ color: '#007bff' }}>📞 Contact Support</h1>
                        <p style={{ color: '#6c757d' }}>If you have any issues or queries, feel free to reach out to our support team by filling out the form below.</p>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here"
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', minHeight: '150px' }}
                                ></textarea>
                            </div>

                            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', width: '100%', cursor: 'pointer' }}>Submit</button>
                        </form>
                    </div>

                    {/* Contact Information Section */}
                    <div className='d-flex flex-column justify-content-center' style={{ width: '45%', backgroundColor: '#007bff', color: '#fff', padding: '30px', borderRadius: '12px' }}>
                        <h2>📧 Get In Touch</h2>
                        <p>We are here to help you. Contact us through any of the following methods:</p>

                        <p><FaMapMarkerAlt /> DelightfulEats Plaza, Gourmet Street, Ahmedabad, India</p>
                        <p><FaPhoneAlt /> +91 12345 67890</p>
                        <p><FaEnvelope /> support@delightfuleats.com</p>

                        <h4>💡 Business Hours</h4>
                        <p>Monday to Friday: 9 AM - 6 PM</p>
                        <p>Saturday: 10 AM - 4 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactSupport;
