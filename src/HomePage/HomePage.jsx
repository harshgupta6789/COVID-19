import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../my-components';

import { userActions } from '../_actions';
import image from './images/image.png';
import styles from './HomePage.module.css';
import { fetchData } from './api/';

import { Cards, CountryPicker, Chart } from './components';


class HomePage extends React.Component {

    state = {
        data: {},
        country: 'United States',
    }

    async componentDidMount() {
        this.props.getUsers();

        const data = await fetchData();
        console.log(data);

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div style={{height: "150vh"}}>
                <NavBar/>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="COVID-19" />
                    {/* <Cards data={data} /> */}
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    {/* <Chart data={data} />  */}
                    <Cards/>
                    <Chart/>
                </div>
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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };