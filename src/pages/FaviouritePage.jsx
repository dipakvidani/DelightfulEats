// FavouritePage.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert, Button, Spinner } from 'react-bootstrap';
import { RecipeCard } from '../Components';
import { Footer, Header } from '../comman';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavouritePage = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load favorites and listen for changes
    useEffect(() => {
        const loadFavorites = () => {
            try {
                const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
                setFavorites(storedFavorites);
            } catch (error) {
                console.error("Error loading favorites:", error);
                toast.error("Failed to load your favorites");
            } finally {
                setLoading(false);
            }
        };

        // Initial load
        loadFavorites();

        // Listen for storage events
        const handleStorageChange = (e) => {
            if (e.key === 'favoriteRecipes') {
                loadFavorites();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const removeFromFavorites = (recipeId) => {
        try {
            const updatedFavorites = favorites.filter(recipe => recipe.id !== recipeId);
            setFavorites(updatedFavorites);
            localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
            toast.success("Removed from favorites!");
        } catch (error) {
            console.error("Error removing favorite:", error);
            toast.error("Failed to remove from favorites");
        }
    };

    if (loading) {
        return (
            <>
                <Header />
                <Container className="text-center my-5">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Loading your favorite recipes...</p>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <Container className="my-4">
                <h1 className="my-4 text-center">
                    <FaHeart className="text-danger me-2" />
                    Your Favorite Recipes
                </h1>
                
                {favorites.length > 0 ? (
                    <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
                        {favorites.map((recipe) => (
                            <Col key={recipe.id}>
                                <RecipeCard 
                                    recipe={recipe}
                                    isFavorite={true}
                                    onToggleFavorite={() => removeFromFavorites(recipe.id)}
                                />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="text-center py-5">
                        <Alert variant="info">
                            <h4>No favorite recipes yet</h4>
                            <p>Start adding recipes to see them here!</p>
                            <Button 
                                variant="primary" 
                                href="/recipes"
                                className="mt-3"
                            >
                                Browse Recipes
                            </Button>
                        </Alert>
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default FavouritePage;