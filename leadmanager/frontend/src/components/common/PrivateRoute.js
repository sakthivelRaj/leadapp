import React, { PropTypes } from 'react';
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    if(auth.isAuthenticated){
        console.log("******Authenticated")
    }else{
        console.log("****** Not Authenticated")
    }
    return (
        <Route
        {...rest}
        render={
        	(props) => {
        		if(auth.isLoading)
        			return <h2>Loading...</h2>
        		else if(!auth.isAuthenticated)
        			return <Redirect to="/login" />
        		else
        			return <Component {...props} />
        	}
        }
         />
    );
};

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);
