import React from 'react';
import PropTypes from 'prop-types';
import EventCreator from './EventCreator';
import Events from './Events';
import './admin.css'

const Admin = (props) => {
    const { eventDate, selectDate, createEvent, eventList } = props;
    return (
        <div>
            <EventCreator
                eventDate={ eventDate }
                selectDate={ selectDate }
                createEvent={ createEvent }/>
            <div className="event-preview">
                <h1>Events-Preview:</h1>
                <hr className="orange" />
                <Events eventList={ eventList } />
            </div>
        </div>
    );
};

Admin.PropTypes = {
    createEvent: PropTypes.func,
    selectDate: PropTypes.func,
    eventDate: PropTypes.date,
    eventList: PropTypes.array
};

export default Admin;
