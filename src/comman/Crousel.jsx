import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Loader } from './index';
import '../assets/css/crousel.css';

const Crousel = ({ recipes }) => {
    // Calculate total time once per recipe
    const   getTotalTime = (prepTime, cookTime) => prepTime + cookTime;

    return (
        <Carousel
            interval={3000}
            pause={false}
            indicators={recipes.length > 1} // Only show indicators if more than 1 item
            controls={recipes.length > 1} // Only show controls if more than 1 item
            className="recipe-carousel"
            aria-label="Recipe carousel"
        >
            {recipes.length > 0 ? (
                recipes.map((item) => (
                    <Carousel.Item key={item.id || item.name}> {/* Better key */}
                        <div className="carousel-image-container">
                            <img
                                className="carousel-image"
                                src={item.image}
                                alt={`${item.name} dish`} // More descriptive alt text
                                loading="lazy" // Lazy load images
                            />
                            <div className="carousel-overlay" aria-hidden="true"></div>
                        </div>

                        <Carousel.Caption className="carousel-caption text-center">
                            <div className="recipe-info d-flex flex-column align-items-center">
                                <h2 className="recipe-title text-center mb-3"> {/* Changed to h2 for better semantics */}
                                    {item.name}
                                </h2>
                                <div 
                                    className="recipe-meta d-flex justify-content-center flex-wrap gap-3"
                                    aria-label="Recipe details"
                                >
                                    <span className="rating d-flex align-items-center">
                                        <span className="star-icon me-1" aria-hidden="true">⭐</span>
                                        <strong aria-label={`Rating: ${item.rating} out of 5`}>
                                            {item.rating}
                                        </strong>
                                    </span>
                                    <span className="cuisine d-flex align-items-center">
                                        <span className="plate-icon me-1" aria-hidden="true">🍽️</span>
                                        <strong aria-label={`Cuisine: ${item.cuisine}`}>
                                            {item.cuisine}
                                        </strong>
                                    </span>
                                    <span className="time d-flex align-items-center">
                                        <span className="clock-icon me-1" aria-hidden="true">⏱️</span>
                                        <strong aria-label={`Total time: ${getTotalTime(item.prepTimeMinutes, item.cookTimeMinutes)} minutes`}>
                                            {getTotalTime(item.prepTimeMinutes, item.cookTimeMinutes)} mins
                                        </strong>
                                    </span>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            ) : (
                <Carousel.Item>
                    <div className="carousel-loader" aria-live="polite" aria-busy="true">
                        <Loader />
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default Crousel;