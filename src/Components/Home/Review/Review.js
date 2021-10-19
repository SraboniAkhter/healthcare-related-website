import React from 'react';
import img from '../../../images/user-1.png'
import img2 from '../../../images/user-2.png'

const Review = () => {
    return (
        <div>
             <section className="align-items-center justify-content-center">
        <h1 className="text-center">Our <span className="text-highlight">Patients says</span> </h1>
    <div className="row  d-flex align-items-center justify-content-evenly x p-5">
      <div className="col-sm-4 card m-3" style={{width:'18rem'}}>
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4>Regina Miles</h4>
            <p className="card-text">Selecting the most appropriate services to produce the desired health outcome.</p>
            
          </div>
        </div>
        <div className="col-sm-4 card m-3" style={{width:'18rem'}}>
          <img src={img2} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4>Mark Deer</h4>
            <p className="card-text">Caring for the health of our staff and developing a culture of trust.</p>
            
          </div>
        </div>
        <div className="col-sm-4 card m-3" style={{width:'18rem'}}>
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h4>Miles Wanker</h4>
            <p className="card-text">Operating at the highest standards of safe and ethical practices and improvement.</p>
            
          </div> 
        </div> 
       
    </div>
    </section>
        </div>
    );
};

export default Review;