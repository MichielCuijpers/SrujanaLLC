import React from 'react';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/is_after';
import './events.css';


const getEventTile = (eventName, date, posterUrl) => {
    return (
        <div className="col-lg-6 col-xs-12 text-center" key={ `${eventName}:${date}` }>
            <div className="event-card">
                <div className="event-description">
                    <div className="name">{eventName}</div>
                    <div className="event-date">{date}</div>
                </div>
                <div className="text-center">
                    <img
                        src={posterUrl}
                        alt="Srujana_postcard"
                        className="poster img-rounded"/>
                </div>
            </div>
        </div>
    )
};

export default function Events({ eventList }) {
    const today = new Date();
    const upcomingEvents = eventList.filter(event => isAfter(new Date(event.date), today));
    const previousEvents = eventList.filter(event => !isAfter(new Date(event.date), today));
    return (
        <div className="container">
            <div className="heading">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <h2>UPCOMING EVENTS</h2>
                    <hr className="orange"/>
                    <div className="col-md-10 col-md-offset-1 col-xs-12">
                        <h3>Srujana & TV Asia Present</h3>
                        { upcomingEvents.map(event =>
                            <div>
                                <div className="date">
                                    <span className="name">{ event.title }</span>
                                    - { event.date }
                                </div>
                                <div className="text-center">
                                    <img
                                        src={ event.logo }
                                        alt="Srujana_postcard"
                                        className="poster img-rounded"/>
                                </div>
                                <br />
                            </div>
                        )}
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
                    { previousEvents.map(event => getEventTile(event.title, event.date, event.logo)) }
                </div>
            </div>
        </div>
    );
}

Events.PropTypes = {
    eventList: PropTypes.array
};
