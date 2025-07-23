// Recently viewed restaurants
export const addToRecentlyViewed = (restaurant) => {
  let recentlyViewed = getRecentlyViewed();
  
  // Remove if already exists to avoid duplicates
  recentlyViewed = recentlyViewed.filter(item => item.id !== restaurant.id);
  
  // Add to beginning
  recentlyViewed.unshift(restaurant);
  
  // Keep only last 10 items
  recentlyViewed = recentlyViewed.slice(0, 10);
  
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
};

export const getRecentlyViewed = () => {
  const stored = localStorage.getItem('recentlyViewed');
  return stored ? JSON.parse(stored) : [];
};

// Reviews
export const addReview = (restaurantId, review) => {
  const reviews = getReviews(restaurantId);
  const newReview = {
    id: Date.now().toString(),
    ...review,
    timestamp: new Date().toISOString()
  };
  
  reviews.push(newReview);
  localStorage.setItem(`reviews_${restaurantId}`, JSON.stringify(reviews));
  
  return newReview;
};

export const getReviews = (restaurantId) => {
  const stored = localStorage.getItem(`reviews_${restaurantId}`);
  return stored ? JSON.parse(stored) : [];
};

export const updateReview = (restaurantId, reviewId, updatedReview) => {
  const reviews = getReviews(restaurantId);
  const index = reviews.findIndex(review => review.id === reviewId);
  
  if (index !== -1) {
    reviews[index] = { ...reviews[index], ...updatedReview };
    localStorage.setItem(`reviews_${restaurantId}`, JSON.stringify(reviews));
  }
};

export const deleteReview = (restaurantId, reviewId) => {
  const reviews = getReviews(restaurantId);
  const filteredReviews = reviews.filter(review => review.id !== reviewId);
  localStorage.setItem(`reviews_${restaurantId}`, JSON.stringify(filteredReviews));
};