import React from 'react';
import './SingleSector.css'

const SingleSector = ({ sector }) => {
    return (
        <div className="container col-lg-3 col-6 text-center">
                <img src={sector.img} alt='' />
                <p>{sector.title}</p>
           
        </div>
    );
};

export default SingleSector;