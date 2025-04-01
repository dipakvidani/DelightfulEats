import React, { useState, useEffect } from 'react';
import '../assets/css/loader.css';

const Loader = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const tips = [
    "Letting meat rest after cooking keeps it juicier",
    "Always sharpen your knives before chopping",
    "Room temperature eggs incorporate better in batter",
    "Salt your pasta water like the sea",
    "Fresh herbs added at the end preserve their flavor",
    "Preheating your pans ensures even cooking",
    "Pat meat dry before searing for better browning",
    "Taste as you cook to adjust seasoning"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <div className="recipe-loader">
      <div className="loader-container">
        {/* Animated Ingredients */}
        <div className="ingredients">
          <div className="ingredient tomato"></div>
          <div className="ingredient onion"></div>
          <div className="ingredient herb"></div>
          <div className="ingredient spice"></div>
        </div>
        
        {/* Cooking Pot */}
        <div className="cooking-pot">
          <div className="pot-top"></div>
          <div className="pot-body"></div>
          <div className="steam">
            <div className="steam-particle s1"></div>
            <div className="steam-particle s2"></div>
            <div className="steam-particle s3"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="loading-text">
          Preparing your recipes
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
        
        {/* Cooking Tip */}
        <div className="cooking-tip">
          Chef's Tip: {tips[currentTip]}
        </div>
      </div>
    </div>
  );
};

export default Loader;