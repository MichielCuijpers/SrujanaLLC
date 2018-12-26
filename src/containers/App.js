import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './app.css';
import actions from '../actions/actions';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Events from '../components/Events';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Admin from '../components/Admin';
import { PAGE_NAME } from '../Constants';

const getDisplay = ({ currentPage, eventDate, events, actions }) => {
    switch(currentPage) {
        case PAGE_NAME.HOME:
            return <Home />;
        case PAGE_NAME.ABOUT:
            return <About />;
        case PAGE_NAME.EVENTS:
            return <Events eventList={ events } />;
        case PAGE_NAME.TEAM:
            return <Team />;
        case PAGE_NAME.CONTACT:
            return <Contact />;
        case PAGE_NAME.ADMIN:
            return <Admin
                eventDate={ eventDate }
                selectDate={ actions.selectDate }
                createEvent={ actions.createEvent }
                eventList = { events } />;
        default:
            return <Home />;
    }
};

class App extends Component {
    componentDidMount() {
        this.props.actions.fetchEvents();
    }

    render() {
        return (
            <div className="App">
                <Nav setPage={ this.props.actions.setPage }/>
                { getDisplay(this.props) }
            </div>
        );
    }
}

App.PropTypes = {
    setPage: PropTypes.func,
    fetchEvents: PropTypes.func,
    createEvent: PropTypes.func,
    selectDate: PropTypes.func,
    eventDate: PropTypes.date,
    events: PropTypes.array,
    currentPage: PropTypes.string
};

const mapStateToProps = (state) => {
    const {currentPage} = state.navigationReducer;
    const {eventDate, events} = state.eventReducer;
    return { currentPage, eventDate, events };
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({ ...actions }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* TODO:
    - ADD events to db
        - create link to form
    - GET events from db to events.js
        - add loader on events page
*/
