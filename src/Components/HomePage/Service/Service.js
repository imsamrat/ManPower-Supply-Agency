import React from 'react';
import './Service.css'
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import SingleService from '../SingleService/SingleService';

const Service = () => {

  const { services, SetServices, selectedService, SetSelectedService } = useContext(UserContext);
  let history = useHistory();

  const handleRoute = service => {
    SetSelectedService(service);
    history.push("/dashboard/order");
  };
  return (
    <section className='serviceSection' style={{ margin: "5rem" }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{ fontWeight: "700", fontSize: "36px", marginBottom: "3rem" }}>
          Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>{" "}
        </h3>
        {
          services.length === 0 &&
                    <div className="spinner-border text-primary my-4 text-center" role="status">
                     <span class="visually-hidden"></span>
                    </div>          
        }
        <div className='row justify-content-around'>
          {services.map(service => (
            <div
              >
              <SingleService
               key={service._id}
               service={service}
               handleRoute={handleRoute}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;