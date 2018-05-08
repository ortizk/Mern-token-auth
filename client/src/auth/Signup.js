import React, { Component } from 'react';

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
	}


	render() {
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