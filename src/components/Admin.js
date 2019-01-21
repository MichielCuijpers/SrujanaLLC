import React from 'react';
import PropTypes from 'prop-types';
import EventCreator from './EventCreator';
import EventCard from './EventCard';
import './admin.scss';

const listEvents = (events, deleteEvent) => {
    return (
        <div>
            <div className="heading">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <h2>Events Preview</h2>
                    <hr className="orange"/>
                </div>
            </div>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                { events.map(event => (
                    <div>
                        <EventCard key={ event.id } event={ event } />
                        <div onClick={ () => deleteEvent(event.id) } className="delete">Delete Event</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Admin = (props) => {
    const { eventDate, selectDate, createEvent, eventList, deleteEvent, loading } = props;
    return (
        <div>
            <EventCreator
                eventDate={ eventDate }
                loading={ loading }
                selectDate={ selectDate }
                createEvent={ createEvent }/>
            <div className="event-preview">
                { listEvents(eventList, deleteEvent) }
            </div>
        </div>
    );
};

Admin.PropTypes = {
    createEvent: PropTypes.func,
    selectDate: PropTypes.func,
    deleteEvent: PropTypes.func,
    eventDate: PropTypes.date,
    loading: PropTypes.bool,
    eventList: PropTypes.array
};

export default Admin;
