import React from 'react';
import { Link } from 'react-router-dom';

const SuccessAppointment = () => {
    return (
        <div style={{height: "355px"}}>
            <h5>Your appointment has been Successfully</h5>
            <Link to="/"><button className="btn btn-info text-white">Go Back to Home</button></Link>
            <br /> <br /> <br />
        </div>
    );
};

export default SuccessAppointment;