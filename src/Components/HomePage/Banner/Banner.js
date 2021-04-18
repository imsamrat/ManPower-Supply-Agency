import React from "react";
import { Link } from 'react-scroll';
import banner from "../../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <main>
      <section className='headerMain'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 heading pr-0 '>
              <h1>YOUR BRAND, YOUR BUSINESS, OUR STAFF</h1>
              <p>
              To provide excellent, outstanding and innovative staffing solutions to our customers with the highest level of quality and exceptional service.
              </p>
              <Link className='hire' to="portfolio" spy={true} smooth={true} delay={100} offset={0} duration={500}>
                Hire Us
              </Link>
            </div>
            <div className='col-md-6 ml-auto mr-5 pr-0'>
              <img style={{ width: '10009x'}} src={banner} alt='banner' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;