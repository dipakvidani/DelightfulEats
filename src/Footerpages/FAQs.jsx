import React from 'react';
import { Footer, Header } from '../comman';

export default function FAQs() {
  const containerStyle = {
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const faqs = [
    { question: 'How can I explore recipes?', answer: 'You can browse through categories or use the search bar to find specific recipes.' },
    { question: 'Do I need to create an account to access recipes?', answer: 'No, you can view recipes without an account, but saving recipes requires registration.' },
    { question: 'Can I submit my own recipes?', answer: 'Yes! Create an account to submit and share your recipes with our community.' },
    { question: 'How can I contact support?', answer: 'You can reach out to our support team through the Contact Us page or via email at support@delightfuleats.com.' },
    { question: 'Can I filter recipes by cuisine or dietary preferences?', answer: 'Yes, you can filter recipes using various categories like cuisine type, preparation time, and dietary needs.' },
  ];

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>❓ Frequently Asked Questions</h1>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index} style={{ backgroundColor: '#ffffff10', border: 'none' }}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  style={{ backgroundColor: '#ffffff20', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}
                >
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{ color: '#f1f1f1' }}>
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
