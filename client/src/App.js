import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [reviews, setReviews] = useState();
  const [newReview, setNewReview] = useState({ title: '', text: '' });

  const handleAddReview = () => {
    if (newReview.title.trim() !== '' && newReview.text.trim() !== '') {
      const review = {
        id: Date.now(),
        title: newReview.title,
        text: newReview.text,
        likes: 0,
        dislikes: 0,
      };
      setReviews([...reviews, review]);
      setNewReview({ title: '', text: '' });
    }
  };

  return (
    <div className="app">
      <div className="review-input-container">
        <input
          type="text"
          placeholder="Review Title"
          value={newReview.title}
          onChange={e => setNewReview({ ...newReview, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Review Content"
          value={newReview.text}
          onChange={e => setNewReview({ ...newReview, text: e.target.value })}
        />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
    </div>
  );
};

export default App;
