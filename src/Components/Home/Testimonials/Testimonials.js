import React, { useEffect, useState } from "react";
import reviewData from "../../../data/reviewData.json";
import Reviews from "./Reviews/Reviews";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://ancient-falls-61685.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, []);
  return (
    <div className="container manage-container pt-5">
      <h6>------ Nationwide Service, Local Expertise</h6>
      <h2 className="mt-3">
        Offering the latest software and IT services to our customers!
      </h2> 
      <div className="row">
        {reviews.map((reviews) => (
          <Reviews reviews={reviews}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
