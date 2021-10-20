import React from 'react';
import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, price, description, image } = service;
    return (
        <div className="service pb-3">
            <img style={{ height:"160px"}} src={image} alt="" />
            <h3 className="text-info">{name}</h3>
            <h5>Price: {price}tk</h5>
            <p className="px-3">{description}</p>
            <NavLink to={`/appointment/${id}`}>
                <button className="btn btn-info">Appointment</button>
            </NavLink>
        </div>
    );
};

export default Service;