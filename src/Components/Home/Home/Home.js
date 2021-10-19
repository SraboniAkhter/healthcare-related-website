import React from 'react';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Feature></Feature>
            <Review></Review>
        </div>
    );
};

export default Home;