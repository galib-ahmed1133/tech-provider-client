import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'
import ManageServices from './ManageServices/ManageServices';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ManageServices></ManageServices>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;