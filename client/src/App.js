import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([]);
  
  useEffect(() => {
  
      Axios.get('http://localhost:3001/api/get').then((response) => {
        console.log(response.data);
        setReviewList(response.data)
      })
    
  }, []);


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
      
      {reviewList.map((val) => {
        return <h1> 
          reviewTitle: {val.reviewTitle} | User Review: {val.review}
        </h1>
      })};
    </div>
  );
};

export default App;
