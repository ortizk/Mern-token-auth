import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value});
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
		axios.post('/auth/signup', this.state)
		.then(result => {
			console.log('SUCCESS', result)
			// Add the newly received token to LS
			localStorage.setItem('mernToken', result.data.token);
			// Udate the user with a call to App.js
			this.props.updateUser();
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}


	render() {
		if(this.props.user){
			return (<Redirect to="/profile" />);
		}
		return(
			<div>
				<h1>Signup as a new user</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input name="Name" placeholder="what is your name?" value={this.state.name} onChange={this.handleNameChange} />
					</div>
					<div>
						<input name="Email" placeholder="what is your email?" value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
					</div>
					<input type="submit" value="Sign Me Up!" className="button" />
				</form>
			</div>
		);
	}
}

export default Signup;