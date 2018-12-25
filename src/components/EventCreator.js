import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from "react-datepicker";
import './eventCreator.css';

import "react-datepicker/dist/react-datepicker.css";

const datePicker = (eventDate, selectDate) => {
    return (
        <DatePicker
            peekNextMonth
            showWeekNumbers
            showMonthDropdown
            showYearDropdown
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

const submitEvent = (values) => {
    event.preventDefault();
    console.log('||.||.||.||.||.||.||');
    console.log('submitting form values...', values);
    console.log('||.||.||.||.||.||.||');
}

const EventCreator = (props) => {
    const { handleSubmit, eventDate, selectDate } = props;
    return (
        <form className="create-event-form" onSubmit={ handleSubmit((values) => submitEvent({ ...values, eventDate })) }>
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="logo">Logo URL</label>
                <Field name="logo" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="eventDate">Date</label>
                <Field name='eventDate' component={ () => datePicker(eventDate, selectDate) } />
            </div>
            <button type="submit">Create Event</button>
        </form>
    )
}

export default reduxForm({form: 'event-creator'})(EventCreator);
