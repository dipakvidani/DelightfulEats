import React from 'react';
import { Footer, Header } from '../comman';
import { useNavigate } from 'react-router-dom';

const ExploreRecipes = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#ffcc00',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#ccc',
    marginBottom: '30px',
    maxWidth: '600px'
  };

  const buttonStyle = {
    backgroundColor: '#ffcc00',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };
  const navigate=useNavigate();

  const handleExplore = () => {
    navigate('/')
  };

  return (

    <>
    <Header />
    <div style={containerStyle}>
      <h1 style={headingStyle}>🍽️ Explore Recipes</h1>
      <p style={paragraphStyle}>Discover a variety of delicious recipes from different cuisines. Start exploring now and find your next favorite dish!</p>
      <button style={buttonStyle} onClick={handleExplore}>Start Exploring</button>
    </div>
    <Footer />
    </>
  );
};

export default ExploreRecipes;
