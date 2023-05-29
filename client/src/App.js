import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([]);
  const [newReview, setNewReview] = useState("")


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
    });
    // removed promise and sperated to update page w/ new data without reload
      setReviewList([...reviewList,
        {reviewTitle: reviewTitle,
          review: review
        }])
    
  }

  //need to figure out how to display updated information without refreshing each time
  const deleteReview = (title) => {
    Axios.delete(`http://localhost:3001/api/delete/${title}`);
    
  }

  //need to figure out how to display updated information without refreshing each time
  const updateReview = (title) => {
    Axios.put("http://localhost:3001/api/update", {
      reviewTitle: title,
      review: newReview,
    })
    setNewReview("")
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
      
      
      <div className="card-container">
        {reviewList.map((val, index) => (
          <div className="card" key={index}>
            <h1>Review Title: {val.reviewTitle}</h1>
            <p>User Review: {val.review}</p>
            <button onClick={() => {deleteReview(val.reviewTitle)}}> Delete </button>
            <input type= 'text' id='updateInput' onChange={(e) => {
              setNewReview(e.target.value);
            }} />
            <button onClick={() => {updateReview(val.reviewTitle)}}> Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
