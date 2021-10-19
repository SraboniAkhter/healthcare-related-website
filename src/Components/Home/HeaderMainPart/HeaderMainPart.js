import React from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import main1 from '../../../images/main-1.jpg'
import main2 from '../../../images/main-2.jpg'
import main3 from '../../../images/main-3.jpg'

const HeaderMainPart = () => {
    const {user} =useAuth();
    return (
        <div className="container h-100">
  <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height:"600px"}}
                        className="d-block w-100"
                        src={main1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h1>Welcome <span>{user.displayName}</span> to MediClinic </h1>
                        <p>Best in the Country for the corporate checkup.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height:"600px"}}
                        className="d-block w-100"
                        src={main2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Dedication and commitment</h3>
                        <p>More then 2000 emergency patients treated.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height:"600px"}}
                        className="d-block w-100"
                        src={main3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>We have the finest physicians</h3>
                        <p>Almost 400+ dialysis are complete.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMainPart;