import React from 'react';
import { Footer, Header } from '../comman';

export default function HelpCenter() {
  const faqs = [
    { question: 'How can I submit my own recipe?', answer: 'You can submit your recipe by visiting the Submit Recipe page and filling out the form with details and images.' },
    { question: 'How do I edit or delete my recipe?', answer: 'Login to your account, navigate to My Recipes, and you can edit or delete your submitted recipes.' },
    { question: 'How are recipes rated?', answer: 'Recipes are rated by users based on their cooking experience. Feel free to leave your own rating!' },
    { question: 'Can I save my favorite recipes?', answer: 'Yes, you can save recipes by clicking on the heart icon. They will appear in your Saved Recipes section.' },
    { question: 'Who can view my submitted recipe?', answer: 'Your recipe will be visible to all users on the DelightfulEats platform once it is approved by our team.' }
  ];

  return (
    <>
      <Header />
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#f9f9f9', 
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
        minHeight: '80vh',
      }}>
        <h1 style={{ textAlign: 'center', color: '#ff7043', marginBottom: '20px' }}>🍽️ Help Center</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>Find answers to your questions about submitting and exploring recipes on DelightfulEats.</p>

        <div className="accordion mt-4" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="accordion-item" 
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                marginBottom: '15px', 
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  style={{
                    backgroundColor: '#ff7043',
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    border: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{ backgroundColor: '#fff8f5', color: '#333', padding: '20px' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
