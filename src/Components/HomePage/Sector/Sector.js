import React, { useEffect, useState } from 'react';
import AllSector from '../../../fakeData/fakeService';
import SingleSector from '../SingleSector/SingleSector';


const Sector = () => {
    const [sectors, SetSectors] = useState([]);

    useEffect(() => {
        SetSectors(AllSector);
  }, []);
    return (
        <section className='sector'>
      <div className="container py-5 mt-md-5 text-center">
        <h2>Our <b style={{ color: '#7ab259' }}>Sectors</b></h2>
      </div>
      <div className='container row d-flex'>
        {sectors.map(sector => (
          <SingleSector key={sector.id} sector={sector} />
        ))}
      </div>
    </section>
    );
};

export default Sector;