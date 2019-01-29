import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
import CREDENTIALS from '../../creds';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Events from '../components/Events';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Admin from '../components/Admin';
import { PAGE_NAME } from '../Constants';

const getDisplay = ({ currentPage, eventDate, events, loading, actions }) => {
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
                deleteEvent={ actions.deleteEvent }
                loading={ loading }
                eventList = { events } />;
        default:
            return <Home />;
    }
};

class App extends Component {
    componentDidMount() {
        if (document.location.hash === `#/ADMIN_${CREDENTIALS.ADMIN_PASS}`) {
            this.props.actions.setPage(PAGE_NAME.ADMIN);
        }
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
    deleteEvent: PropTypes.func,
    eventDate: PropTypes.date,
    events: PropTypes.array,
    loading: PropTypes.bool,
    currentPage: PropTypes.string
};

const mapStateToProps = (state) => {
    const {currentPage} = state.navigationReducer;
    const {eventDate, events, loading} = state.eventReducer;
    return { currentPage, eventDate, events, loading };
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({ ...actions }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* TODO:
    - delete event confirm
    - Add event time
    - add loader on events page
    - style: Scss GLOBALS
*/
