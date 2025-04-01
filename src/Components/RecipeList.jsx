import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Button, Col, Container, Row, Form, Pagination } from 'react-bootstrap';
import { RecipeCard } from '../Components/index';
import { useParams, useNavigate } from 'react-router-dom';
import { Crousel, Loader } from '../comman/index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSort, FaArrowLeft, FaArrowRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import useFavorites from '../assets/hooks/useFavorites';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('');
  const { favorites, toggleFavorite } = useFavorites();
  const limit = 6; // 6 cards per page
  const { query, cuisine, tag } = useParams();
  const navigate = useNavigate();

  const sortOptions = [
    { value: '', label: '⚖️ Default' },
    { value: 'rating-desc', label: '⭐ Rating (High to Low)' },
    { value: 'rating-asc', label: '⭐ Rating (Low to High)' },
    { value: 'prepTime-asc', label: '⏳ Prep Time (Shortest)' },
    { value: 'cookTime-asc', label: '🍳 Cook Time (Shortest)' },
    { value: 'calories-asc', label: '🔥 Calories (Lowest)' },
    { value: 'calories-desc', label: '🔥 Calories (Highest)' },
    { value: 'difficulty-asc', label: '📊 Difficulty (Easy to Hard)' },
    { value: 'difficulty-desc', label: '📊 Difficulty (Hard to Easy)' }
  ];
  

  // Get paginated recipes for current page
  const paginatedRecipes = useMemo(() => {
    const startIndex = page * limit;
    return filteredRecipes.slice(startIndex, startIndex + limit);
  }, [filteredRecipes, page, limit]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    return Math.ceil(filteredRecipes.length / limit);
  }, [filteredRecipes.length, limit]);

  const sortRecipes = useCallback((data, sortValue) => {
    if (!sortValue) return data;

    const [sortField, sortOrder] = sortValue.split('-');

    return [...data].sort((a, b) => {
      if (['prepTime', 'cookTime', 'calories'].includes(sortField)) {
        const field = sortField === 'prepTime' ? 'prepTimeMinutes' :
          sortField === 'cookTime' ? 'cookTimeMinutes' :
            'caloriesPerServing';
        return sortOrder === 'asc' ? a[field] - b[field] : b[field] - a[field];
      }

      if (sortField === 'rating') {
        return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      }

      if (sortField === 'difficulty') {
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return sortOrder === 'asc' ?
          difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty] :
          difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      }

      return 0;
    });
  }, []);

  const handleSortChange = useCallback((e) => {
    const value = e.target.value;
    setSortBy(value);
    setPage(0);
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (tag) params.append('tag', tag);
    if (value) params.append('sortBy', value);
    navigate(`?${params.toString()}`, { replace: true });
  }, [query, cuisine, tag, navigate]);

  const fetchRecipes = useCallback(async () => {
    try {
      setLoading(true);
      // First get the total count of recipes
      const countResponse = await fetch('https://dummyjson.com/recipes?limit=0');
      const countData = await countResponse.json();
      const totalRecipes = countData.total; // Should be 50

      // Then fetch all available recipes
      const response = await fetch(`https://dummyjson.com/recipes?limit=${totalRecipes}`);
      const data = await response.json();
      let recipes = data.recipes || [];

      // Apply search if query exists
      if (query) {
        const searchResponse = await fetch(`https://dummyjson.com/recipes/search?q=${query}&limit=${totalRecipes}`);
        const searchData = await searchResponse.json();
        recipes = searchData.recipes || [];
      }
      // Apply tag filter if tag exists
      else if (tag) {
        const tagResponse = await fetch(`https://dummyjson.com/recipes/tag/${tag.toLowerCase()}?limit=${totalRecipes}`);
        const tagData = await tagResponse.json();
        recipes = tagData.recipes || [];
      }

      // Apply cuisine filter if cuisine exists
      if (cuisine) {
        recipes = recipes.filter(recipe =>
          recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
      }

      // Sort and update state
      const sortedRecipes = sortRecipes(recipes, sortBy);
      setRecipes(sortedRecipes);
      setFilteredRecipes(sortedRecipes);


      if (sortedRecipes.length === 0) {
        toast.info('No recipes found. Try searching for something else! 🥗');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      toast.error(`⚠️ ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [query, cuisine, tag, sortBy, sortRecipes]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Reset to first page when filters change
  useEffect(() => {
    setPage(0);
  }, [query, cuisine, tag]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
      />

      <Crousel recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes} />

      <Container className="my-4">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold text-danger mb-3">
            {query ? `Search Results for "${query}"` :
              cuisine ? `${cuisine} Recipes` :
                tag ? `#${tag} Recipes` :
                  'Discover Recipes'}
          </h1>
          <div className="border-bottom border-danger border-2 mx-auto" style={{ width: '100px' }}></div>
        </div>

        <div className="d-flex justify-content-end mb-4">
          <div className="bg-light p-3 rounded shadow-sm">
            <Form.Group controlId="sortSelect" className="d-flex align-items-center">
              <FaSort className="me-2 text-muted" />
              <Form.Label className="me-2 mt-2 fw-bold text-nowrap">SORT BY:</Form.Label>
              <Form.Select
                value={sortBy}
                onChange={handleSortChange}
                className="border-danger"
                style={{ minWidth: '220px' }}
                aria-label="Sort recipes"
              >
                {sortOptions.map((option, index) => {
                  const colors = ['#ff7043', '#4fc3f7', '#ffb74d', '#ba68c8', '#4db6ac'];
                  return (
                    <option key={option.value} value={option.value} style={{ color: colors[index % colors.length],backgroundColor:"black" }}>
                      {option.label}
                    </option>
                  )
                }
                )}
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : filteredRecipes.length > 0 ? (
          <>
            <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
              {paginatedRecipes.map((recipe) => (
                <Col key={recipe.id} className="mb-4">
                  <RecipeCard
                    recipe={recipe}
                    isFavorite={favorites.some(fav => fav.id === recipe.id)}
                    onToggleFavorite={() => toggleFavorite(recipe)}
                  />
                </Col>
              ))}
            </Row>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination>
                  <Pagination.First
                    onClick={() => setPage(0)}
                    disabled={page === 0}
                    aria-label="First page"
                  >
                    <FaAngleDoubleLeft />
                  </Pagination.First>
                  <Pagination.Prev
                    onClick={() => setPage(p => Math.max(p - 1, 0))}
                    disabled={page === 0}
                    aria-label="Previous page"
                  >
                    <FaArrowLeft />
                  </Pagination.Prev>

                  {/* Show limited page numbers when many pages exist */}
                  {(() => {
                    const pages = [];
                    const maxVisiblePages = 5;
                    let startPage = Math.max(0, page - Math.floor(maxVisiblePages / 2));
                    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

                    // Adjust if we're at the beginning or end
                    if (endPage - startPage + 1 < maxVisiblePages) {
                      startPage = Math.max(0, endPage - maxVisiblePages + 1);
                    }

                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(
                        <Pagination.Item
                          key={i}
                          active={i === page}
                          onClick={() => setPage(i)}
                        >
                          {i + 1}
                        </Pagination.Item>
                      );
                    }
                    return pages;
                  })()}

                  <Pagination.Next
                    onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
                    disabled={page === totalPages - 1}
                    aria-label="Next page"
                  >
                    <FaArrowRight />
                  </Pagination.Next>
                  <Pagination.Last
                    onClick={() => setPage(totalPages - 1)}
                    disabled={page === totalPages - 1}
                    aria-label="Last page"
                  >
                    <FaAngleDoubleRight />
                  </Pagination.Last>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-5">
            <h4 className="text-muted mb-3">No recipes found</h4>
            <p className="lead">Please try different search criteria</p>
            <Button
              variant="danger"
              onClick={() => navigate('/')}
              className="mt-3"
            >
              Back to Home
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default RecipeList;