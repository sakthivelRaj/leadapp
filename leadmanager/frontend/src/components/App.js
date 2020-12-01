import React, {Fragment} from 'react';
import Header from './layouts/Header'
import DashBoard from './leads/DashBoard'
import {Provider} from 'react-redux'
import store from '../store'
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layouts/Alerts'
import {HashRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
import Register from './accounts/Register'
import Login from './accounts/Login'
import PrivateRoute from './common/PrivateRoute'
import {loadUser} from '../actions/auth'
//Alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

class App extends React.Component{
    componentDidMount() {
        store.dispatch(loadUser())
    }
    
    render(){
        return(
            <Provider store={store} >
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
                <Fragment>
                <Header />            
                <Alerts />
                
                <div className="container">
                <Switch>
                    <PrivateRoute exact path="/" component={DashBoard} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                </Switch>
                </div>                    
                </Fragment>                
            </Router>
            </AlertProvider>                
            </Provider >
        )
    }
}

export default App