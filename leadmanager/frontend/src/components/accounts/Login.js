import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	username:"",
        	password:""      
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]:e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
        console.log("submit")
        const {username, password} = this.state
        this.props.login(username, password)
    }

    render() {
        if(this.props.isAuthenticated)
            return <Redirect to="/" />
        
        const {username, password} = this.state
        return (
        	<div className="col-md-6 m-auto">
        	<div className="card card-body mt-5">
        		<h2 className="text-center">Login</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>username</label>
                        <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={(e) => this.onChange(e)}
                        value={username}
                         />                      
                    </div>
                    
                    <div className="form-group">
                        <label>password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e) => this.onChange(e)}
                        value={password}
                         />                      
                    </div>
                                       
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Login</button>      
                    </div>
                    <p>
                        Don't have an account <Link to="/register">Register</Link>
                    </p>
                </form>
        	</div>
        	</div>
            
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
