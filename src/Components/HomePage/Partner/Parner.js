import React, { useEffect, useState } from 'react';
import AllPartner from '../../../fakeData/fakePartner';
import SinglePartner from '../SinglePartner/SinglePartner';

const Partner = () => {
  const [partners, SetPartner] = useState([]);

  useEffect(() => {
        SetPartner(AllPartner);
  }, []);

  return (
    <section className='partner' id="portfolio">
      <div className="container py-5 mt-md-5 text-center">
        <h2>Our <b style={{ color: '#7ab259' }}>Partners</b></h2>
      </div>
      <div className='container d-flex justify-content-around align-items-center my-2'>
        {partners.map(partner => (
          <SinglePartner key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partner;