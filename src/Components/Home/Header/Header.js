import React from 'react';
import HeaderMainPart from '../HeaderMainPart/HeaderMainPart';
import Info from '../Info/Info'
import './Header.css'

const Header = () => {
    return (
        <div className="Header-container">
            {/* <Navbar></Navbar> */}
            <HeaderMainPart></HeaderMainPart>
            <Info></Info>
        </div>
    );
};

export default Header;