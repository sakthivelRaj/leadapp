import axios from 'axios'
import {GET_LEADS, DELETE_LEAD, ADD_LEAD,  
CREATE_MESSAGE} from './types'
import {createMessage, returnErrors} from './messages'

//GET_LEADS
export const getLeads = () => dispatch => {
	axios.get('api/leads')
	.then(res => {
	console.log(res)
		console.log(res)
		dispatch({
			type: GET_LEADS,
			payload: res.data 
		})		
	})
	.catch(err => {
		console.log("inside catch getLeads")
		console.log(err.response)
		dispatch(returnErrors(err.response.data, err.response.status))
	})
}
//DELETE_LEAD
export const deleteLead = (id) => dispatch => {
	axios.delete(`/api/leads/${id}`)
	.then(res => {		
		dispatch(createMessage({leadDeleted: "lead deleted"}))		
		dispatch({
			type: DELETE_LEAD,
			payload: id 
		})	

	})
	.catch(err => console.log(err))
}

// ADD_LEAD
export const addLead = (lead) => dispatch => {	
	axios.post('/api/leads/', lead)
	.then(res => {	
		dispatch(createMessage({leadAdded: "lead added"}))
		dispatch({
			type: ADD_LEAD,
			payload: res.data 
		})	

	})
	.catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


