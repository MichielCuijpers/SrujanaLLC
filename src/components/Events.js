import React from 'react';
import PropTypes from 'prop-types';
import './events.css';

const getEventTile = (eventName, date, posterUrl) => (
    <div className="col-lg-6 col-xs-12 text-center" key={eventName}>
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

export default function Events({ eventList }) {
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
                    {eventList.map(event => getEventTile(event.name, event.date, event.logo))}
                </div>
            </div>
        </div>
    );
}

Events.PropTypes = {
    eventList: PropTypes.array
};
