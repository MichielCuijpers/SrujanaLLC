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

const getDisplay = (currentPage) => {
    switch(currentPage) {
        case 'HOME':
            return <Home />;
        case 'ABOUT':
            return <About />;
        case 'EVENTS':
            return <Events />;
        case 'TEAM':
            return <Team />;
        case 'CONTACT':
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
    - Pull/Add Events From/To db
        - create add event form
        - load events from db to events.js
    - Create *bd*
*/
