import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import propTypes from "prop-types"
import {getLeads, deleteLead} from '../../actions/leads'

class Leads extends Component {

    componentDidMount() {
        
    	this.props.getLeads()
    }

    render() {        
        return (
            <Fragment>
            	<table className="table table-striped">
            	<thead>
            		<tr>
            			<th>ID</th>
            			<th>Name</th>
            			<th>Email</th>
            			<th>Message</th>

            		</tr>
            	</thead>
            	<tbody>
            		{
            			this.props.leads.map(lead => (
            				<tr key={lead.id}>
            					<td>{lead.id}</td>
            					<td>{lead.name}</td>
            					<td>{lead.email}</td>
            					<td>{lead.message}</td>
            					<td>
            						<button
            						onClick={() => this.props.deleteLead(lead.id)}
            						className="btn btn-danger btn-sm">Delete</button>
            					</td>

            				</tr>

            				))
            		}
            		
            	</tbody>
            	</table>
            </Fragment>
        );
    }
}
Leads.propTypes = {
   	leads: propTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	leads: state.leads.leads	
})

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads);
