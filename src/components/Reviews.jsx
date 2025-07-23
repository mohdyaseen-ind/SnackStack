import React, { useState, useEffect } from 'react';
import { Star, User, Calendar, Edit, Trash2 } from 'lucide-react';
import { getReviews, addReview, updateReview, deleteReview } from '../utils/localStorage';

const Reviews = ({ restaurantId }) => {
  const [reviews, setReviews] = useState([]);
  const [showAddReview, setShowAddReview] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    userName: ''
  });

  useEffect(() => {
    setReviews(getReviews(restaurantId));
  }, [restaurantId]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.comment.trim() || !newReview.userName.trim()) return;

    const review = addReview(restaurantId, newReview);
    setReviews([...reviews, review]);
    setNewReview({ rating: 5, comment: '', userName: '' });
    setShowAddReview(false);
  };

  const handleEditReview = (reviewId, updatedData) => {
    updateReview(restaurantId, reviewId, updatedData);
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, ...updatedData } : review
    ));
    setEditingReview(null);
  };

  const handleDeleteReview = (reviewId) => {
    deleteReview(restaurantId, reviewId);
    setReviews(reviews.filter(review => review.id !== reviewId));
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-500 fill-current'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
          {reviews.length > 0 && (
            <div className="flex items-center mt-2">
              {renderStars(Math.round(averageRating))}
              <span className="ml-2 text-gray-600">
                {averageRating} ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowAddReview(true)}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
        >
          Add Review
        </button>
      </div>

      {showAddReview && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Write a Review</h3>
          <form onSubmit={handleAddReview}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              {renderStars(newReview.rating, true, (rating) => 
                setNewReview({ ...newReview, rating })
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comment
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                rows="4"
                placeholder="Share your experience..."
                required
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowAddReview(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4">
              {editingReview === review.id ? (
                <EditReviewForm
                  review={review}
                  onSave={(updatedData) => handleEditReview(review.id, updatedData)}
                  onCancel={() => setEditingReview(null)}
                  renderStars={renderStars}
                />
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="font-semibold text-gray-900">{review.userName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setEditingReview(review.id)}
                        className="text-gray-400 hover:text-orange-600 transition duration-200"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteReview(review.id)}
                        className="text-gray-400 hover:text-red-600 transition duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {new Date(review.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const EditReviewForm = ({ review, onSave, onCancel, renderStars }) => {
  const [editData, setEditData] = useState({
    rating: review.rating,
    comment: review.comment,
    userName: review.userName
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editData.comment.trim() || !editData.userName.trim()) return;
    onSave(editData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          value={editData.userName}
          onChange={(e) => setEditData({ ...editData, userName: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-3">
        {renderStars(editData.rating, true, (rating) => 
          setEditData({ ...editData, rating })
        )}
      </div>
      <div className="mb-3">
        <textarea
          value={editData.comment}
          onChange={(e) => setEditData({ ...editData, comment: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
          rows="3"
          required
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-orange-600 text-white px-3 py-1 rounded text-sm hover:bg-orange-700 transition duration-200"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Reviews;