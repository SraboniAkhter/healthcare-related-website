import { faClock, faMapMarked, faPhone} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoDiv from '../InfoDiv/InfoDiv';

const infoData = [
    {
        id:'1',
        title: 'Emergency Cases',
        description: '+15697854124',
        icon: faPhone,
        details:'Urology can be broadly defined as the specialty that manages patients with diseases of the male and female urinary tract, and of the male reproductive organs.is most often seen in older patients.',
        backgroundColor: '#2d67f8'
    },
    {
        id:'2',
        title: 'Opening Hours',
        details:'All specialist doctors are available saturday to thursday 10am to 9pm.But our emergency department open every 24/7.Emergency departments of some hospitals had about half their number of patients. ',
        icon: faClock,
        backgroundColor: '#2e4172'
    },
    {
        id: '3',
        title: 'Visit Our Location',
        description: 'Mohakhali,Dhaka-1202',
        details:'On the basement floor of the MediClinic Hospital, one will find many highly, patients. specialized for medical equipment where the Nuclear located.',
        icon: faMapMarked,
        backgroundColor: '#12D0D9'
    }
]

const Info = () => {
    return (
        <div>
           <section className=" container">
            <div className="row py-5">
                {
                    infoData.map(info => <InfoDiv key={info.id} info={info} />)
                }
            </div>

        </section>
        </div>
    );
};

export default Info;