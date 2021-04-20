import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./Review.css";

const Reviews = (props) => {
  const { name, designation, description, img } = props.reviews;
  return (
    <div className="col-md-4 mt-5">
      <div class="card review-card-style">
        <div className='card-img-rounded'>
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="review-card-body">
          <h4>{name}</h4>
          <p>{designation}</p>
          <p className='text-muted'>{description}</p>
        </div>
        <div className='d-flex'>
         <FontAwesomeIcon className="m-auto" icon={faStar} />
         <FontAwesomeIcon className="m-auto" icon={faStar} />
         <FontAwesomeIcon className="m-auto" icon={faStar} />
         <FontAwesomeIcon className="m-auto" icon={faStar} />
         <FontAwesomeIcon className="m-auto" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
