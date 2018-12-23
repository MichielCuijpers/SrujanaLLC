import React from 'react';
import './events.css';

const events = [
    {
        name: 'Bhairav Se Bhairavi Tak',
        date: '22 JUN 2018',
        logo: 'https://image.ibb.co/fPdUtJ/0.jpg'
    }, {
        name: 'Yugpurush',
        date: '06 AUG 2017',
        logo: 'https://image.ibb.co/cfejnF/yugpurush_Logo.jpg'
    }, {
        name: 'Sangam',
        date: '25 MAY 2017',
        logo: 'https://image.ibb.co/kAbUt5/Sangam_postcard_5_x_7_1.jpg'
    }, {
        name: 'Sogaat',
        date: '22 NOV 2015',
        logo: 'https://image.ibb.co/nzCxd5/Screen_Shot_2017_04_26_at_10_14_47_PM.png'
    }, {
        name: 'Shabda Sangat',
        date: '30 NOV 2014',
        logo: 'https://image.ibb.co/mEnGo5/Shabda_Sangat.gif'
    }, {
        name: 'Sur Safar',
        date: '16 AUG 2014',
        logo: 'https://image.ibb.co/bFmWMQ/Sur_Safar.png'
    }, {
        name: 'Ashok Dave',
        date: '26 APR 2014',
        logo: 'https://image.ibb.co/dLzAy5/Screen_Shot_2017_04_26_at_10_14_08_PM.png'
    }
]

const getEventTile = (eventName, date, posterUrl) => (
    <div className="col-lg-6 col-xs-12 text-center">
        <div className="event-card">
            <div className="event-description">
                <div className="name">{eventName}</div>
                <div className="event-date">{date}</div>
            </div>
            <div className="text-center">
                <img
                    src={posterUrl}
                    alt="Sangam_postcard_5_x_7_1"
                    className="poster img-rounded"/>
            </div>
        </div>
    </div>
);

export default function Events() {
    return (
        <div className="container">
            <div className="heading">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <h2>UPCOMING EVENTS</h2>
                    <hr className="orange"/>
                    <div className="col-md-10 col-md-offset-1 col-xs-12">
                        <div className="date">
                            <h3>Srujana & TV Asia Present</h3>
                            <span className="name">Colors of Rajasthan</span>
                            - 03 NOV 2018
                        </div>
                        <div className="text-center">
                            <img
                                src="https://image.ibb.co/fRMUv0/COR-with-supporters.jpg"
                                alt="COR-with-supporters"
                                border="0"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row heading">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <h2>PAST EVENTS</h2><hr className="orange"/>
                </div>
            </div>
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="row">
                    {events.map(event => getEventTile(event.name, event.date, event.logo))}
                </div>
            </div>
        </div>
    );
}
