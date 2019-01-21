import isAfter from 'date-fns/is_after';

const byAscendingDate = (a,b) => {
    return new Date(b.date) - new Date(a.date);
};

const byDescendingDate = (a,b) => {
    return new Date(a.date) - new Date(b.date);
};

const today = new Date();

export const getUpcomingEvents = (eventList) =>
    eventList
        .filter(event => isAfter(new Date(event.date), today))
        .sort(byDescendingDate);

export const getPreviousEvents = (eventList) =>
    eventList
        .filter(event => !isAfter(new Date(event.date), today))
        .sort(byAscendingDate);
