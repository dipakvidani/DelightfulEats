import React from 'react';
import { Container, Accordion, Card, Alert } from 'react-bootstrap';
import {
    FaUtensils,
    FaCopyright,
    FaUserShield,
    FaExclamationTriangle,
    FaBalanceScale,
    FaRegHandshake
} from 'react-icons/fa';
import { Footer, Header } from '../comman';

const TermsConditions = () => {
    return (

        <>
            <Header />
            <Container className="my-5 terms-container">
                <header className="text-center mb-5">
                    <h1 className="display-4">
                        <FaUtensils className="me-3 text-danger" />
                        RecipeRise Terms & Conditions
                    </h1>
                    <p className="text-muted">Effective Date: {new Date().toLocaleDateString()}</p>
                </header>

                <Alert variant="warning" className="mb-4">
                    <FaExclamationTriangle className="me-2" />
                    By using RecipeRise, you agree to these terms. Please read them carefully.
                </Alert>

                <Accordion defaultActiveKey="0" flush>
                    {/* 1. Recipe Content */}
                    <Accordion.Item eventKey="0" className="mb-3 shadow-sm">
                        <Accordion.Header>
                            <FaUtensils className="me-3 text-success" />
                            <strong>Recipe Content & Accuracy</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled">
                                <li className="mb-2">• All recipes are provided for informational purposes only</li>
                                <li className="mb-2">• We cannot guarantee exact nutritional information or allergen content</li>
                                <li className="mb-2">• Cooking results may vary based on ingredients and equipment</li>
                                <li>• Always check for food allergies before preparation</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 2. User Submissions */}
                    <Accordion.Item eventKey="1" className="mb-3 shadow-sm">
                        <Accordion.Header>
                            <FaUserShield className="me-3 text-primary" />
                            <strong>User-Submitted Recipes</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>By submitting a recipe you agree:</h5>
                            <ul>
                                <li>You own or have rights to share the content</li>
                                <li>We may edit, format, or modify your submission for consistency</li>
                                <li>Your recipe may be featured in our newsletters or social media</li>
                                <li>You grant us a perpetual license to display the content</li>
                            </ul>
                            <div className="alert alert-danger mt-3">
                                <FaExclamationTriangle className="me-2" />
                                Do not submit recipes copied from copyrighted sources without permission
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 3. Intellectual Property */}
                    <Accordion.Item eventKey="2" className="mb-3 shadow-sm">
                        <Accordion.Header>
                            <FaCopyright className="me-3 text-warning" />
                            <strong>Copyright & Attribution</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>Original recipes remain the property of their creators. When sharing:</p>
                            <ul>
                                <li>Personal use: Share links freely</li>
                                <li>Blogs/media: Must credit RecipeRise and link back</li>
                                <li>Commercial use: Requires written permission</li>
                            </ul>
                            <p className="mt-3">
                                <strong>Recipe adaptations:</strong> Must clearly note "Adapted from RecipeRise" with link
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 4. Community Guidelines */}
                    <Accordion.Item eventKey="3" className="mb-3 shadow-sm">
                        <Accordion.Header>
                            <FaRegHandshake className="me-3 text-info" />
                            <strong>Community Standards</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h5>We reserve the right to remove:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Spam or promotional content</li>
                                        <li>Hateful or offensive language</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Dangerous or unsafe cooking methods</li>
                                        <li>Plagiarized recipes</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-2">
                                Repeated violations may result in account suspension.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 5. Liability */}
                    <Accordion.Item eventKey="4" className="mb-3 shadow-sm">
                        <Accordion.Header>
                            <FaBalanceScale className="me-3 text-danger" />
                            <strong>Limitation of Liability</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>RecipeRise is not responsible for:</p>
                            <ul>
                                <li>Foodborne illnesses from prepared recipes</li>
                                <li>Allergic reactions to listed ingredients</li>
                                <li>Damages from kitchen equipment use</li>
                                <li>Accuracy of user-submitted recipes</li>
                            </ul>
                            <p className="mt-3 fst-italic">
                                Always exercise caution when handling food and kitchen equipment.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <section className="mt-5 p-4 bg-light rounded">
                    <h4 className="mb-3">
                        <FaExclamationTriangle className="me-2" />
                        Need Help?
                    </h4>
                    <p>
                        Contact our legal team for questions about these terms:<br />
                        <strong>Email:</strong> legal@reciperise.com<br />
                        <strong>Mail:</strong> 123 Culinary Lane, Foodville, CA 90210
                    </p>
                    <p className="mt-3 small text-muted">
                        These terms may be updated periodically. Continued use constitutes acceptance of changes.
                    </p>
                </section>
            </Container>
            <Footer />
        </>
    );
};

export default TermsConditions;