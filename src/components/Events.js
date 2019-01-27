import React from 'react';
import PropTypes from 'prop-types';
import EventCard from './EventCard';
import '../assets/styles/events.scss';
import { getUpcomingEvents, getPreviousEvents } from '../Helpers';

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
                <EventCard key={ event.id } event={ event } />
            ))}
        </div>
    </div>
);

export default function Events({ eventList }) {
    return (
        <div className="container">
            <h1 className="page-header">Srujana & TV Asia Present</h1>
            { getEvents(getUpcomingEvents(eventList), 'UPCOMING EVENTS') }
            { getEvents(getPreviousEvents(eventList), 'PAST EVENTS') }
        </div>
    );
}

Events.PropTypes = {
    eventList: PropTypes.array
};
