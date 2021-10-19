import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Appointment = () => {
    const {serviceId} =useParams();
    // console.log(serviceId);
    const [serviceDetails,setServiceDetails] = useState([]);
    //  console.log(serviceDetails);

    useEffect(() => {
        fetch('/servicesDetails.json')
        .then(res => res.json())
        .then(data =>setServiceDetails(data))
    },[])

    // useEffect(() => {
    //     const foundServices = serviceDetails.filter (service => service.id === serviceId)
    //     console.log(foundServices)
    // },[])
    const foundServices = serviceDetails.filter (service => service.id === serviceId)
    console.log(foundServices)
    return (
        <div className="mx-5">
            {/* <h2>This is {serviceId}</h2> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <h2 className="card-text">{foundServices[0]?.name}</h2>
      <img src={foundServices[0]?.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dr.{foundServices[0]?.doctor}</h5>
        <h6 className="card-title">{foundServices[0]?.price}tk</h6>
        <p className="card-title">{foundServices[0]?.specialist}specialist</p>
        <p className="card-text">{foundServices[0]?.description}</p>
        <Link to="/makeAppointment"><button className="btn btn-info">Get Appointment</button></Link>
      </div>
    </div>
  </div>
</div>
 </div>
    );
};

export default Appointment;