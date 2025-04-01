import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaUpload, FaPlus, FaTrash } from "react-icons/fa";
import { Footer, Header } from "../comman";

const SubmitRecipe = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addInstruction = () => setInstructions([...instructions, ""]);
  const removeInstruction = (index) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        <Card className="p-4 shadow-lg" style={{ backgroundColor: '#FFFAF0', borderRadius: '20px' }}>
          <h2 className="text-center mb-4 text-primary">Submit Your Recipe 🍲</h2>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="recipeName">
                  <Form.Label className="text-success">Recipe Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter recipe name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="recipeImage">
                  <Form.Label className="text-success">Recipe Image</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
                  <small className="text-muted">
                    <FaUpload className="me-1" /> Upload a high-quality image
                  </small>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Recipe Preview"
                      className="img-fluid mt-2 rounded shadow"
                      style={{ maxHeight: "200px", border: '5px solid #FFB6C1' }}
                    />
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="recipeDescription">
              <Form.Label className="text-success">Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tell us about your recipe..." />
            </Form.Group>

            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="prepTime">
                  <Form.Label className="text-success">Prep Time (minutes)</Form.Label>
                  <Form.Control type="number" min="0" placeholder="10" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="cookTime">
                  <Form.Label className="text-success">Cook Time (minutes)</Form.Label>
                  <Form.Control type="number" min="0" placeholder="30" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="servings">
                  <Form.Label className="text-success">Servings</Form.Label>
                  <Form.Control type="number" min="1" placeholder="4" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ingredients">
              <Form.Label className="text-success">Ingredients</Form.Label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    placeholder={`Ingredient ${index + 1}`}
                    className="me-2"
                    value={ingredient}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index] = e.target.value;
                      setIngredients(newIngredients);
                    }}
                  />
                  <Button variant="outline-danger" onClick={() => removeIngredient(index)}>
                    <FaTrash />
                  </Button>
                </div>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addIngredient}>
                <FaPlus className="me-1" /> Add Ingredient
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="instructions">
              <Form.Label className="text-success">Instructions</Form.Label>
              {instructions.map((step, index) => (
                <div key={index} className="d-flex align-items-start mb-3">
                  <span className="me-2 mt-2 fw-bold text-warning">{index + 1}.</span>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder={`Step ${index + 1}`}
                    className="me-2"
                    value={step}
                    onChange={(e) => {
                      const newInstructions = [...instructions];
                      newInstructions[index] = e.target.value;
                      setInstructions(newInstructions);
                    }}
                  />
                  <Button variant="outline-danger" className="mt-2" onClick={() => removeInstruction(index)}>
                    <FaTrash />
                  </Button>
                </div>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addInstruction}>
                <FaPlus className="me-1" /> Add Step
              </Button>
            </Form.Group>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button variant="secondary" type="button" className="me-md-2">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit Recipe
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default SubmitRecipe;
