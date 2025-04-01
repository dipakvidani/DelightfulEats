import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { FaStar, FaClock, FaUtensils } from 'react-icons/fa';
import { Footer, Header } from '../comman';
import { useNavigate } from 'react-router-dom';
import { RecipeCard } from '../Components';

const TopRated = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const colors = ['#FFB6C1', '#FFD700', '#FFA07A', '#98FB98', '#87CEFA', '#FF6347'];
    const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

    useEffect(() => {
        const fetchTopRatedRecipes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();

                const sortedRecipes = data.recipes.sort((a, b) => b.rating - a.rating).slice(0, 6);

                setRecipes(sortedRecipes);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTopRatedRecipes();
    }, []);

    if (loading) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Loading top-rated recipes...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center my-5">
                <div className="alert alert-danger">Error: {error}</div>
            </Container>
        );
    }

    return (
        <>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">
                    <FaStar className="text-warning me-2" />
                    Top Rated Recipes
                </h2>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {recipes.map((recipe, index) => (
                        <Col key={recipe.id} md={4} className="mb-4">
                            <RecipeCard recipe={recipe} index={index} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default TopRated;
