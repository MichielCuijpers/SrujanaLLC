import React from 'react';
import PropTypes from 'prop-types';
import SrujanaLogo from '../assets/srujana-logo.png'
import './eventCard.scss'

const getDescription = (description) => (
    <div className="description">{ description }</div>
);

const getPoster = (posterUrl) => (
    <div className="text-center poster">
        <img
            src={ posterUrl || SrujanaLogo }
            alt="Srujana_postcard"/>
    </div>
);

export default function EventCard({ event }) {
    const { title, date, logo, description } = event;
    return (
        <div className="row">
            <div className="col-xs-12 text-center" key={ `${title}:${date}` }>
                <div className="event-card">
                    <div className="event-description">
                        <div className="banner">
                            <div className="name">{title}</div>
                            <div className="date">{date}</div>
                        </div>
                        { description && getDescription(description)}
                    </div>
                    { getPoster(logo) }
                </div>
            </div>
        </div>
    );
}

EventCard.PropTypes = {
    title: PropTypes.array,
    date: PropTypes.array,
    logo: PropTypes.array,
    description: PropTypes.array
};
