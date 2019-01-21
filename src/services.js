import axios from 'axios';

// GET all events from db
export const fetchEvents = () => axios.get('/api/events').then(res => res.data);

export const createEvent = (event) => axios.post('/api/events', event).then(res => res.data);

export const deleteEvent = (eventId) => axios.delete(`/api/events/${eventId}`).then(res => res.data);
