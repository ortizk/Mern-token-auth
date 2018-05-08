import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value});
	}

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		//THIS IS WERE WE CONNECT THE BACKEND
		// this route matches the router auth route on the backend
		// for axios, the first parameter is where we want to go, and the second is what the data we want to send
		axios.post('/auth/login', this.state)
		.then(result => {
			console.log('SUCCESS', result);
			// Add the newly received token to LS
			localStorage.setItem('mernToken', result.data.token);
			// Udate the user with a call to App.js
			this.props.updateUser();
		})
		.catch(err => {
			console.log('ERROR', err.response.data);
		});
	}

	render() {
		if(this.props.user){
			return (<Redirect to="/profile" />);
		}
		return(
			<div>
				<h1>Login as an existing user</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input name="Email" placeholder="what is your email?" value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
					</div>
					<input type="submit" value="Log Me In" className="button" />
				</form>
			</div>
		);
	}
}

export default Login;