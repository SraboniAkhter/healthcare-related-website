import React from 'react';
import { Link } from 'react-router-dom';


const Doctor = ({doctor}) => {
    return (
        <div className="col-md-3">
            <img style={{height:"160px"}} src={doctor.pic} alt="" />
            <div className="d-flex justify-content-evenly align-items-center rounded px-5 py-3 mt-3">
                <div>
                    <h4>Dr. {doctor.name}</h4>
                    <small>{doctor.specialist} Specialist</small>
                    <p>+{doctor.phone}</p>
                </div>
            </div>
           <div>
           <Link to="/makeAppointment"><button className="btn btn-info">Appointment</button></Link>

           </div>
        </div>
    );
};

export default Doctor;