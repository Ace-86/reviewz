import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [review, setReview] = useState('');

  const  submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', 
    {
      reviewTitle: reviewTitle, 
      review: review
    }).then(() => {
      alert("successful insert")
    })
  }
  return (
    <div className="app">
      <div className="review-input-container">
        <input
          type="text"
          name="Title"
          placeholder="Review Title"
          value={reviewTitle.title}
          onChange={e => setReviewTitle(e.target.value )}
        />
        <input
          type="text"
          name="Content"
          placeholder="Review Content"
          value={review.text}
          onChange={e => setReview(e.target.value )}
        />
        <button onClick={submitReview} >Add Review</button>
      </div>
    </div>
  );
};

export default App;
