import React from 'react';
import { Footer, Header } from '../comman';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewAdditions = () => {
  const recipes = [
    { id: 1, name: 'Creamy Pasta', description: 'Delicious creamy pasta with white sauce and fresh herbs.', time: '30 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#1E293B' },
    { id: 2, name: 'Veggie Pizza', description: 'Crispy thin-crust pizza loaded with veggies and cheese.', time: '45 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#374151' },
    { id: 3, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake perfect for dessert lovers.', time: '60 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#111827' },
    { id: 4, name: 'Fruit Smoothie', description: 'Refreshing smoothie with a blend of fresh fruits and yogurt.', time: '10 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#2D3748' },
    { id: 5, name: 'Caesar Salad', description: 'Fresh and crunchy Caesar salad with creamy dressing.', time: '15 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#4A5568' },
    { id: 6, name: 'Tandoori Chicken', description: 'Flavorful grilled chicken marinated in yogurt and spices.', time: '50 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#1F2937' },
    { id: 7, name: 'Sushi Rolls', description: 'Delicate sushi rolls with fresh seafood and vegetables.', time: '40 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#334155' },
    { id: 8, name: 'Mango Lassi', description: 'A refreshing yogurt-based mango drink.', time: '10 mins', image: 'https://tse1.mm.bing.net/th?id=OIP.WR9szThYTdHPeTXZnLSRxQHaEK&pid=Api&P=0&h=180', color: '#1A202C' }
  ];

  const cardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="text-center text-primary mb-4">🍽️ New Recipe Additions</h1>
        <p className="text-center text-muted mb-5">Discover the latest recipes curated just for you!</p>

        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ ...cardStyle, backgroundColor: recipe.color }}
                onMouseEnter={(e) => handleHover(e, 1.05)}
                onMouseLeave={(e) => handleHover(e, 1)}
              >
                <img src={recipe.image} className="card-img-top" alt={recipe.name} style={{ height: '180px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <span className="badge bg-light text-dark d-inline-block">⏱ {recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewAdditions;
