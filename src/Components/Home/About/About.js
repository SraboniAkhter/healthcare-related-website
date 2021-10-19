import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../images/about-us-img-1.jpg'

const About = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                   <div className="col-md-7 align-self-center">
                        <h1>Finest Patient <br /> Care & Amenities</h1>
                        <p className="text-secondary my-5">
                        Since March 2020, news about the coronavirus disease (COVID-19) pandemic may have made many of us feel anxious about going to the emergency of a hospital or getting medical care, and we may have wondered if it is safe to go to the hospital. In the beginning, we have found out that nearly 30% of people were avoiding or delaying medical care due to COVID-19 concerns. Emergency departments of some hospitals had about half their usual number of patients.
                        </p>
                        <Link to="/about"><button className="btn btn-primary">Learn More</button></Link>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={images} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;