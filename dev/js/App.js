import React from 'react';
import { connect } from 'react-redux';
// import Routes from './routes.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CONFIG from './config'
import STORAGE from './helpers/storage'
import Routes from './routes.js';
const queryString = require('query-string');

require('../css/style.css')
require('../css/snackbar.css')

const logPageView = () => {
};

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }

   
    render() {
        return (
            <BrowserRouter>
                    <Routes />
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {

    return {};
}

const mapDispatchToProps = (dispatch) => {

    return {
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App)
