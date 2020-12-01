import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	username:"",
        	email:"",
        	password:"",
        	password2:""
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]:e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault()
        console.log("submit")
    }

    render() {
        const {username, email, password, password2} = this.state
        return (
        	<div className="col-md-6 m-auto">
        	<div className="card card-body mt-5">
        		<h2 className="text-center">Register</h2>
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
                        <label>email</label>
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(e) => this.onChange(e)}
                        value={email}
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
                        <label>confirm password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password2"
                        onChange={(e) => this.onChange(e)}
                        value={password2}
                         />                      
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Register</button>      
                    </div>
                    <p>
                        Already have an account <Link to="/login">Login</Link>
                    </p>
                </form>
        	</div>
        	</div>
            
        );
    }
}

export default Register;
