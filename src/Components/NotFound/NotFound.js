import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/pngtree-error-404-page-not-found.jpg'
const NotFound = () => {
    return (
        <div>
<div className="card bg-dark text-white">
  <img style={{height:"600px"}} src={notFound} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <Link to="/"> <button className="btn btn-danger">Back to Home</button> </Link>
  </div>
</div>
        </div>
    );
};

export default NotFound;