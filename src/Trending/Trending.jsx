import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from '../my-components';

import { userActions } from '../_actions';

class Trending extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div style={{height: "100vh"}}>
                <NavBar/>
                Trending
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(Trending);
export { connectedHomePage as Trending };