import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.isFetching
                    ? <h1>Loading...</h1>
                    : <h1>My App!</h1>}
            </div>
        );
    }
}

App.PropTypes = {
    isFetching: PropTypes.bool
};

const mapStateToProps = (state) => {
    const {isFetching} = state.statusReducer;
    return {isFetching};
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);