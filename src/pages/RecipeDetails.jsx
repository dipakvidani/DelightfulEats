import React from 'react';
import { Badge, Card, Col, Container, Row, Form, Button, ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Footer, Header, Loader } from '../comman/index';
import { FaClock, FaUtensils, FaUserFriends, FaFire, FaStar, FaRegStar, FaStarHalfAlt, FaBreadSlice, FaGlassCheers, FaCoffee } from 'react-icons/fa';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [feedback, setFeedback] = React.useState({ name: '', comment: '', rating: '' });

  const fetchRecipe = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRecipe();
  }, [id]);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback({ name: '', comment: '', rating: '' });
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }

    return stars;
  };

  const getMealTypeIcon = (mealType) => {
    switch (mealType.toLowerCase()) {
      case 'breakfast':
        return <FaCoffee className="me-1" />;
      case 'lunch':
        return <FaBreadSlice className="me-1" />;
      case 'dinner':
        return <FaUtensils className="me-1" />;
      case 'snack':
        return <FaGlassCheers className="me-1" />;
      default:
        return <FaUtensils className="me-1" />;
    }
  };

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Header />
          <Container className="recipe-detail-container">
            {/* Hero Image Section */}
            <Row className="my-4">
              <Col className="hero-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="recipe-hero-image"
                />
                <div className="recipe-title-overlay">
                  <h1 className="recipe-title">{recipe.name}</h1>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="rating-badge">
                      {renderRatingStars(recipe.rating)}
                      <span className="ms-2">{recipe.rating} ({recipe.reviewCount} reviews)</span>
                    </div>
                    {/* Meal Type Badge */}
                    {recipe.mealType?.length > 0 && (
                      <div className="d-flex flex-wrap gap-2">
                        {recipe.mealType.map((type, index) => {
                          // Define color classes for different meal types
                          const colorMap = {
                            breakfast: 'bg-warning text-dark',    // Yellow
                            lunch: 'bg-success text-white',       // Green
                            dinner: 'bg-primary text-white',      // Blue
                            snack: 'bg-info text-white',          // Teal
                            dessert: 'bg-danger text-white',      // Red
                            brunch: 'bg-secondary text-white'     // Gray
                          };

                          // Default to purple if meal type not in map
                          const badgeClass = colorMap[type.toLowerCase()] || 'bg-purple text-white';

                          return (
                            <Badge
                              key={index}
                              className={`meal-type-badge d-flex align-items-center ${badgeClass}`}
                              style={{
                                padding: '0.35rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.85rem'
                              }}
                            >
                              {getMealTypeIcon(type)}
                              <span className="ms-1 text-capitalize">{type}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>

            {/* Main Recipe Card */}
            <Row className="mb-5">
              <Col lg={12}>
                <Card className="recipe-main-card">
                  <Card.Body>
                    {/* Tags and Meal Types Section */}
                    <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                      {/* Tags */}
                      <div className="tags-section">
                        {recipe.tags?.map((tag, index) => (
                          <Badge key={index} className="tag-badge text-light me-2">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Meal Types */}
                      {recipe.mealType?.length > 0 && (
                        <div className="meal-types-section">
                          {recipe.mealType?.map((type, index) => {
                            // Define different colors for meal types
                            const mealTypeColors = [
                              'bg-primary',    // Blue
                              'bg-success',    // Green
                              'bg-warning',    // Yellow
                              'bg-danger',     // Red
                              'bg-info',       // Teal
                              'bg-secondary'   // Gray
                            ];

                            // Get color based on index (cycles through colors if more than defined)
                            const badgeColor = mealTypeColors[index % mealTypeColors.length];

                            return (
                              <Badge
                                key={index}
                                className={`meal-type-badge me-2 ${badgeColor} text-white`}
                                style={{
                                  marginBottom: '4px', // Add vertical spacing
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {getMealTypeIcon(type)}
                                <span style={{ marginLeft: '4px' }}>{type}</span>
                              </Badge>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Quick Info Section */}
                    <div className="quick-info-grid mb-4">
                      <div className="info-item">
                        <FaClock className="info-icon" />
                        <div>
                          <div className="info-label">Prep Time</div>
                          <div className="info-value">{recipe.prepTimeMinutes} mins</div>
                        </div>
                      </div>
                      <div className="info-item">
                        <FaUtensils className="info-icon" />
                        <div>
                          <div className="info-label">Cook Time</div>
                          <div className="info-value">{recipe.cookTimeMinutes} mins</div>
                        </div>
                      </div>
                      <div className="info-item">
                        <FaUserFriends className="info-icon" />
                        <div>
                          <div className="info-label">Servings</div>
                          <div className="info-value">{recipe.servings}</div>
                        </div>
                      </div>
                      <div className="info-item">
                        <FaFire className="info-icon" />
                        <div>
                          <div className="info-label">Calories</div>
                          <div className="info-value">{recipe.caloriesPerServing} kcal</div>
                        </div>
                      </div>
                    </div>

                    {/* Difficulty and Cuisine Section */}
                    <div className="d-flex flex-wrap gap-4 mb-4">
                      <div className="difficulty-section">
                        <div className="difficulty-label">Difficulty:</div>
                        <div className="difficulty-value">{recipe.difficulty}</div>
                        <ProgressBar
                          now={recipe.difficulty === 'Easy' ? 33 :
                            recipe.difficulty === 'Medium' ? 66 : 100}
                          className="difficulty-progress"
                        />
                      </div>

                      <div className="cuisine-section">
                        <div className="cuisine-label">Cuisine:</div>
                        <div className="cuisine-value">
                          <Badge bg="info" className="text-light">
                            {recipe.cuisine}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Ingredients Section */}
                    <div className="ingredients-section mb-4">
                      <h3 className="section-title">
                        <span className="section-icon">🥕</span> Ingredients
                      </h3>
                      <ul className="ingredients-list">
                        {recipe.ingredients?.map((ingredient, index) => (
                          <li key={index} className="ingredient-item">
                            <span className="ingredient-bullet">•</span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instructions Section */}
                    <div className="instructions-section">
                      <h3 className="section-title">
                        <span className="section-icon">📝</span> Instructions
                      </h3>
                      <ol className="instructions-list list-unstyled">
                        {recipe.instructions?.map((step, index) => (
                          <li key={index} className="instruction-step d-flex mb-3">
                            <div className="step-number d-flex align-items-center justify-content-center me-3">
                              {index + 1}
                            </div>
                            <div className="step-content flex-grow-1">
                              {step}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Feedback Section */}
            <Row className="mb-5">
              <Col lg={8} className="mx-auto">
                <Card className="feedback-card">
                  <Card.Body>
                    <h3 className="feedback-title">
                      <span className="feedback-icon">💬</span> Share Your Thoughts
                    </h3>
                    <Form onSubmit={handleFeedbackSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={feedback.name}
                          onChange={handleFeedbackChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Rating</Form.Label>
                        <div className="rating-select">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <React.Fragment key={star}>
                              <input
                                type="radio"
                                id={`star-${star}`}
                                name="rating"
                                value={star}
                                checked={parseInt(feedback.rating) === star}
                                onChange={handleFeedbackChange}
                                required
                              />
                              <label htmlFor={`star-${star}`}>
                                <FaStar className="rating-star" />
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Your Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Share your experience with this recipe..."
                          name="comment"
                          value={feedback.comment}
                          onChange={handleFeedbackChange}
                          required
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="submit-button">
                        Submit Review
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Footer />

          {/* CSS Styles */}
          <style jsx>{`
            .recipe-detail-container {
              max-width: 1200px;
              padding: 0 15px;
            }
            
            .hero-image-container {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            }
            
            .recipe-hero-image {
              width: 100%;
              height: 400px;
              object-fit: cover;
              display: block;
            }
            
            .recipe-title-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(transparent, rgba(0,0,0,0.7));
              padding: 2rem;
              color: white;
            }

            /* Add this if you want to use purple color */
            .bg-purple {
              background-color: #6f42c1;
            }

            .meal-type-badge {
              transition: transform 0.2s ease;
            }

            .meal-type-badge:hover {
              transform: translateY(-2px);
            }
            
            .recipe-title {
              font-weight: 700;
              margin-bottom: 0.5rem;
              text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            
            .rating-badge {
              display: flex;
              align-items: center;
              background: rgba(255,255,255,0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 20px;
              width: fit-content;
            }

            .meal-type-badge {
              padding: 6px 12px;
              border-radius: 20px;
              font-weight: 500;
              display: inline-flex;
              align-items: center;
            }
            
            .recipe-main-card {
              border: none;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }
            
            .tags-section {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .tag-badge {
              background: #6c757d;
              color: white;
              padding: 6px 12px;
              border-radius: 20px;
              font-weight: 500;
            }

            .meal-type-badge {
              background: #17a2b8;
              color: white;
              padding: 6px 12px;
              border-radius: 20px;
              font-weight: 500;
            }
            
            .quick-info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 1.5rem;
              padding: 1rem 0;
            }
            
            .info-item {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 12px;
              background: #f8fafc;
              border-radius: 8px;
            }
            
            .info-icon {
              font-size: 1.5rem;
              color: #3b82f6;
            }
            
            .info-label {
              font-size: 0.9rem;
              color: #64748b;
            }
            
            .info-value {
              font-weight: 600;
              color: #1e293b;
            }
            
            .difficulty-section {
              background: #f8fafc;
              padding: 1rem;
              border-radius: 8px;
              margin-bottom: 1.5rem;
              min-width: 100%;
            }

            .cuisine-section {
              background: #f8fafc;
              padding: 1rem;
              border-radius: 8px;
              margin-bottom: 1.5rem;
              min-width: 100%;
            }
            
            .difficulty-label, .cuisine-label {
              font-size: 0.9rem;
              color: #64748b;
              margin-bottom: 4px;
            }
            
            .difficulty-value, .cuisine-value {
              font-weight: 600;
              margin-bottom: 8px;
            }
            
            .difficulty-progress {
              height: 6px;
              border-radius: 3px;
            }
            
            .difficulty-progress .progress-bar {
              background-color: ${recipe.difficulty === 'Easy' ? '#10b981' :
              recipe.difficulty === 'Medium' ? '#f59e0b' : '#ef4444'};
            }
            
            .section-title {
              display: flex;
              align-items: center;
              gap: 10px;
              color: #1e293b;
              margin-bottom: 1.5rem;
              padding-bottom: 8px;
              border-bottom: 2px solid #e2e8f0;
            }
            
            .section-icon {
              font-size: 1.5rem;
            }
            
            .ingredients-list {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 12px;
              list-style: none;
              padding: 0;
            }
            
            .ingredient-item {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 8px 12px;
              background: #f8fafc;
              border-radius: 6px;
            }
            
            .ingredient-bullet {
              color: #3b82f6;
              font-weight: bold;
            }
            
           .instructions-list {
            counter-reset: step-counter;
            padding-left: 0;
          }

          .instruction-step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }

          .step-number {
            width: 32px;
            height: 32px;
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            margin-right: 1rem;
            margin-top: 10px;
          }

          .step-content {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            flex-grow: 1;
            line-height: 1.6;
}
            .feedback-card {
              border: none;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
              background: #f8fafc;
            }
            
            .feedback-title {
              display: flex;
              align-items: center;
              gap: 10px;
              color: #1e293b;
              margin-bottom: 1.5rem;
            }
            
            .feedback-icon {
              font-size: 1.5rem;
            }
            
            .rating-select {
              display: flex;
              gap: 8px;
              margin-top: 8px;
            }
            
            .rating-select input[type="radio"] {
              display: none;
            }
            
            .rating-star {
              font-size: 1.8rem;
              color: #e2e8f0;
              cursor: pointer;
              transition: color 0.2s;
            }
            
            .rating-select input[type="radio"]:checked ~ label .rating-star,
            .rating-select input[type="radio"]:hover ~ label .rating-star {
              color: #f59e0b;
            }
            
            .submit-button {
              width: 100%;
              padding: 12px;
              font-weight: 600;
              border-radius: 8px;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default RecipeDetails;