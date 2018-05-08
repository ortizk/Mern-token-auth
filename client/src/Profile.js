import React, { Component } from 'react';

class Profile extends Component {
	render() {
		if(this.props.user){
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
				</div>
			);
		}
		return(
			<div>
				<p>PROFILE PAGE</p>
				<p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign Up</a>?</p>
			</div>
		);
	}
}

export default Profile;