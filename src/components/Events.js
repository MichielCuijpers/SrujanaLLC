import React from 'react';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/is_after';
import './events.scss';

const getEvents = (events, header) => (
    <div>
        <div className="heading">
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <h2>{ header }</h2>
                <hr className="orange"/>
            </div>
        </div>
        <div className="col-md-8 col-md-offset-2 col-xs-12">
            { events.map(event => (
                <div className="row">
                    { getEventCard(event) }
                </div>
            ))}
        </div>
    </div>
)

const getDescription = (description) => (
    <div className="description">{ description }</div>
)

const getPoster = (posterUrl) => (
    <div className="text-center poster">
        <img
            src={posterUrl}
            alt="Srujana_postcard"/>
    </div>
);

const getEventCard = ({ title, date, logo, description }) => {
    return (
        <div className="col-xs-12 text-center" key={ `${title}:${date}` }>
            <div className="event-card">
                <div className="event-description">
                    <div className="name">{title}</div>
                    <div className="date">{date}</div>
                    { description && getDescription(description)}
                </div>
                { getPoster(logo) }
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
            <h1>Srujana & TV Asia Present</h1>
            { getEvents(upcomingEvents, 'UPCOMING EVENTS') }
            { getEvents(previousEvents, 'PAST EVENTS') }
        </div>
    );
}

Events.PropTypes = {
    eventList: PropTypes.array
};
