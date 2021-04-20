import React from "react";
import { Nav } from "react-bootstrap";
import {Link, Switch, Route } from "react-router-dom";
import AddReview from "../AddReviews/AddReview";
import OrderConfirmed from "../OrderConfirmed/OrderConfirmed";
import OrderList from "../OrderList/OrderList";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-3">
          <Nav className="dashboard-nav-bg">
            <Nav.Item>
              <Nav.Link className="dashboard-nav">
                <Link className="nav-menu" to="/dashboard/confirmorder">
                  Order Confirmation
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="dashboard-nav">
                <Link className="nav-menu" to="/dashboard/addreviews">
                  Add Review
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="dashboard-nav">
                <Link className="nav-menu" to="/dashboard/orderlist">
                  Order List
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path="/dashboard/confirmorder">
                <OrderConfirmed></OrderConfirmed>
            </Route>
            <Route path="/dashboard/addreviews">
                <AddReview></AddReview>
            </Route>
            <Route path="/dashboard/orderlist">
                <OrderList></OrderList>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
