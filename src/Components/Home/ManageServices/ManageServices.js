import React from "react";
import "./ManageServices.css";
import manageImg from "./img/studio-republic-fotKKqWNMQ4-unsplash.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const ManageServices = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-5 manage-container">
          <h6>------ Timely Service Delivery & Incident Resolutions</h6>
          <h2 className="mt-3">
            Manages Services Delivery Across Various Business Like, HR, Legal
            And Other IT Departments
          </h2>
          <div className="manage-img">
            <img className="img-fluid rounded" src={manageImg}></img>
          </div>
        </div>
        <div className="col-md-6 offset-1">
          <div>
            <p className="text-muted">
              SmartData has been helping organizations throughout the World to
              manage their IT with our unique approach to technology management
              and consultancy solutions. Provide users with appropriate view and
              access permissions to requests, problems, changes, contracts,
              assets, solutions, and reports with our experienced professionals.
              <br></br>
              <br></br>
              As one of the world’s largest ITService Providers, our deep pool
              of certified engineers and IT staff are ready to help you to keep
              your IT business safe & ensure high availability.
            </p>
          </div>
          <div className='d-flex mt-5'>
            <div className='text-muted '>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Eliminate Repeat Entry</p>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Drive Business Process</p>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Structure Data & Docs</p>
            </div>
            <div className='ml-5 text-muted'>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Eliminate Repeat Entry</p>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Drive Business Process</p>
                <p> <FontAwesomeIcon className="text-success mr-1" icon={faCheckCircle} />  Structure Data & Docs</p>
            </div>
          </div>
          <h4 className="best-org">Trusted By The World’s<span className='best-org-color ml-2'>Best Organizations</span></h4>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
