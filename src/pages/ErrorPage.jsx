import React from 'react';
import '../assets/css/404page.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <ErrorPageContent />
        </>
    );
}

const ErrorPageContent = () => {
    return (
        <>
            <section className="page_404 d-flex align-items-center justify-content-center">
                <div className="container text-center">
                    <div className="four_zero_four_bg">
                        <h1 className="text-dark">404</h1>
                    </div>

                    <div className="contant_box_404 mt-1">
                        <h3 className="h2 mb-1">Oops! You seem to be lost.</h3>
                        <p className="mb-2">
                            The page you're looking for might be removed or doesn't exist.
                        </p>

                        <Link to="/" className="btn btn-primary">
                            Return Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ErrorPage;
