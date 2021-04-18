import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Partner from '../Partner/Parner';
import Review from '../Review/Review';
import Sector from '../Sector/Sector';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Review></Review>
            <Sector></Sector>
            <Partner></Partner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;