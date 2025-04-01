import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favoriteRecipes');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
        
        // Dispatch a custom event when favorites change
        const event = new CustomEvent('favoritesUpdated', {
            detail: { favorites }
        });
        window.dispatchEvent(event);
    }, [favorites]);

    const toggleFavorite = (recipe) => {
        setFavorites(prev => {
            const isFavorite = prev.some(fav => fav.id === recipe.id);
            if (isFavorite) {
                return prev.filter(fav => fav.id !== recipe.id);
            } else {
                return [...prev, recipe];
            }
        });
    };

    return { favorites, toggleFavorite };
};

export default useFavorites;