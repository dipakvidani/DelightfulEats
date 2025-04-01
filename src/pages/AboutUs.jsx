import React from 'react';
import { Footer, Header } from '../comman';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate=useNavigate();
    return (
        <>
            <Header />
            <div className="container py-5">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 text-gradient">
                        About <span className="text-danger">DelightfulEats</span> <span>👨‍🍳</span>
                    </h1>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        Your ultimate culinary companion for discovering, creating, and sharing delicious recipes
                    </p>
                    <div className="d-flex justify-content-center">
                        <div className="border-bottom border-3 border-danger" style={{ width: '100px' }}></div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt="Delicious food"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4">Our Story</h2>
                        <p style={{ fontSize: '1.1rem' }}>
                            Born from a passion for cooking and sharing meals, DelightfulEats began as a small recipe blog in 2015.
                            Today, we've grown into a vibrant community of home cooks and professional chefs alike, all united by
                            our love for creating memorable dining experiences.
                        </p>
                        <p style={{ fontSize: '1.1rem' }}>
                            We believe every meal tells a story, and we're here to help you write yours - one delicious recipe at a time.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="row g-4 mb-5">
                    <div className="col-md-12">
                        <h2 className="fw-bold mb-4 text-center">
                            <span className="border-bottom border-3 border-danger pb-2">Why Food Lovers Choose Us</span>
                        </h2>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-4">
                                <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                    <span className="fs-4">📚</span>
                                </div>
                                <h3 className="h5">10,000+ Recipes</h3>
                                <p className="text-muted small">
                                    From quick weekday dinners to gourmet feasts
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-4">
                                <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                    <span className="fs-4">👩‍🍳</span>
                                </div>
                                <h3 className="h5">Chef-Approved</h3>
                                <p className="text-muted small">
                                    Tested and perfected by culinary experts
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-4">
                                <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                    <span className="fs-4">⏱️</span>
                                </div>
                                <h3 className="h5">Smart Filters</h3>
                                <p className="text-muted small">
                                    Find recipes by time, diet, or ingredients
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center p-4">
                                <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                    <span className="fs-4">❤️</span>
                                </div>
                                <h3 className="h5">Community</h3>
                                <p className="text-muted small">
                                    Share and get feedback on your creations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-light p-5 rounded-3 mb-5">
                    <h2 className="fw-bold mb-4 text-center">What Our Community Says</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-warning">★</span>
                                        ))}
                                    </div>
                                    <p className="fst-italic">"Changed how I cook forever! The step-by-step videos make even complex techniques approachable."</p>
                                    <div className="d-flex align-items-center">
                                        <img src="https://randomuser.me/api/portraits/women/32.jpg"
                                            className="rounded-circle me-2"
                                            width="40"
                                            alt="User" />
                                        <span className="fw-bold">Sarah K.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-warning">★</span>
                                        ))}
                                    </div>
                                    <p className="fst-italic">"My picky eaters finally enjoy vegetables thanks to the creative kid-friendly recipes!"</p>
                                    <div className="d-flex align-items-center">
                                        <img src="https://randomuser.me/api/portraits/men/45.jpg"
                                            className="rounded-circle me-2"
                                            width="40"
                                            alt="User" />
                                        <span className="fw-bold">Michael T.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-warning">★</span>
                                        ))}
                                    </div>
                                    <p className="fst-italic">"As a beginner cook, I appreciate how every recipe includes helpful tips and substitutions."</p>
                                    <div className="d-flex align-items-center">
                                        <img src="https://randomuser.me/api/portraits/women/68.jpg"
                                            className="rounded-circle me-2"
                                            width="40"
                                            alt="User" />
                                        <span className="fw-bold">Priya M.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-4">
                    <h2 className="fw-bold mb-3">Ready to Start Cooking?</h2>
                    <p className="lead mb-4">Join our community of 2 million+ home cooks today!</p>
                    <button className="btn btn-danger btn-lg px-4 me-2" onClick={()=>navigate('/')} >
                        Browse Recipes
                    </button>
                    <button className="btn btn-outline-danger btn-lg px-4" onClick={()=>navigate('/sign-up')}>
                        Sign Up Free
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;