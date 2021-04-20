import React, { useEffect, useState } from "react";
import serviceData from '../../../data/mockData.json'
import ServicesDetails from "./ServicesDetail/ServicesDetails";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ancient-falls-61685.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    

  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row">
        <div className="col-md-5 manage-container">
          <h6>------ Nationwide Service, Local Expertise</h6>
          <h2 className="mt-3">
            Offering the latest software and IT services to our customers!
          </h2>
        </div>
        <div className="col-md-6 offset-1">
          <p className="text-muted">
            Improve efficiency, leverage tech, and provide better customer
            experiences with the modern technology services available allover
            the world. Our skilled personnel, utilising the latest processing
            software, combined with decades of experience.
          </p>
        </div>
      </div>

        <div className='row'>
            {
                services.map(services => <ServicesDetails services={services}></ServicesDetails>)
            }
        </div>

    </div>
  );
};

export default Services;
