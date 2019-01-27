import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import DatePicker from "react-datepicker";
import '../assets/styles/eventCreator.scss';

import "react-datepicker/dist/react-datepicker.css";

const datePicker = (eventDate, selectDate) => {
    return (
        <DatePicker
            peekNextMonth
            showWeekNumbers
            showMonthDropdown
            showYearDropdown
            // TODO: showTimeSelect
            // TODO: timeIntervals={15}
            scrollableMonthDropdown
            scrollableYearDropdown
            withPortal
            dateFormat="MMMM d, yyyy"
            highlightDates={ [new Date()] }
            todayButton={"Select Todays Date"}
            selected={ eventDate }
            onChange={ selectDate }
        />
    );
};

const submitEvent = (createEvent, values) => {
    event.preventDefault();
    createEvent(values);
}

const getSubmitButton = (loading) => (
    loading ?
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        : 'Create Event'
);

const EventCreator = (props) => {
    const { handleSubmit, eventDate, selectDate, createEvent, loading } = props;
    return (
        <form className="create-event-form" onSubmit={ handleSubmit((values) => submitEvent(createEvent, { ...values, eventDate })) }>
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <Field name="description" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="logo">Logo URL</label>
                <Field name="logo" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="eventDate">Date</label>
                <Field name='eventDate' component={ () => datePicker(eventDate, selectDate) } />
            </div>
            <button type="submit">{ getSubmitButton(loading) }</button>
        </form>
    )
};

EventCreator.PropTypes = {
    createEvent: PropTypes.func,
    selectDate: PropTypes.func,
    loading: PropTypes.bool,
    eventDate: PropTypes.date
};

export default reduxForm({form: 'event-creator'})(EventCreator);
