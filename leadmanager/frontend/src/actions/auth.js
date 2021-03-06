import axios from "axios"
import {returnErrors} from './messages'
import {USER_LOADING, USER_LOADED, AUTH_ERROR,
LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS} from './types'

export const loadUser = () => (dispatch, getState) => {
	// User Loading
	dispatch({type: USER_LOADING})

	//get token from state
	const token = getState().auth.token

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}

	if(token){
		config.headers["Authorization"] = `Token ${token}`
	}

	axios.get('api/auth/user', config)
	.then(res => {
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	}).catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status))
		dispatch({type: AUTH_ERROR})
	})
}
// Login user
export const login = (username, password) => (dispatch) => {

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}
	const body = JSON.stringify({username, password})

	axios.post('api/auth/login', body, config)
	.then(res => {
		console.log(res.data)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
	}).catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status))
		console.log("INSIDE LOGIN FAIL ERROR")
		dispatch({type: LOGIN_FAIL})
	})
}

// LOGOUT USER

export const logout = () => (dispatch, getState) => {	
	//get token from state
	const token = getState().auth.token

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}

	if(token){
		config.headers["Authorization"] = `Token ${token}`
	}

	axios.post('api/auth/logout/', null, config)
	.then(res => {
		dispatch({
			type: LOGOUT_SUCCESS			
		})
	}).catch(err => {
		dispatch(returnErrors(err.response.data, err.response.status))
		dispatch({type: AUTH_ERROR})
	})	
}









