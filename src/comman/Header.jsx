import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaSearch,
    FaHome,
    FaUtensils,
    FaTags,
    FaUser,
    FaSignInAlt,
    FaUserPlus,
    FaInfoCircle,
    FaBookmark,
    FaSignOutAlt,
    FaHeart
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/header.css';

const Header = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [headerData, setHeaderData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            navigate(`/recipes/search/${trimmedQuery}`);
        }
        setQuery('');
    };

    const fetchDataForHeader = async () => {
        try {
            const response = await fetch("https://dummyjson.com/recipes");
            const data = await response.json();
            setHeaderData(data);
        } catch (error) {
            console.error("Error fetching header data:", error);
            toast.error("Failed to load navigation data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleAuthAction = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            toast.success("Logged out successfully!");
        } else {
            navigate('/log-in');
        }
    };

    useEffect(() => {
        fetchDataForHeader();
    }, []);

    const iconStyle = (color) => ({
        color,
        marginRight: '8px',
        transition: 'all 0.2s ease-in-out'
    });

    const cuisineColors = ['#ff7043', '#4fc3f7', '#ffb74d', '#ba68c8', '#4db6ac'];
    const tagColors = ['#ef5350', '#42a5f5', '#66bb6a', '#ffca28', '#ab47bc'];

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/" style={{ fontFamily: "'Pacifico', cursive" }}>
                        <FaUtensils style={iconStyle('#ff7043')} size={24} />
                        <span className="ms-2">DelightfulEats</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center px-3" to="/">
                                    <FaHome style={iconStyle('#4fc3f7')} /> Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center px-3" to="/favorites">
                                    <FaHeart style={iconStyle('#ff4081')} /> Favorites
                                </Link>
                            </li>

                            {/* Cuisine Dropdown */}
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle px-3" id="cuisineDropdown" data-bs-toggle="dropdown">
                                    <FaUtensils style={iconStyle('#ffb74d')} /> Cuisine
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                    {isLoading ? (
                                        <li className="dropdown-item">Loading...</li>
                                    ) : headerData?.recipes?.length ? (
                                        [...new Set(headerData.recipes.map(recipe => recipe.cuisine))]
                                            .sort()
                                            .map((cuisine, index) => (
                                                <li key={index}>
                                                    <button
                                                        className="dropdown-item"
                                                        onClick={() => navigate(`/recipes/cuisine/${cuisine}`)}
                                                        style={{ color: cuisineColors[index % cuisineColors.length] }}
                                                    >
                                                        <FaUtensils className="me-2" /> {cuisine}
                                                    </button>
                                                </li>
                                            ))
                                    ) : (
                                        <li className="dropdown-item text-muted">No cuisines available</li>
                                    )}
                                </ul>
                            </li>

                            {/* Tags Dropdown */}
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle px-3" id="tagsDropdown" data-bs-toggle="dropdown">
                                    <FaTags style={iconStyle('#ba68c8')} /> Tags
                                </button>
                                <div className="dropdown-menu dropdown-menu-dark p-3" style={{ maxHeight: '60vh', overflowY: 'auto', minWidth: '300px' }}>
                                    {isLoading ? (
                                        <div className="dropdown-item">Loading...</div>
                                    ) : headerData?.recipes?.length ? (
                                        <div className="row">
                                            {[...new Set(headerData.recipes.flatMap(recipe => recipe.tags || []))]
                                                .sort()
                                                .map((tag, index) => (
                                                    <div key={index} className="col-6 mb-2">
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => navigate(`/recipes/tag/${tag}`)}
                                                            style={{ color: tagColors[index % tagColors.length] }}
                                                        >
                                                            <FaTags className="me-2" /> {tag}
                                                        </button>
                                                    </div>
                                                ))}
                                        </div>
                                    ) : (
                                        <div className="dropdown-item text-muted">No tags available</div>
                                    )}
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center px-3" to="/about-us">
                                    <FaInfoCircle style={iconStyle('#4db6ac')} /> About Us
                                </Link>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <form className="d-flex me-3" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    className="form-control bg-dark text-light border-secondary"
                                    type="search"
                                    placeholder="🔍 Search recipes..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    style={{ minWidth: '200px' }}
                                />
                                <button className="btn btn-outline-light" type="submit">
                                    <FaSearch />
                                </button>
                            </div>
                        </form>

                        {/* Auth Buttons */}
                        <div className="d-flex">
                            {isLoggedIn ? (
                                <div className="dropdown">
                                    <button className="btn btn-outline-light dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown">
                                        <FaUser className="fs-5" />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="/profile"><FaUser className="me-2" /> Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/favorites"><FaHeart className="me-2" /> Favorites</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button className="dropdown-item text-danger" onClick={handleAuthAction}>
                                                <FaSignOutAlt className="me-2" /> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <button className="btn btn-outline-light me-2" onClick={() => navigate('/log-in')}><FaSignInAlt className="me-1" /> Login</button>
                                    <button className="btn btn-danger" onClick={() => navigate('/sign-up')}><FaUserPlus className="me-1" /> Sign Up</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
