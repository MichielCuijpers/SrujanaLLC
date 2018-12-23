import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './app.css';
import actions from '../../actions/actions';
import Nav from '../presentational/Nav';
import Home from '../presentational/Home';
import About from '../presentational/About';
import Events from '../presentational/Events';
import Team from '../presentational/Team';
import Contact from '../presentational/Contact';
import { PAGE_NAME } from '../../Constants';

const getDisplay = (currentPage) => {
    switch(currentPage) {
        case PAGE_NAME.HOME:
            return <Home />;
        case PAGE_NAME.ABOUT:
            return <About />;
        case PAGE_NAME.EVENTS:
            return <Events />;
        case PAGE_NAME.TEAM:
            return <Team />;
        case PAGE_NAME.CONTACT:
            return <Contact />;
        default:
            return <Home />;
    }
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav setPage={ this.props.actions.setPage }/>
                { getDisplay(this.props.currentPage) }
            </div>
        );
    }
}

App.PropTypes = {
    setPage: PropTypes.func,
    currentPage: PropTypes.string
};

const mapStateToProps = (state) => {
    const {currentPage} = state.navigationReducer;
    return {currentPage};
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({ ...actions }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* TODO:
    - ADD events to db
        - create api methods/endpoint
        - create form+link to form
    - GET events from db to events.js
        - get events on page load
        - add loader on events page
*/
