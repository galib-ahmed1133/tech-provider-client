import React from "react";
import './ServicesDetail.css'

const ServicesDetails = (props) => {
  const { title, img, description, price } = props.services;
  return (
    <div className="col-md-4 mt-5">
      <div class="card card-style">
        <img src={img} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p class="card-text">
            {description}
          </p>
          <h1>${price}</h1>
         <button className="btn btn-primary More-Button">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
