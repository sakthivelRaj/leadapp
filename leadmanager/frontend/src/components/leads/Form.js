import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addLead} from '../../actions/leads'
import propTypes from "prop-types"

class Form extends Component {
	constructor(props){
		super(props)
			this.state = {
			name: '',
			email: '',
			message: ''
		}
	}
	
	onChange(e) {
		this.setState({ [e.target.name]:e.target.value})
	}
	
	onSubmit(e) {
		e.preventDefault()
		const {name, email, message} = this.state
		const lead = {name, email, message}		
		this.props.addLead(lead)
        this.setState({
            name: '',
            email: '',
            message: ''
        })
	}

    render() {

    	const {name, email, message} = this.state

        return (
            <div className="card card-body mt-4 mb-4">
            	<h2>Add Lead</h2>
            	<form onSubmit={this.onSubmit.bind(this)}>
            		<div className="form-group">
            		 <label>Name</label>
            		 <input
            		   className="form-control"
            		   type="text"
            		   name="name"
            		   onChange={(e) => this.onChange(e)}
            		   value={name}
            		  />            			
            		</div>

            		<div className="form-group">
            		 <label>Email</label>
            		 <input
            		   className="form-control"
            		   type="email"
            		   name="email"
            		   onChange={(e) => this.onChange(e)}            		  
            		   value={email}
            		  />            			
            		</div>

            		<div className="form-group">
            		 <label>Message</label>
            		 <textarea
            		   className="form-control"
            		   type="text"
            		   name="message"
            		   onChange={(e) => this.onChange(e)}            		   
            		   value={message}
            		  />            			
            		</div>

            		<div className="form-group">
            		   <button type="submit" className="btn btn-primary"
            		   	>submit</button>          			
            		</div>
            	</form>
            	
            </div>
        );
    }
}
Form.propTypes = {
   	addLead: propTypes.func.isRequired
}
export default connect(null, {addLead})(Form);
