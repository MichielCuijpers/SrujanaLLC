import React from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import { PAGE_NAME } from '../../Constants';

export default function Nav({ setPage }) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 col-xs-12 text-center links">
                    <div onClick={ () => setPage(PAGE_NAME.ABOUT) }className="col-xs-2 col-md-offset-1 nav">
                        <h5>Srujana</h5>
                    </div>
                    <div onClick={ () => setPage(PAGE_NAME.EVENTS) }className="col-xs-2 nav">
                        <h5>Events</h5>
                    </div>
                    <div onClick={ () => setPage(PAGE_NAME.HOME) }className="col-md-2 col-xs-4 home text-center">
                        <img
                            src="https://image.ibb.co/b9zFFk/sargana_logo_ENG_1.png"
                            alt="sargana_logo_ENG_1"
                            className="homeLogo"/>
                    </div>
                    <div onClick={ () => setPage(PAGE_NAME.TEAM) }className="col-xs-2 nav">
                        <h5>Team</h5>
                    </div>
                    <div onClick={ () => setPage(PAGE_NAME.CONTACT) }className="col-xs-2 nav">
                        <h5>Contact</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

Nav.PropTypes = {
    setPage: PropTypes.func
};
