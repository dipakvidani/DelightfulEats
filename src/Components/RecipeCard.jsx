import React, { memo, useCallback, useState, useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaStar, FaClock, FaUtensils, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/recipecard.css'; // Ensure CSS is applied

// Function to generate pastel colors
const generatePastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 80%, 90%)`; // Light pastel colors
};

const RecipeCard = memo(({ recipe, isFavorite = false, onToggleFavorite }) => {
    const navigate = useNavigate();
    const [cardColor, setCardColor] = useState('');

    useEffect(() => {
        setCardColor(generatePastelColor());
    }, []);

    const handleToggleFavorite = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite(recipe);
    }, [onToggleFavorite, recipe]);

    const handleViewRecipe = useCallback(() => {
        navigate(`/recipes/${recipe.id}`);
    }, [navigate, recipe.id]);

    const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

    return (
        <Card
            className="h-100 shadow-sm border-0 recipe-card"
            style={{ backgroundColor: cardColor }}
            onClick={handleViewRecipe}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && handleViewRecipe()}
        >
            {/* Image Section with Favorite Button */}
            <div className="position-relative">
                <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={`${recipe.name} dish`}
                    style={{ height: '200px', objectFit: 'cover' }}
                    loading="lazy"
                />
                <button
                    onClick={handleToggleFavorite}
                    className="position-absolute top-0 end-0 m-2 bg-white rounded-circle p-2 border-0 favorite-btn"
                    style={{ width: '40px', height: '40px', zIndex: 1 }}
                >
                    {isFavorite ? (
                        <FaHeart className="text-danger" size={18} />
                    ) : (
                        <FaRegHeart className="text-danger" size={18} />
                    )}
                </button>
            </div>

            {/* Card Body */}
            <Card.Body className="d-flex flex-column">
                <Card.Title className="h5 mb-3 text-truncate">{recipe.name}</Card.Title>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <FaStar className="text-warning me-1" />
                        <span>{recipe.rating.toFixed(1)}</span>
                    </div>
                    <Badge bg="primary" pill className="text-capitalize">
                        {recipe.difficulty}
                    </Badge>
                </div>

                <div className="d-flex mb-3 text-muted">
                    <div className="me-3 d-flex align-items-center">
                        <FaClock className="me-1" />
                        <span>{totalTime} min</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaUtensils className="me-1" />
                        <span>{recipe.servings} serving{recipe.servings !== 1 ? 's' : ''}</span>
                    </div>
                </div>

                <div className="mb-3">
                    <strong>Cuisine:</strong> <span className="text-capitalize">{recipe.cuisine}</span>
                </div>

                <Button
                    variant="primary"
                    className="w-100 mt-auto"
                    onClick={handleViewRecipe}
                    aria-label={`View details for ${recipe.name}`}
                    style={{
                        backgroundColor: '#6c5ce7',
                        borderColor: '#6c5ce7',
                        ':hover': {
                            backgroundColor: '#5649c0',
                            borderColor: '#5649c0'
                        }
                    }}
                >
                    View Recipe
                </Button>
            </Card.Body>
        </Card >
    );
});

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        difficulty: PropTypes.string.isRequired,
        prepTimeMinutes: PropTypes.number.isRequired,
        cookTimeMinutes: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        cuisine: PropTypes.string.isRequired
    }).isRequired,
    isFavorite: PropTypes.bool,
    onToggleFavorite: PropTypes.func.isRequired
};

export default RecipeCard;
