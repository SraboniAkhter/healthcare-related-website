import React from 'react';
import era from '../../../images/era.jpg';
import ema from '../../../images/ema.jpg';
import nikki from '../../../images/nikki.jpg';
import mike from '../../../images/mike.jpg';
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        id:'1',
        name: 'Era Mark',
        specialist:'Teeth',
        pic:era,
        phone:+23222334
    },
    {
        id:'2',
        name: 'Nikki Joseph',
        specialist:'Child',
        pic:nikki,
        phone:+333222334
    },
    {
        id:'3',
        name: 'Mike Martin',
        specialist:'Eyes',
        pic:mike,
        phone:+573222334
    },
    {   id:'4',
        name: 'Ema Morle',
        specialist:'Heart',
        pic:ema,
        phone:+12222334
    },
]



const Doctors = () => {
    return (
        <div>
        <section className=" container">
         <div className="row py-5">
             {
                 doctorData.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
             }
         </div>

     </section>
            
        </div>
    );
};

export default Doctors;