import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'
import homeImg from './img/home.jpg'

const Header = () => {
    return (
        <div className="">
            <div className="container header-container mb-5">
                <div className="row">
                    <div className="col-md-5  mt-5 d-flex align-items-center">
                        <div className="text-container">
                            <h1>We Run All Kinds Of IT Services That Vow Your Business</h1>
                            <p className="text-muted mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="btn btn-primary more-button">More About Us</button>
                        </div>

                    </div>
                    <div className="col-md-5 mt-5 offset-2">
                        <div className="text-container">
                            <img className="img-fluid mt-3 mb-5" src={homeImg}></img>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;