import React from 'react';
import { Footer, Header } from '../comman';

const HealthTips = () => {
  const tips = [
    { id: 1, title: 'Stay Hydrated', description: 'Drink at least 8 glasses of water a day to keep your body hydrated.', color: '#00bcd4' },
    { id: 2, title: 'Eat a Balanced Diet', description: 'Include fruits, vegetables, lean proteins, and whole grains in your diet.', color: '#ff9800' },
    { id: 3, title: 'Regular Exercise', description: 'Engage in at least 30 minutes of moderate exercise daily. This keeps you physically active and reduces health risks.', color: '#4caf50' },
    { id: 4, title: 'Get Enough Sleep', description: 'Aim for 7-8 hours of sleep each night to maintain good health and mental well-being.', color: '#673ab7' },
    { id: 5, title: 'Manage Stress', description: 'Practice relaxation techniques like meditation, yoga, or breathing exercises to stay calm and focused.', color: '#e91e63' },
    { id: 6, title: 'Limit Sugar and Salt', description: 'Reduce your intake of added sugar and salt to maintain a healthy blood pressure and heart health.', color: '#ff5722' },
    { id: 7, title: 'Maintain Social Connections', description: 'Stay connected with friends and family to support emotional well-being and reduce stress.', color: '#009688' },
    { id: 8, title: 'Practice Good Hygiene', description: 'Wash your hands frequently and maintain good hygiene to prevent infections and illnesses.', color: '#607d8b' },
    { id: 9, title: 'Stay Active Mentally', description: 'Engage in activities like reading, puzzles, or learning a new skill to keep your brain sharp.', color: '#3f51b5' },
    { id: 10, title: 'Avoid Smoking and Alcohol', description: 'Limit or avoid smoking and excessive alcohol consumption for better lung and liver health.', color: '#f44336' },
    { id: 11, title: 'Get Regular Check-ups', description: 'Schedule routine health check-ups to detect and prevent medical conditions early.', color: '#8bc34a' },
    { id: 12, title: 'Maintain a Healthy Weight', description: 'Monitor your weight and maintain a balanced diet and exercise routine.', color: '#795548' },
    { id: 13, title: 'Stay Positive', description: 'Maintain a positive mindset and practice gratitude to improve mental health.', color: '#ffeb3b' },
    { id: 14, title: 'Practice Safe Sun Exposure', description: 'Protect your skin from UV rays by wearing sunscreen and staying shaded.', color: '#ff9800' },
    { id: 15, title: 'Stay Active Throughout the Day', description: 'Take breaks, stretch, and avoid sitting for long periods to reduce the risk of health issues.', color: '#009688' }
  ];

  // Function to calculate text color based on background
  const getTextColor = (bgColor) => {
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? '#000' : '#fff'; 
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">🧘 Health Tips for a Better Lifestyle</h1>

        <div className="row g-4">
          {tips.map((tip) => (
            <div key={tip.id} className="col-md-4">
              <div
                className="p-4 rounded shadow-lg"
                style={{
                  backgroundColor: tip.color,
                  color: getTextColor(tip.color),
                  height: '220px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3>{tip.title}</h3>
                <p className="mb-0" style={{ fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '120px' }}>
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthTips;
